import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ListTanstack = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["quotes"],
    queryFn: () => axios.get("https://dummyjson.com/quotes"),
    retry: 5, // hata durumunda tekrar deneme sayısı
    retryDelay: 1000, // hata durumundaki istekler arası bekleme süresi
    staleTime: 2 * 60 * 1000, // cache'deki verinin tazelik süresi
  });

  if (isLoading) return <h1>Yükleniyor..</h1>;

  if (error)
    return (
      <div>
        <h1>{error.message}</h1>
        <button onClick={refetch}>Tekrar Dene</button>
      </div>
    );

  return (
    <div>
      {data.data.quotes.map((i) => (
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

export default ListTanstack;
