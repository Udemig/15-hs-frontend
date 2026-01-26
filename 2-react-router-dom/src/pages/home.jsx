import { useNavigate } from "react-router-dom";

const Home = () => {
  // useNavigate: link elementinin görevini yapan bir fonksiyon döndürür
  const navigate = useNavigate();

  return (
    <div className=" h-full grid place-items-center">
      <div className="text-center space-y-5">
        <h1 className="text-5xl font-semibold">Ana Sayfa</h1>

        <p>Türkiye'nin en gelişmiş kitap platformuna hoş geldiniz</p>

        <button onClick={() => navigate("/ürünler")}>Kitap'lara Gözat</button>
      </div>
    </div>
  );
};

export default Home;
