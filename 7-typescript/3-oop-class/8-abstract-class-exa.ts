// Soyut Sınıf
abstract class MuzikCalar {
  constructor(public apiUrl: string) {}

  muzikleriGetir(): void {
    console.log(this.apiUrl + " adresinden müzikler alınıyor.....");
  }

  abstract muzikCal(isim: string): void;
}

// Soyut sınıfı miras alan sınıf
class Spotify extends MuzikCalar {
  muzikCal(isim: string): void {
    console.log(`${isim} Spotify'da çalıyor..`);
  }
}

// Soyut sınıfı miras alan farklı sınıf
class AppleMusic extends MuzikCalar {
  muzikCal(isim: string): void {
    console.log(`${isim} Apple Music'te çalıyor...`);
  }
}

const spotify = new Spotify("https://api.spotify.com");
const appleMusic = new AppleMusic("https://api.apple.com");

spotify.muzikleriGetir();
appleMusic.muzikleriGetir();

spotify.muzikCal("Despacito");
appleMusic.muzikCal("Yüz yüze");
