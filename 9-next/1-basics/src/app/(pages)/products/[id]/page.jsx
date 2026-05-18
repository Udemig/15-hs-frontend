import Link from "next/link";

// statik metadata
// export const metadata = {
//   title: "Ürün Detay",
// };

// dinamik metadata
export const generateMetadata = async ({ params }) => {
  // url'deki parametreler
  const { id } = await params;

  // api'a ürün bilgisi için istek at

  // metadatayı return ederiz
  return {
    title: `${id} id'li Ürün`,
    description: "selam",
  };
};

const Detail = async ({ params, searchParams }) => {
  const { id } = await params;
  const { isim } = await searchParams;

  return (
    <div>
      <Link href="/products">Geri Dön</Link>

      <h1>{id} - Detail</h1>
      <h2>{isim}</h2>
    </div>
  );
};

export default Detail;
