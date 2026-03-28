import { useNavigate } from "react-router-dom";

const Home = () => {
  // useNavigate: link elementinin görevini yapan bir fonksiyon döndürür
  const navigate = useNavigate();

  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="text-center d-flex flex-column gap-4">
        <h1 className="display-4 fw-semibold">Ana Sayfa</h1>

        <p>Türkiye'nin en gelişmiş kitap platformuna hoş geldiniz</p>

        <button onClick={() => navigate("/ürünler")} className="btn btn-primary align-self-center">
          Kitap'lara Gözat
        </button>
      </div>
    </div>
  );
};

export default Home;
