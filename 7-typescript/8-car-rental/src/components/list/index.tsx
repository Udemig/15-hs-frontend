import { useEffect, useState, type FC } from "react";
import { fetchCars } from "../../utils/service";
import type { Car } from "../../types";
import Loader from "../loader";
import Error from "../error";
import Container from "../container";
import Card from "../card";

const List: FC = () => {
  const [cars, setCars] = useState<Car[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    fetchCars()
      .then((data) => setCars(data.results))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

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
    <div className="padding-x max-width mb-10">
      <div className="home-cars-wrapper">
        {cars?.length === 0 ? (
          <Container>Aradığınız araç bulunamadı</Container>
        ) : (
          cars?.map((car) => <Card key={car.id} car={car} />)
        )}
      </div>
    </div>
  );
};

export default List;
