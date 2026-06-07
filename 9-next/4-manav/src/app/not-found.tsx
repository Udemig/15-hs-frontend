import Link from "next/link";

const NotFound = () => {
  return (
    <div className="page flex text-center items-center justify-center gap-5">
      <h1 className="text-3xl">404</h1>

      <p>Aradığınız içerik bulunamadı</p>

      <Link href="/" className="border border-zinc-200 py-2 px-4 rounded-md hover:underline">
        Anasayfa'ya Dön
      </Link>
    </div>
  );
};

export default NotFound;
