/*
 ! Test Nasıl Yazılır?
 * test yazarken *test* veya *it* methodlarını kullanırız.
 * test fonksiyonu 2 parametre ister
 * 1) string: testin adı
 * 2) function: testin yapıldığı yer
*/

import { render, screen } from "@testing-library/react";
import App from "../App";

test("ekranda merhaba dünya yazar", () => {
  // test edilecek bileşen render edilir (sanal ortam - virtual)
  render(<App />);

  // renderlanan bileşen içerisinde test edilecek elementi çağıralım
  // eğer bileşen tarayıcıda render olsaydı document.querySelector() kullanırdık ama sanal ortamda olduğu için document yerine screen ve query selector yerine farklı methodlar kullanırız
  const h1 = screen.getByText("Merhaba Dünya");

  // çağrılan elementten beklentimizi söyleriz
  // beklentimiz: elementin ekrana basılmış olması
  expect(h1).toBeInTheDocument();
});
