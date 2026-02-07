import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import Spinner from "../../components/loader/spinner";
import Error from "../../components/error";
import Shorts from "../../components/shorts";
import QueryListing from "./query-listing";
import Card from "../../components/card";

const Search = () => {
  const [moreLoading, setMoreLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);

  // url'den aratılan terimi al
  const [searhParams] = useSearchParams();
  const query = searhParams.get("search_query");

  // sayfa yüklenince api'dan verileri al
  useEffect(() => {
    setLoading(true);

    const params = { query, geo: "TR", lang: "tr" };

    api
      .get("/search", { params })
      .then((res) => {
        setData(res.data.data);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  // içeriğin devamını yükleyicek fonksiyon
  const handleLoadMore = () => {
    setMoreLoading(true);

    // parametrelere önceki istekten gelen token'ı ekle
    const params = { query, token, geo: "TR", lang: "tr" };

    api
      .get("/search", { params })
      .then((res) => {
        setData([...data, ...res.data.data]);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setMoreLoading(false));
  };

  // api'dan gelen yanı içerisindeki video | shorts | shorts_listing türündeki verileri filtreledik
  const filtredArr = data.filter(
    (i) => i.type === "video" || i.type === "shorts" || i.type === "shorts_listing" || i.type === "query_listing",
  );

  return (
    <div className="page pb-10">
      <h2 className="text-2xl">
        <span className="font-bold">{query}</span> için sonuçlar
      </h2>

      {loading ? (
        <Spinner />
      ) : error ? (
        <Error message={error} />
      ) : (
        <>
          <div className="flex flex-col gap-4 @container">
            {filtredArr.map((item, key) =>
              item.type === "shorts_listing" ? (
                <Shorts data={item.data} key={key} />
              ) : item.type === "query_listing" ? (
                <QueryListing data={item.data} key={key} />
              ) : (
                <Card video={item} key={key} isRow />
              ),
            )}
          </div>

          {moreLoading && <Spinner designs="my-10!" />}

          {!moreLoading && token && (
            <div className="flex justify-center">
              <button
                onClick={handleLoadMore}
                className="bg-zinc-800 py-2 px-5 my-10 rounded-md cursor-pointer hover:bg-zinc-700 transition"
              >
                Daha Fazla
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
