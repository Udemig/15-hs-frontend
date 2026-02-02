import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();

  // sayfa yüklenince ve category her değiştiğinde api'dan kategoriye ait videoları al
  useEffect(() => {
    // api'dan al
  }, [category]);

  return (
    <div className="page">
      <h1>{category}</h1>
    </div>
  );
};

export default Category;
