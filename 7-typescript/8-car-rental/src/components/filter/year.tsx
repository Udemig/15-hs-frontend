import { useEffect, useState, type FC, type SubmitEvent } from "react";
import { useSearchParams } from "react-router-dom";

const Year: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    setYear(searchParams.get("year") || "");
  }, [searchParams]);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (year) {
      searchParams.set("year", year);
    } else {
      searchParams.delete("year");
    }

    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="yıl" className="font-semibold mb-2 text-sm">
        Yıl
      </label>

      <div className="flex items-center">
        <input
          id="yıl"
          type="number"
          className="w-32 rounded-l-2xl input-bg"
          placeholder="örn: 2026"
          min={2000}
          max={new Date().getFullYear()}
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <button className="input-bg rounded-r-2xl cursor-pointer">
          <img src="/search.svg" className="size-5" alt="ara" />
        </button>
      </div>
    </form>
  );
};

export default Year;
