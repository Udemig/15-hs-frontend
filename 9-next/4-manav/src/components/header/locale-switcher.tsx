"use client";

import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale, useLocale, useTranslations } from "next-intl";
import { ChangeEvent, FC, useTransition } from "react";
import { TbWorld } from "react-icons/tb";

const LocaleSwitcher: FC = () => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;

    // Aktif yolu koruyarak dili değiştir
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <label className="header-link cursor-pointer" title={t("label")}>
      <TbWorld className="text-2xl" />
      <select
        value={locale}
        onChange={handleChange}
        disabled={isPending}
        className="bg-transparent outline-none cursor-pointer max-md:hidden"
      >
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {t(cur)}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LocaleSwitcher;
