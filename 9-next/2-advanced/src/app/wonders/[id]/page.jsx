import { data } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const WonderDetail = async ({ params }) => {
  // url'den id parametresini al
  const { id } = await params;

  // data dizisindeki id'si bilinen elemanı bul
  const item = data.find((item) => item.id === id);

  return (
    <div className="mx-auto text-3xl">
      <div className="w-3/4 lg:w-1/2 mx-auto">
        <Link href="/wonders">Geri</Link>

        <h1 className="text-center text-5xl font-bold mt-10 mb-5">{item.name}</h1>

        <Image src={item.src} alt={item.name} className="w-full aspect-square object-cover rounded-md" />

        <h3 className="my-8">{item.photographer}</h3>

        <h3>Lokasyon: {item.location}</h3>
      </div>
    </div>
  );
};

export default WonderDetail;
