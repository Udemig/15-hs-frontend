import type { ChangeEvent, FC } from "react";
import { SORT_OPTIONS } from "../../utils/constants";
import { useGetPlaces } from "../../services/hooks";
import { useSearchParams } from "react-router-dom";

const Filter: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useGetPlaces();

  const locations = [...new Set(data?.map((i) => i.location))];

  // input alanından seçilem değeri url'e parametre olarak ekle
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, name } = e.target;

    searchParams.set(name, value);

    setSearchParams(searchParams);
  };

  // url'deki parametreleri temizle
  const handleClear = () => {
    setSearchParams({});
  };

  return (
    <form className="flex flex-col gap-5 lg:gap-8 lg:mt-15 lg:sticky lg:top-24 bg-white p-6 rounded-xl shadow-lg border border-zinc-100">
      <h2 className="text-xl font-bold text-zinc-800 pb-3 border-b border-zinc-200">Filtrele</h2>

      <div className="field">
        <label className="font-semibold text-zinc-700 text-sm">Nereye gitmek istiyorsunuz?</label>

        <select name="location" className="input" onChange={handleChange}>
          <option>Seçiniz</option>
          {locations?.map((i, key) => (
            <option value={i} key={key}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label className="font-semibold text-zinc-700 text-sm">Konaklama noktası adı?</label>

        <input type="text" className="input" placeholder="örn: Seaside Villa" name="title" onChange={handleChange} />
      </div>

      <div className="field">
        <label className="font-semibold text-zinc-700 text-sm">Sıralama ölçütü</label>

        <select name="order" className="input" onChange={handleChange}>
          <option>Seçiniz</option>

          {SORT_OPTIONS.map((i, key) => (
            <option key={key} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </div>

      <button className="btn-primary" type="reset" onClick={handleClear}>
        Filtreleri Temizle
      </button>
    </form>
  );
};

export default Filter;
