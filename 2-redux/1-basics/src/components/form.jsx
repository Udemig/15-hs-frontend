import { useDispatch } from "react-redux";
import { v4 } from "uuid";

const Form = () => {
  // dispatch kurulum
  const dispatch = useDispatch();

  // form gönderilince:
  const handleSubmit = (e) => {
    // sayfa yenilenmesini engelle
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();

    // kaydedilecek todo nesneni oluştur
    const newTodo = {
      id: v4(),
      text,
      isDone: false,
      createdAt: new Date().getTime(),
    };

    // yeni todo ekleniceğini reducer'a haber ver
    dispatch({ type: "CRATE", payload: newTodo });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 my-6">
      <input
        type="text"
        className="bg-zinc-800 border border-zinc-700 text-white rounded-md p-2 flex-1 outline-none"
        required
        placeholder="Bir şeyler yazınız..."
      />

      <button className="bg-yellow-600 px-4 py-2 rounded-md">Ekle</button>
    </form>
  );
};

export default Form;
