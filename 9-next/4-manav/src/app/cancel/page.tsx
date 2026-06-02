import Link from "next/link";
import { FC } from "react";
import { MdOutlineCancel } from "react-icons/md";

const CancelPage: FC = () => {
  return (
    <div className="h-[80vh]">
      <div className="h-2/5 bg-red-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
          <MdOutlineCancel className="text-[100px]" />
          <p className="font-semibold text-4xl">Ödeme Başarısız Oldu</p>
        </div>
      </div>

      <div className="h-3/5 p-10 text-black flex flex-col justify-center text-center">
        <p className="text-lg">Ödeme işlemini gerçekleştirirken bir sorun oluştu</p>

        <p className="mt-4 mb-10 text-zinc-700">Lütfen daha sonra tekrar deneyiniz</p>

        <div className="text-center my-5 flex gap-5 justify-center">
          <Link href="/" className="border shadow py-2 px-5 rounded-lg hover:shadow-lg hover:bg-gray-100">
            Anasayfa
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
