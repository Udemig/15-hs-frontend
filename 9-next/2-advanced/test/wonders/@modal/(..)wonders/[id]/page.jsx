"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

// relative import
// import { data } from "../../../../../utils/constants";

// abolute import
import { data } from "@/utils/constants";

// özelleştirmeden önce
// import x from "@/components/shared/x";

// özelleştirmeden sonra
import x from "@/shared/x";

const Modal = () => {
  // router kurulumunu yap
  const router = useRouter();
  // url'den id parametresini al
  const { id } = useParams();
  // id'si bilinen elemanı dizide bul
  const item = data.find((item) => item.id === id);

  // x butonuna tıklanınca önceki sayfaya yönlendir
  const handleClose = () => {
    // 1 sayfa geriye yönlendir
    router.back();
    // 1 sayfa ileriye yönlendir
    router.forward();
    // belirli bir sayfaya yönlendir
    router.push("/home");
    // belirli bir sayfaya yönlendir - geçmişi temizleyerek
    router.replace("/home");
    // sayfayı yeniden renderla
    router.refresh();
  };

  return (
    <div className="fixed inset-0 bg-black/50 grid place-items-center backdrop-blur-xs z-999 p-10">
      <div className="bg-white text-black px-10 pb-10 rounded-md max-w-lg">
        <div className="flex justify-end my-5 text-2xl">
          <button onClick={handleClose}>X</button>
        </div>

        <h1 className="text-center font-bold">{item.name}</h1>

        <Image
          src={item.src}
          alt={item.name}
          className="max-h-75 my-5 text-3xl object-cover rounded-md aspect-square"
        />

        <h3 className="my-6">{item.photographer}</h3>
        <h3>Lokasyon: {item.location}</h3>
      </div>
    </div>
  );
};

export default Modal;
