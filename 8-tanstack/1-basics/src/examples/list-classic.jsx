import axios from "axios";
import { useEffect, useState } from "react";

const ListClassic = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchQuotes = () => {
    setIsLoading(true);

    axios
      .get("https://dummyjson.com/quotes")
      .then((res) => {
        setData(res.data.quotes);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  if (isLoading) return <h1>Yükleniyor..</h1>;

  if (error)
    return (
      <div>
        <h1>{error}</h1>
        <button onClick={fetchQuotes}>Tekrar Dene</button>
      </div>
    );

  return (
    <div>
      {data.map((i) => (
        <div>
          <span>{i.quote}</span>
          <br />
          <span>- {i.author}</span>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default ListClassic;
