import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  // url ile alakalı bilgilere ve varsa yönlendiren sayfanın eklediği state'ê erişmemizi sağlar
  const location = useLocation();

  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="d-flex flex-column align-items-center text-center gap-4">
        <h1 className="display-4">404</h1>

        <h2 className="display-6 fw-semibold">{location.state ? location.state : "Aradığınız sayfa bulunamadı"}</h2>

        <p className="fs-5">
          Böyle bir sayfa bulunamıyor. <br /> Ana Sayfa’ya dönüp başka bir şey arayabilirsin
        </p>

        <Link to="/" className="btn btn-outline-secondary">
          Anasayfa'ya Dön
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
