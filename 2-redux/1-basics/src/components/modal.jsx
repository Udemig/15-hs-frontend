import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/actions/todo-actions";
import api from "../api";

const Modal = ({ isOpen, close, todo }) => {
  const dispatch = useDispatch();

  if (!isOpen) return;

  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki değeri al
    const newText = e.target[1].value;

    // .todo nesnesini güncelle
    const newTodo = { ...todo, text: newText };

    // api'a istek at
    dispatch(updateTodo(newTodo));

    // modalı kapat
    close();
  };

  return (
    <div className="fixed inset-0  bg-black/50 backdrop-blur-xs grid place-items-center p-10">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-zinc-800 p-10 rounded-lg">
        {/* Üst Kısım */}
        <div className="flex justify-between text-xl">
          <h3 className="font-bold">Düzenle</h3>
          <button type="button" onClick={close}>
            X
          </button>
        </div>

        {/* İçerik Kısmı */}
        <div className="flex flex-col gap-4 my-5">
          <label>Text'i Güncelle</label>
          <input
            type="text"
            required
            className="bg-black border border-gray-500 text-gray-100 p-2.5 rounded-md"
            defaultValue={todo.text}
          />
        </div>

        <div className="flex justify-end gap-5">
          <button type="button" className="text-zinc-300" onClick={close}>
            İptal
          </button>
          <button type="submit" className="btn bg-black text-lg">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
