import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // useSearchParams kurulum
  // fonksiyonu çağırınca dizi içerisinde 2 eleman döner
  // 1) url'deki parametrelere erişmemizi ve değiştirmemizi sağlayan nesne
  // 2) url'i güncelleyen fonksiyon
  const [searchParams, setSearchParams] = useSearchParams();

  // form gönderilince:
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputta yazılan yazıya eriş
    const term = e.target[0].value.trim();

    // aratılan ifadeyi yeni bir parametre olarak ekle
    searchParams.set("arama_terimi", term);

    // parametrelerde yaptığımız güncellemeyi url'e aktar
    setSearchParams(searchParams);
  };

  return (
    <div className="card shadow-sm my-4">
      <form onSubmit={handleSubmit} className="card-body d-flex gap-2 p-3">
        <input
          type="text"
          placeholder="kitap ara.."
          className="form-control"
          defaultValue={searchParams.get("arama_terimi")}
        />
        <button type="submit" className="btn btn-primary">
          Ara
        </button>
      </form>
    </div>
  );
};

export default Filter;
