import { toast } from "react-toastify";
import Modal from "./index";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import Loader from "../loader";
import deleteFile from "../../firebase/delete-file";
import uploadFile from "../../firebase/upload-file";

const EditModal = ({ isOpen, close, tweet }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMediaDeleting, setIsMediaDeleting] = useState(false);

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputtan veriyi al
    const text = e.target.text.value.trim();
    const file = e.target.media?.files[0];
    const fileType = file?.type?.split("/")?.[0];

    // veri boşsa hata ver
    if (!text && !file && !tweet.content.media && !isMediaDeleting) return toast.warning("İçerik boş olamaz");

    try {
      setIsLoading(true);

      // güncellenicek veriyi hazırla
      let updateData = {
        "content.text": text,
        isEdited: true,
      };

      // medya silinicekse güncellenicek veriyi değişitir
      if (isMediaDeleting) {
        updateData["content.media"] = null;
        updateData["content.mediaType"] = null;

        // eski medyayı storage'dan sil
        await deleteFile(tweet.content.media);
      }

      // eğer yeni dosya seçildiyse onu storage'a yükle
      if (file) {
        const mediaUrl = await uploadFile(file);
        updateData["content.media"] = mediaUrl;
        updateData["content.mediaType"] = fileType;
      }

      // güncellenicek belgenin referansanı al
      const docRef = doc(db, "tweets", tweet.id);

      // belgeyi güncelle
      await updateDoc(docRef, updateData);

      // modal'ı kapat
      close();
      setIsMediaDeleting(false);
    } catch (error) {
      toast.warning(`Hata: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      close={() => {
        close();
        setIsMediaDeleting(false);
      }}
    >
      <h1 className="text-2xl">Tweet'i Düzenle</h1>

      <form onSubmit={handleSubmit} className="flex flex-col mt-10 min-w-[90%]">
        <label className="text-sm mb-3 text-zinc-400">Metni Değiştir</label>

        <textarea
          name="text"
          defaultValue={tweet.content.text}
          className="resize-y min-h-20 max-h-62.5 bg-black text-secondary border border-zinc-700 rounded-md p-3 outline-none"
        ></textarea>

        <label className="text-sm mb-3 text-zinc-400 mt-8">Medyayı Değiştir</label>
        {tweet.content.media && !isMediaDeleting ? (
          <button
            onClick={() => setIsMediaDeleting(true)}
            type="button"
            className="submit-button font-semibold tracking-tight"
          >
            Medyayı Kaldır
          </button>
        ) : (
          <input type="file" name="media" className="border border-zinc-700 p-3 rounded-md" />
        )}

        <div className="flex justify-end mt-10 gap-5">
          <button type="button">Vazgeç</button>
          <button type="submit" disabled={isLoading} className="submit-button tracking-tight font-semibold">
            {isLoading ? <Loader /> : "Kaydet"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
