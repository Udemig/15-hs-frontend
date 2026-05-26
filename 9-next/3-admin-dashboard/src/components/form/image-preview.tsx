import { FC } from "react";
import Field from "./field";

const ImagePreview: FC = () => {
  return (
    <Field label="Resim Önizleme" htmlFor="">
      <div className="relative h-48 w-full bg-zinc-50 rounded-lg overflow-hidden border border-dashed border-zinc-300"></div>
    </Field>
  );
};

export default ImagePreview;
