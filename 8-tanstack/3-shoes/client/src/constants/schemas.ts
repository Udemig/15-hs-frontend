import * as yup from "yup";

// Sayıları ve Özel karakterleri kabul etmez
const nameRegex = /^[\p{L}\p{M}]+\.?(?:[ '\u2019.-][\p{L}\p{M}]+\.?)*$/u;

// En az 1 büyük, 1 küçük harf, 1 sayı, 1 özel karakter içerdiğini kontrol eder
const lowercaseRegex = /[a-z]/;
const uppercaseRegex = /[A-Z]/;
const numberRegex = /\d/;
const specialCharRegex = /[^A-Za-z0-9]/;

export const LOGIN_SCHEMA = yup.object().shape({
  email: yup.string().email("geçerli bir e-posta adresi giriniz").required("e-posta alanı zorunludur"),
  password: yup.string().required("şifre alanı zorunludur"),
});

export const REGISTER_SCHEMA = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "isim 2 karakterden kısa olamaz")
    .trim()
    .matches(nameRegex, "geçersiz karakter mevcut")
    .required("isim alanı zorunludur"),

  lastName: yup
    .string()
    .min(2, "soyad 2 karakterden kısa olamaz")
    .matches(nameRegex, "geçersiz karakter mevcut")
    .required("soyad alanı zorunludur"),

  email: yup.string().email("geçerli bir e-posta adresi giriniz").required("e-posta alanı zorunludur"),

  password: yup
    .string()
    .min(6, "şifre 6 karakterden kısa olamaz")
    .matches(lowercaseRegex, "Şifre en az 1 küçük harf içermelidir")
    .matches(uppercaseRegex, "Şifre en az 1 büyük harf içermelidir")
    .matches(numberRegex, "Şifre en az 1 sayı içermelidir")
    .matches(specialCharRegex, "Şifre en az 1 özel karakter içermelidir")
    .required("şifre alanı zorunludur"),

  // oneOf([]) dizi içerisinde verilen değerler girilmedikçe hata fırlatır
  // ref() formdaki bir inputun değerine erişmeye yarar
  passwordConfirm: yup.string().oneOf([yup.ref("password")], "şifre tekrarını yanlış girdiniz"),

  terms: yup.boolean().oneOf([true], "sözleşmeyi onaylamadan devam edemezsiniz"),
});
