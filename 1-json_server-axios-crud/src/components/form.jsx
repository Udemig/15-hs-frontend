import api from "../api";

const Form = ({ createTodo }) => {
  // form gönderilince çalışır
  const handleSubmit = (e) => {
    // sayfa yenilemesini engelle
    e.preventDefault();

    // başlık ve kategori inputlarındaki verileri al
    const title = e.target[0].value.trim();
    const category = e.target[1].value;

    // başlık değeri boş ise fonksiyonu durdur ve bildirim gönder
    if (!title) return alert("İçerik boş olamaz");

    // api'a gönderilecek yeni todo nesnesini hazırla
    const newTodo = {
      title,
      category,
      date: new Date().getTime(),
    };

    // api'a yeni todo'yu oluşturmak için istek at
    api
      .post("/todos", newTodo)
      // istek başarılı olursa state'i güncelle
      .then((res) => createTodo(res.data));

    // formu sıfırla
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Yeni Öğe Ekle</h2>

      <div className="form-group">
        <label>Başlık</label>
        <input type="text" />
      </div>

      <div className="form-group">
        <label>Kategori</label>
        <select>
          <option value="iş">İş</option>
          <option value="spor">Spor</option>
          <option value="finans">Finans</option>
          <option value="sosyal">Sosyal</option>
          <option value="alışveriş">Alışveriş</option>
          <option value="kişisel gelişim">Kişisel Gelişim</option>
        </select>
      </div>

      <div className="btn-group">
        <button type="submit">Gönder</button>
      </div>
    </form>
  );
};

export default Form;
