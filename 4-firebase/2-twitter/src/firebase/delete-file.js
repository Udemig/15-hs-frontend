import { deleteObject, ref } from "firebase/storage";
import { storage } from ".";
import { toast } from "react-toastify";

const deleteFile = async (mediaUrl) => {
  if (!mediaUrl) return;

  // https://firebasestorage.googleapis.com/v0/b/hs-tw-e3c31.firebasestorage.app/o/[DOSYA_YOLU]?alt=media&token=f7f3b918-ee0f-4d4b-a9db-ddfd7b7f9806

  try {
    // url'deki karakter kodlarını normale çevir %2f === / | %20 === " "
    const normalUrl = decodeURIComponent(mediaUrl);

    // url'den dosya yolunu çıkar
    const startIndex = normalUrl.indexOf("/o/") + 3;
    const endIndex = normalUrl.indexOf("?");
    const path = normalUrl.slice(startIndex, endIndex);

    // silinecek dosyanın referansı al
    const fileRef = ref(storage, path);

    // medyayı sil
    await deleteObject(fileRef);
  } catch (error) {
    toast.error("Bir hata oluştu");
  }
};

export default deleteFile;
