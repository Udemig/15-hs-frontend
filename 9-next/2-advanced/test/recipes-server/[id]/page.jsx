import { fetchRecipeById } from "@/utils/service";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }) => {
  const { id } = await params;
  const data = await fetchRecipeById(id);

  return (
    <div>
      <Link href="/recipes-server">Geri</Link>

      <div className="flex flex-col gap-10 items-center pt-20">
        <Image src={data.image} width={150} height={150} alt={data.name} className="rounded-md" />

        <h1 className="text-3xl">{data.name}</h1>

        <p>Mutfak: {data.cuisine}</p>

        <p>Zorluk: {data.difficulty}</p>

        <p>Rating: {data.rating}</p>
      </div>
    </div>
  );
};

export default Page;
