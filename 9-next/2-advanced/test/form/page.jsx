// Server Action
// Bir fonksiyonu server action olması için async yaparız ve "use server" tanımı kullanırız
// Server action'lar formData'yı parametre olarak alır
// Server action'lar içerisinde istersek doğrudan backend kodları yazılabilir
const handleSubmitAction = async (formData) => {
  "use server";

  // formdaki verilere eriş
  const email = formData.get("email");
  const password = formData.get("password");

  // api isteği atılır...
  console.log(email, password);
};

const FormPage = () => {
  return (
    <form action={handleSubmitAction} className="flex flex-col gap-5">
      <label>Email</label>
      <input name="email" type="email" className="border rounded p-1" />

      <label>Şifre</label>
      <input name="password" type="password" className="border rounded p-1" />

      <button type="submit" className="cursor-pointer">
        Gönder
      </button>
    </form>
  );
};

export default FormPage;
