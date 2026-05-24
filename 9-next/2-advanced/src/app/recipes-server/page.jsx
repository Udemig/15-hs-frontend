import { delay } from "@/utils/delay";
import { fetchRecipes } from "@/utils/service";
import Image from "next/image";
import Link from "next/link";

// export const dynamic = "force-dynamic";

// export const revalidate = 60;

const RecipesServer = async () => {
  await delay(2000);
  const data = await fetchRecipes();

  return (
    <div className="border border-blue-500 p-5">
      <h1 className="font-bold">Tarifler - Sever</h1>

      <div>
        {data.recipes.map((recipe) => (
          <Link
            href={`/recipes-server/${recipe.id}`}
            key={recipe.id}
            className="flex gap-5 mt-5 p-5 border-b text-white!"
          >
            <Image src={recipe.image} alt={recipe.name} width={100} height={100} />

            <div>
              <h1>{recipe.name}</h1>
              <h1>{recipe.cuisine}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipesServer;
