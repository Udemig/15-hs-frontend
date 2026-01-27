import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  // url ile alakalı bilgilere ve varsa yönlendiren sayfanın eklediği state'ê erişmemizi sağlar
  const location = useLocation();

  return (
    <div className="h-full grid place-items-center">
      <div className="flex flex-col items-center text-center gap-5">
        <h1 className="text-5xl">404</h1>

        <h2 className="text-4xl font-semibold">{location.state ? location.state : "Aradığınız sayfa bulunamadı"}</h2>

        <p className="text-lg">
          Böyle bir sayfa bulunamıyor. <br /> Ana Sayfa’ya dönüp başka bir şey arayabilirsin
        </p>

        <Link to="/" className="border rounded p-2">
          Anasayfa'ya Dön
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
