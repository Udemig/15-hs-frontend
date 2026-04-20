"use strict";
// Soyut Sınıf
class MuzikCalar {
    apiUrl;
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    muzikleriGetir() {
        console.log(this.apiUrl + " adresinden müzikler alınıyor.....");
    }
}
// Soyut sınıfı miras alan sınıf
class Spotify extends MuzikCalar {
    muzikCal(isim) {
        console.log(`${isim} Spotify'da çalıyor..`);
    }
}
// Soyut sınıfı miras alan farklı sınıf
class AppleMusic extends MuzikCalar {
    muzikCal(isim) {
        console.log(`${isim} Apple Music'te çalıyor...`);
    }
}
const spotify = new Spotify("https://api.spotify.com");
const appleMusic = new AppleMusic("https://api.apple.com");
spotify.muzikleriGetir();
appleMusic.muzikleriGetir();
spotify.muzikCal("Despacito");
appleMusic.muzikCal("Yüz yüze");
