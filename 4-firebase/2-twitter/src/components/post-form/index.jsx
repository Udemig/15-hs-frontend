import { toast } from "react-toastify";
import UserAvatar from "../shared/user-avatar";
import FormActions from "./form-actions";
import TextArea from "./text-area";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import uploadFile from "../../firebase/upload-file";
import { useState } from "react";
import Preview from "./preview";

const PostForm = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputalardaki verileri al
    const text = e.target.content.value.trim();
    const file = e.target.media.files[0];

    // girdi yoksa bildirim gönder
    if (!text && !file) return toast.warning("Lütfen içeriği giriniz");

    // veritabanına yeni tweet'i kaydet
    try {
      setIsLoading(true);

      // medyayı storage'a yükle
      const mediaUrl = await uploadFile(file);

      // kolleksiyonun referansını al
      const collectionRef = collection(db, "tweets");

      // belgeyi kolleksiyona kaydet
      await addDoc(collectionRef, {
        user: {
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        },
        content: {
          text,
          media: mediaUrl,
          mediaType,
        },
        isEdited: false,
        likes: [],
        createdAt: serverTimestamp(),
      });

      // bildirim gönder ve sıfırla
      toast.success("Gönderi paylaşıldı");
      e.target.reset();
      handleCancelPreview();
      setIsLoading(false);
    } catch (error) {
      toast.error("Hata!" + error.message);
    }
  };

  // seçili medya değişince çalışır
  const handleMediaChange = (e) => {
    if (e.target.files?.[0]) {
      // inputtan seçilen dosyaya eriş
      const file = e.target.files[0];

      // seçilen dosyanın görüntülenmesini sağlayacak url oluştur
      setPreviewUrl(URL.createObjectURL(file));

      // desteklenen dosya tipini belirle
      const mediaType = file.type.startsWith("image")
        ? "image"
        : file.type.startsWith("video")
          ? "video"
          : file.type.startsWith("audio")
            ? "audio"
            : "not-supported";
      setMediaType(mediaType);
    }
  };

  // önizlemeyi iptal eden fonksiyon
  const handleCancelPreview = () => {
    setPreviewUrl(null);
    setMediaType(null);
  };

  return (
    <div className="border-b border-tw-gray p-4 flex gap-5">
      <UserAvatar url={user.photoURL} name={user.displayName} />

      <form onSubmit={handleSubmit} className="w-full pt-1">
        <TextArea />

        <Preview isLoading={isLoading} previewUrl={previewUrl} mediaType={mediaType} cancel={handleCancelPreview} />

        <FormActions handleMediaChange={handleMediaChange} isLoading={isLoading} mediaType={mediaType} />
      </form>
    </div>
  );
};

export default PostForm;
