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
    api
      .get(`/books/${id}`)
      .then((res) => setBook(res.data))
      .catch(() => navigate("/not-found", { state: "Ürün bulunamadı" }))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  if (loading) return <h1 className="fs-2 text-center fw-bold my-5">Yükleniyor...</h1>;

  return (
    <div className="container">
      <Link to={-1} className="link-primary">
        Geri
      </Link>

      <h1 className="fs-2 text-center fw-bold my-4">Detay Sayfası</h1>

      <div className="d-flex flex-column align-items-center text-center gap-4">
        <img src={book.image} alt={book.title} className="img-fluid rounded" style={{ maxHeight: "420px" }} />

        <h1 className="display-6 fw-semibold">{book.title}</h1>

        <p>{book.description}</p>

        <div className="row g-3 w-100" style={{ maxWidth: "760px" }}>
          <p className="col-12 col-md-6 mb-0 d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Yazar</span>
            <span className="fw-semibold">{book.author}</span>
          </p>
          <p className="col-12 col-md-6 mb-0 d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Kategori</span>
            <span className="fw-semibold">{book.category}</span>
          </p>
          <p className="col-12 col-md-6 mb-0 d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Yıl</span>
            <span className="fw-semibold">{book.year}</span>
          </p>
          <p className="col-12 col-md-6 mb-0 d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Sayfa</span>
            <span className="fw-semibold">{book.page}</span>
          </p>
          <p className="col-12 mb-0 d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Fiyat</span>
            <span className="fw-semibold">{book.price}₺</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
