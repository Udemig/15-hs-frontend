import { useEffect, useState } from "react";
import api from "../api";
import Card from "../components/card";
import Filter from "../components/filter";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  // url'deki query parametresine erişmek için:
  const [searchParams, setSearchParams] = useSearchParams();

  // url'deki arama_terimi parametresine erişelim
  const searchTerm = searchParams.get("arama_terimi");

  // api'dan gelen kitaplar verisini tutan state
  const [books, setBooks] = useState([]);

  // component'ın ekrana basılma anını izle:
  useEffect(() => {
    const params = { q: searchTerm };

    api.get("/books", { params }).then((res) => setBooks(res.data));
  }, [searchTerm]);

  return (
    <div className="container">
      <div>
        <h1 className="text-4xl font-semibold">Ürünler Sayfası</h1>
        <p className="mt-3 text-zinc-700">Binlerce kitap arasından favorilerinizi keşfedin</p>
      </div>

      <Filter />

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;
