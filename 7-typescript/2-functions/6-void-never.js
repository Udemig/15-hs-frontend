"use strict";
/*
 ! Void
 * Sadece fonksiyon return tiplerinde kullanılabilen bir tip.
 * Bir fonksiyon void return tipine sahipse, bu fonksiyonun bir değer return etmediği anlamına gelir
 * Eğer return tipi void ise, return sadece fonksiyonu durumak amacıyla kullanıabilir ama değer döndürmez.
*/
const func1 = () => {
    return "selam";
};
const func2 = () => {
    return 453;
};
const func3 = () => {
    console.log("selam");
    return; // fonksiyonu durdurma amaçlı kullanabiliyoruz
};
// örnek
const deleteProduct = (id) => {
    fetch("www.api.com/:id", { method: "DELETE" });
};
/*
 ! Never Type
 * Sadece fonksiyon return tiplerinde kullanıalabilir
 * Fonksiyon hata fırlatıyorsa return tipi olarak never kullanılır
 * Fonksiyon hiçbir zaman görevini tamamlayamacak durumunu ifade eder
*/
const log = (message) => {
    if (!message) {
        throw Error("Fonksiyona mesaj sağlanmadı");
    }
    else {
        console.log("Mesaj alındı");
    }
};
// Örnek
function setMode(mode) {
    if (mode === "açık")
        return "açık mod";
    if (mode === "koyu")
        return "koyu mod";
    return wrongMode(mode);
}
// x parametresine never tipi vermemezin sebebi bu fonksiyona gelen değer imkansız bir değer olmalı (tukarıdaki fonksiyonu çalıştırmayan değer)
// return tipine never vermemezin sebebi fonksiyonun hata fırlatıyor olması
function wrongMode(x) {
    throw new Error("Geçersiz mod: " + x);
}
console.log(setMode("açık"));
setMode("yeşil");
