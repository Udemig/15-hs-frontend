import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const DeleteButton = () => {
  // eğer sayfa yüklenince api isteği atılacaksa: useQuery
  // eğer kullanıcı etkileşimiyle api isteği atılacaksa: useMutation
  const { isPending, mutate } = useMutation({
    mutationFn: () => axios.delete("https://dummyjson.com/post23s/1"),
    onSuccess: (res) => alert("İstek başarılı oldu"),
    onError: (err) => alert("İstek başarısız oldu"),
  });

  return (
    <div>
      <button disabled={isPending} onClick={mutate}>
        SİL
      </button>
    </div>
  );
};

export default DeleteButton;
