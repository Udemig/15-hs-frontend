// Next.js Image Component
import Image from "next/image";

// local image
import localImage from "../../assets/trees.jpg";

// remote url
const remoteUrl =
  "https://images.unsplash.com/photo-1775618189760-792fba0eb0f3?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-lg mb-2">Local Resim (Optimizasyon Yok)</h1>

        <Image src={localImage} alt="ağaçlar" quality={75} placeholder="blur" />
      </div>

      <div>
        <h1 className="text-lg mb-2">Local Resim (Optimizasyon Var)</h1>

        <Image src={localImage} alt="ağaçlar" quality={40} priority />
      </div>

      <div>
        <h1 className="text-lg mb-2">Remote Resim (Normal)</h1>

        <Image src={remoteUrl} alt="doğa" width={1200} height={800} priority />
      </div>

      <div className="relative h-[40vh]">
        <h1 className="text-lg mb-2">Remote Resim (fill)</h1>

        <Image src={remoteUrl} alt="doğa" fill />
      </div>
    </div>
  );
};

export default Gallery;
