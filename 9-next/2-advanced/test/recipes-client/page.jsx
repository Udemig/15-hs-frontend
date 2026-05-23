"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const RecipesClient = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchRecipes = () => {
    setIsLoading(true);
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setData(data.recipes))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (isLoading) return <div>Yükleniyor...</div>;

  if (error)
    return (
      <div>
        <span>Hata: {error}</span>
        <button onClick={fetchRecipes}>Tekrar Dene</button>
      </div>
    );

  return (
    <div className="border border-red-500 p-5">
      <h1 className="font-bold">Tarifler - Client</h1>

      <div>
        {data.map((recipe) => (
          <div key={recipe.id} className="flex gap-5 mtt-5 p-5 border-b">
            <Image src={recipe.image} alt={recipe.name} width={100} height={100} />

            <div>
              <h1>{recipe.name}</h1>
              <h1>{recipe.cuisine}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesClient;
