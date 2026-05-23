"use client";

// import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  // const path = usePathname();
  // const params = useParams();
  // const searchParams = useSearchParams();

  // console.log(searchParams.get("sort"));
  // console.log(searchParams.get("order"));

  return (
    <div className="flex flex-col gap-10">
      <h1>Contact</h1>

      <button onClick={() => router.back()}>Geri</button>
      <button onClick={() => router.forward()}>İleri</button>
      <button onClick={() => router.push("/about")}>Yönlendir</button>
      <button onClick={() => router.replace("/about")}>Yönlendir (Geçmiş X)</button>
      <button onClick={() => router.refresh()}>Yenile</button>
    </div>
  );
};

export default Contact;
