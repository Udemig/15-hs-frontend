import type { FC } from "react";
import { useDeletePlace } from "../../services/hooks";

interface Props {
  id: string;
}

const DeleteButton: FC<Props> = ({ id }) => {
  const { isPending, mutate } = useDeletePlace();

  return (
    <div className="flex justify-end">
      <button
        disabled={isPending}
        className="border border-red-500 py-1 px-4 rounded-md transition hover:bg-red-100 text-red-500"
        onClick={() => mutate(id)}
      >
        {isPending ? "Siliniyor.." : "Sİl"}
      </button>
    </div>
  );
};

export default DeleteButton;
