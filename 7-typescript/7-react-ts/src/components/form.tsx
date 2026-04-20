import type { ChangeEvent, MouseEvent, SubmitEvent } from "react";

export interface FormType {
  id: string;
}

const Form = () => {
  // form gönderilince:
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // input değişince
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  // butona tıklandığında
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Gönder</button>
    </form>
  );
};

export default Form;
