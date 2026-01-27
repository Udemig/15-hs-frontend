import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../api";

const Detail = () => {
  // navigate kurulum
  const navigate = useNavigate();

  // api'dan gelen kitap versini tuttuğumuz state
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  // url'deki parametreye erişiriz
  const { id } = useParams();

  // component ekrana basılınca çalışır:
  useEffect(() => {
    setLoading(true);

    api
      .get(`/books/${id}`)
      .then((res) => setBook(res.data))
      .catch(() => navigate("/not-found", { state: "Ürün bulunamadı" }))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1 className="text-2xl text-center font-bold my-50">Yükleniyor...</h1>;

  return (
    <div className="container">
      <Link to={-1} className="underline text-blue-500">
        Geri
      </Link>

      <h1 className="text-2xl text-center font-bold my-5">Detay Sayfası</h1>

      <div className="flex flex-col items-center text-center gap-5">
        <img src={book.image} alt={book.title} className="max-h-100 rounded-lg" />

        <h1 className="text-4xl font-semibold">{book.title}</h1>

        <p>{book.description}</p>

        <div className="grid grid-cols-2 gap-5 w-full max-w-150">
          <p className="flex flex-col p-2 rounded-md bg-zinc-300">
            <span>Yazar</span>
            <span className="font-semibold">{book.author}</span>
          </p>
          <p className="flex flex-col p-2 rounded-md bg-zinc-300">
            <span>Kategori</span>
            <span className="font-semibold">{book.category}</span>
          </p>
          <p className="flex flex-col p-2 rounded-md bg-zinc-300">
            <span>Yıl</span>
            <span className="font-semibold">{book.year}</span>
          </p>
          <p className="flex flex-col p-2 rounded-md bg-zinc-300">
            <span>Sayfa</span>
            <span className="font-semibold">{book.page}</span>
          </p>
          <p className="flex flex-col p-2 rounded-md bg-zinc-300">
            <span>Fiyat</span>
            <span className="font-semibold">{book.price}₺</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
