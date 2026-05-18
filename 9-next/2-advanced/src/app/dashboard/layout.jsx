/*
 ! Parallel Routes
 * Slot olarak tanımlanan sayfalar layout'a prop olara gelir
 * Not: Burada 4 slot yerine 4 normal component oluşturup ekrana basabilirdik ama o zaman page.jsx'in özelliklerinden faydalanamazdık (metadata,loading,error,routing...)
*/

import Link from "next/link";

const Layout = ({ children, notifications, revenue, users }) => {
  return (
    <div className="my-10">
      <div className="flex justify-center my-10 gap-10">
        <Link href="/dashboard">Panel</Link>
        <Link href="/dashboard/settings">Panel Ayarları</Link>
      </div>

      <div className="box border-red-500!">{children}</div>

      <div className="flex my-10 gap-10">
        <div className="flex-1">{notifications}</div>
        <div className="flex-1">{revenue}</div>
      </div>

      <div>{users}</div>
    </div>
  );
};

export default Layout;
