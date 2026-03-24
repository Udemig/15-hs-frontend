import { IoMdClose } from "react-icons/io";

const Preview = ({ isLoading, previewUrl, mediaType, cancel }) => {
  if (!mediaType && !previewUrl) return;

  return (
    <div className="relative mb-5">
      <button
        type="reset"
        onClick={cancel}
        disabled={isLoading}
        className="absolute top-3 inset-e-3 text-2xl p-1 rounded-lg z-9999 bg-primary/50"
      >
        <IoMdClose />
      </button>

      {mediaType === "not-supported" && (
        <div className="pt-5">
          <p className="text-red-500">Dosya tipi desteklenmiyor</p>
        </div>
      )}

      {mediaType === "image" && <img src={previewUrl} alt="preview" className="rounded-xl" />}

      {mediaType === "audio" && <audio src={previewUrl} className="w-full my-10 " controls />}

      {mediaType === "video" && <video src={previewUrl} className="rounded-xl w-full" controls />}
    </div>
  );
};

export default Preview;
