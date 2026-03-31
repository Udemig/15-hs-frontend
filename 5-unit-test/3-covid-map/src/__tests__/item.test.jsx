import { render, screen } from "@testing-library/react";
import Item from "../pages/home/item";

// Normal şartlarda bir bileşeni kullanmak için göndermemiz gereken zorunlu proplar varsa test anında da bu proplar gönderilmeli
test("Gönderilen proplar doğru şekilde kullanılır", () => {
  // test edilecek bileşeni renderla
  render(<Item color="text-red-500" label="Toplam Test" value="234M" />);

  // gerekli elementleri çağır
  const icon = screen.getByRole("icon");
  const h2 = screen.getByRole("heading");
  const label = screen.getByText("Toplam Test");

  // color propuyla gönderdiğimiz değer icon'un class'ında var mı kontrol et
  expect(icon).toHaveClass("text-red-500");

  // value propu ile gönderdiğimiz değer h2 içerisinde yazıyor mu kontrol et
  expect(h2).toHaveTextContent("234M");
});
