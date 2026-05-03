import { useEffect, useMemo, useState, type FC, type SubmitEvent } from "react";
import ReactSelect from "react-select";
import { selectStyles, makes } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const Searchbar: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [make, setMake] = useState<string | undefined>("");
  const [model, setModel] = useState<string>("");

  // url dışarıdan değişirse (ileri-geri) inputları senkronla
  useEffect(() => {
    setMake(searchParams.get("make") || "");
    setModel(searchParams.get("model") || "");
  }, [searchParams]);

  // forma gönderilince
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (make) {
      searchParams.set("make", make);
    } else {
      searchParams.delete("make");
    }

    const trimmedModel = model.trim();
    if (trimmedModel) {
      searchParams.set("model", trimmedModel);
    } else {
      searchParams.delete("model");
    }

    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  // makes dizisini react-select'in istedği formata çevir
  const arr = useMemo(() => makes.map((make) => ({ label: make, value: make })), [makes]);

  return (
    <form onSubmit={handleSubmit} className="searchbar flex gap-4 items-start justify-center">
      {/* Marka */}
      <div className="searchbar-item items-end">
        <div className="w-full flex flex-col z-2">
          <label htmlFor="marka" className="font-semibold mb-2 text-sm">
            Marka
          </label>

          <ReactSelect
            inputId="marka"
            placeholder="Marka.."
            styles={selectStyles}
            options={arr}
            isClearable
            value={make ? { label: make, value: make } : undefined}
            onChange={(e) => setMake(e?.value)}
          />
        </div>

        <button aria-label="ara" type="submit" className="mb-1 search-btn sm:hidden">
          <img src="/search.svg" alt="ara" className="size-6" />
        </button>
      </div>

      {/* Model */}
      <div className="searchbar-item items-start flex flex-col">
        <label htmlFor="model" className="font-semibold mb-2 text-sm">
          Model
        </label>

        <div className="w-full flex items-center">
          <div className="relative flex-1">
            <img
              src="/model-icon.png"
              alt="model-icon"
              className="size-6 absolute left-6 top-1/2 -translate-y-1/2 z-1"
            />

            <input
              id="model"
              type="text"
              className="searchbar-input pt-4"
              placeholder="Model.."
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>

          <button aria-label="ara" type="submit" className="mb-1 search-btn">
            <img src="/search.svg" alt="ara" className="size-6" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
