import React from "react";
import type { JSX, FC } from "react";

interface IProps {
  text: string;
}

// 1) Component tipi tanımlama
// Prop Type: Tanımlandı
// Return Type: Oto Algılama
const Button1 = ({ text }: IProps) => {
  return <button>{text}</button>;
};

// 2) Component tipi tanımlama
// Prop Type: Tanımlandı
// Return Type: Tanımlandı
const Button2 = ({ text }: IProps): JSX.Element => {
  return <button>{text}</button>;
};

// 3) Component tipi tanımlama
// Prop Type: Tanımlandı
// Return Type: Tanımlandı
const Button3 = ({ text }: IProps): React.ReactNode => {
  return <button>{text}</button>;
};

// 4) Component tipi tanımlama
// Prop Type: FC
// Return Type: FC
const Button4: FC<IProps> = ({ text }) => {
  return <button>{text}</button>;
};

export { Button1, Button2, Button3, Button4 };
