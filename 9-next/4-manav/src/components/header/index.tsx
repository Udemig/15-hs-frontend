"use client";

import Link from "next/link";
import { FC } from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import SearchForm from "./search-form";
import { RiFileList3Line } from "react-icons/ri";
import CartBadge from "./cart-badge";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./locale-switcher";

const Header: FC = () => {
  const t = useTranslations("Header");

  return (
    <header className="sticky top-0 z-10 bg-white flex justify-between items-center py-5 px-7 lg:py-6 lg:px-10 shadow-sm">
      <Link href="/" className="text-green-600 font-bold text-2xl lg:text-3xl flex items-center gap-2">
        <MdOutlineLocalGroceryStore />
        <span>MANAV</span>
      </Link>

      <SearchForm />

      <div className="flex items-center gap-5">
        <Link href="/orders" className="header-link">
          <RiFileList3Line className="text-2xl" />
          <span className="max-md:hidden">{t("my-orders")}</span>
        </Link>

        <CartBadge />

        <LocaleSwitcher />
      </div>
    </header>
  );
};

export default Header;
