import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "../components/Accordion";

test("accordion bileşeni düzgün çalışır", () => {
  // 1) test edilecek bileşeni renderla
  render(<Accordion />);

  // 2) gerekli elementleri al (button,p)
  const button = screen.getByRole("button");
  const paragraph = screen.getByRole("contentinfo");

  // 3) butonda 'göster' yazıyor mu kontrol et
  expect(button).toHaveTextContent("Göster");

  // 4) paragraf elementinde 'hide' class'ı var mı kontrol et
  expect(paragraph).toHaveClass("hide");

  // 5) butona tıkla
  fireEvent.click(button);

  // 6) butonda 'gizle' yazıyor mu kontrol et
  expect(button).toHaveTextContent("Gizle");

  // 7) paragraf elementinde 'show' class'ı var mı kontrol et
  expect(paragraph).toHaveClass("show");

  // 8) butona tıkla
  fireEvent.click(button);

  // 9) butonda 'göster' yazıyor mu kontrol et
  expect(button).toHaveTextContent("Göster");

  // 10) paragraf elementinde 'hide' class'ı var mı kontrol et
  expect(paragraph).toHaveClass("hide");
});
