import { useEffect, useRef, useState, type FC } from "react";
import { fetchCars } from "../../utils/service";
import type { Car } from "../../types";
import Loader from "../loader";
import Error from "../error";
import Container from "../container";
import Card from "../card";
import { useSearchParams } from "react-router-dom";
import Pagination from "rc-pagination";

const List: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState<Car[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // url'deki arama parametrelerine eriş
  const make: string = searchParams.get("make") || "";
  const model: string = searchParams.get("model") || "";
  const year: string = searchParams.get("year") || "";
  const page: string = searchParams.get("page") || "1";
  const limit: number = 12;

  useEffect(() => {
    setIsLoading(true);

    fetchCars(make, model, year, page, limit)
      .then((data) => {
        setCars(data.results);
        setTotalCount(data.total_count);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [make, model, year, page]);

  if (isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (error)
    return (
      <Container>
        <Error message={error} />
      </Container>
    );

  return (
    <div ref={containerRef} className="padding-x max-width mb-10">
      <div className="home-cars-wrapper">
        {cars?.length === 0 ? (
          <Container>Aradığınız araç bulunamadı</Container>
        ) : (
          cars?.map((car) => <Card key={car.id} car={car} />)
        )}
      </div>

      <Pagination
        total={totalCount}
        pageSize={limit}
        current={Number(page)}
        onChange={(current) => {
          // yeni sayfayı url'e ekle
          searchParams.set("page", String(current));
          setSearchParams(searchParams);

          // sayfa değişince sayfanın başına kaydır
          containerRef.current?.scrollIntoView();
        }}
        className="pagination"
        itemRender={(current, type, element) => {
          let label: React.ReactNode = current;
          if (type === "page") label = current;
          else return element;

          return (
            <button type="button" aria-label={type === "page" ? `Sayfa ${current}` : `${type} sayfa`}>
              {label}
            </button>
          );
        }}
      />
    </div>
  );
};

export default List;
