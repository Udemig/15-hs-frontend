import Link from "next/link";

const NotFound = () => {
  return (
    <div className="space-y-20">
      <h1>404</h1>
      <h2>Aradığınız Sayfa Bulunamadı</h2>
      <Link href="/">Anasayfa'ya Dön</Link>
    </div>
  );
};

export default NotFound;
