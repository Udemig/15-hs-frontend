import * as yup from "yup";

// Sayıları ve Özel karakterleri kabul etmez
const nameRegex = /^[\p{L}\p{M}]+\.?(?:[ '\u2019.-][\p{L}\p{M}]+\.?)*$/u;

// En az 1 büyük, 1 küçük harf, 1 sayı, 1 özel karakter içerdiğini kontrol eder
const lowercaseRegex = /[a-z]/;
const uppercaseRegex = /[A-Z]/;
const numberRegex = /\d/;
const specialCharRegex = /[^A-Za-z0-9]/;

// 38-47 aralığında birbirinden , ler ile ayrılan metini kontrol eder
const sizeRegex = /^(?:3[8-9]|4[0-7])(?:,(?:3[8-9]|4[0-7]))*$/;

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

export const PRODUCT_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("isim alanı zorunludur")
    .min(2, "isim en az 2 karakter olmalıdır")
    .max(80, "isim en fazla 80 karakter olabilir"),

  price: yup //
    .number()
    .required("fiyat alanı zorunludur")
    .moreThan(0, "fiyat 0'dan büyük olmalıdır"),

  discount: yup //
    .number()
    .min(0, "indirim 0'dan küçük olamaz")
    .max(100, "indirim 100'den büyük olamaz")
    .default(0),

  color: yup //
    .string()
    .trim()
    .required("renk alanı zorunludur")
    .min(2, "renk en az 2 karakter olmalıdır"),

  size: yup //
    .string()
    .trim()
    .required("beden alanı zorunludur")
    .matches(sizeRegex, "sadece 38-47 aralığından değerle geçerlidir"),

  description: yup
    .string()
    .trim()
    .required("açıklama alanı zorunludur")
    .min(10, "açıklama en az 10 karakter olmalıdır")
    .max(500, "açıklama en fazla 500 karakter olabilir"),

  isNew: yup.boolean().notRequired().default(false),

  gender: yup
    .string()
    .required("cinsiyet alanı zorunludur")
    .oneOf(["men", "women", "unisex"], "geçersiz cinsiyet seçimi"),
});
