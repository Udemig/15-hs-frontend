import { Search } from "lucide-react";
import type { FC } from "react";
import ReactSelect from "react-select";
import { selectStyles } from "../../utils/constants";
import { useAppSelector } from "../../redux";

interface Props {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filter: FC<Props> = ({ setTitle, setTags }) => {
  const { notes } = useAppSelector((store) => store.noteReducer);

  const uniqueTags = [...new Set(notes.map((i) => i.tags).flat())];

  return (
    <div className="mb-8 p-5 card">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Title Input */}
        <div className="flex-1 w-full md:w-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
              <Search className="size-5" />
            </div>

            <input
              type="text"
              className="pl-10 pr-4 py-2.5 w-full border border-border rounded-md text-text-primary bg-card placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="Notları ara..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        {/* Etiket Input */}
        <div className="w-full md:w-1/2">
          <ReactSelect
            isMulti
            styles={selectStyles}
            className="z-99999"
            placeholder="Etiket seçiniz"
            options={uniqueTags.map((i) => ({ label: i, value: i }))}
            onChange={(tags) => setTags(tags.map((i) => i.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
