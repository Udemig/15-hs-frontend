import { useDispatch } from "react-redux";
import { INPUTS } from "../utils/constants";
import { createTask, updateTask } from "../redux/slices/crud-slice";

const TaskModal = ({ isOpen, close, task }) => {
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputlardaki verilere eriş
    const formData = new FormData(e.target);

    // inputlardaki verilere nesne formatında eriş
    const taskData = Object.fromEntries(formData.entries());

    // düzenlenicek eleman varsa update yoksa create aksiyonunu dispatch et
    task
      ? dispatch(updateTask({ id: task.id, ...taskData })) //
      : dispatch(createTask(taskData));

    // modalı kapat
    close();
  };

  if (!isOpen) return;

  return (
    <div className="fixed bg-black/20 inset-0 backdrop-blur-xs grid place-items-center z-999">
      <div className="bg-white p-5 rounded-md min-w-100">
        <div className="flex justify-end">
          <button onClick={close} className="bg-black">
            X
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
          {INPUTS.map((item, key) => (
            <div key={key} className="flex flex-col gap-1">
              <label htmlFor={item.name}>{item.label}</label>
              <input id={item.name} type={item.type} name={item.name} defaultValue={task?.[item.name]} />
            </div>
          ))}

          <div className="flex gap-5 mt-5">
            <button onClick={close} type="button" className="flex-1 bg-zinc-600">
              İptal
            </button>
            <button type="submit" className="flex-1">
              {task ? "Kaydet" : "Oluştur"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
