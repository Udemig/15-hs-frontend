"use client";
import Link from "next/link";
import { useState } from "react";

// Layout'lar HOC formatındadır
// Layout'lar bulunduğu klasördeki bütün sayfaları children propu olarak alır
const Layout = ({ children }) => {
  const [name, setName] = useState("");

  // yetkilendirme içinde layout kullanabiliriz
  // if ("kullanıdı admin rolünd değilse") return null;

  return (
    <div className="flex gap-10">
      <aside className="borrder border-zinc-500 flex flex-col gap-5 p-4 border rounded-md">
        <h1>Selam, {name}</h1>

        <input type="text" onChange={(e) => setName(e.target.value)} className="border w-60" />

        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </aside>

      {children}
    </div>
  );
};

export default Layout;
