import type { FC } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { INITIAL_VALUES, INPUT_FIELDS } from "../../utils/constants";
import type { PlaceFormValues } from "../../types";
import { PLACE_SCHEMA } from "../../utils/schema";
import { useCreatePlace } from "../../services/hooks";

const FormPage: FC = () => {
  const { isPending, mutate } = useCreatePlace();

  // form gönderilince çalışan fonksiyon
  // preventDefault() otomatik olarak çalışır
  // values, input değerlerini otomatik olarak nesne formatına çevirir
  const handleSubmit = (values: PlaceFormValues) => {
    mutate(values);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-8 md:p-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 to-blue-500 bg-clip mb-3">
            Yeni Konaklama Noktası Oluştur
          </h1>

          <p className="text-zinc-600">Aşağıdaki formu doldurarak yeni bir konaklama noktası ekleyebilirsiniz</p>
        </div>

        <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={PLACE_SCHEMA}>
          <Form className="grid gap-8">
            {INPUT_FIELDS.map((item, key) => (
              <div className="field relative">
                <label className="font-semibold text-zinc-700 text-sm" key={key} htmlFor={item.name}>
                  {item.label}
                </label>

                <Field {...item} className="input" />

                <ErrorMessage
                  name={item.name}
                  component="div"
                  className="text-red-500 text-sm absolute -bottom-6 font-medium"
                />
              </div>
            ))}

            <button disabled={isPending} className="btn-primary mt-4 text-lg">
              {isPending ? "Gönderiliyor..." : "Gönder"}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormPage;
