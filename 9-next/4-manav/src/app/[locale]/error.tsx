"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const Error: FC<Props> = ({ error, reset }) => {
  const t = useTranslations("Error");

  return (
    <div className="flex flex-col items-center my-20 gap-10">
      <h1 className="text-xl">{t("title")}</h1>

      <p className="bg-red-500/20 py-2 px-5 rounded-lg text-red-700">{error.message}</p>

      <button onClick={reset} className="border-zinc-700 border py-2 px-4 rounded-md hover:bg-zinc-500/20">
        {t("retry")}
      </button>
    </div>
  );
};

export default Error;
