import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

it("Sayaç doğru şekilde çalışır", () => {
  // 1) test edilecek bileşen render edilir
  render(<Counter />);

  // 2) gerekli elementleri al (button, p)
  const incBtn = screen.getByRole("button", { name: "Arttır" });
  const decBtn = screen.getByRole("button", { name: "Azalt" });
  const count = screen.getByText("0"); // 3) sayacın değeri 0 mı kontrol et

  // 4) azalt butonu inaktif mi kontrol et
  expect(decBtn).toBeDisabled();

  // 5) arttır butonuna tıkla
  fireEvent.click(incBtn);

  // 6) sayacın değeri 1 mi kontrol et
  expect(count).toHaveTextContent("1");

  // 7) azalt butonu aktif mi kontrol et
  expect(decBtn).toBeEnabled();

  // 8) arttır butonuna tıkla
  fireEvent.click(incBtn);

  // 9) sayacın değeri 2 mi kontrol et
  expect(count).toHaveTextContent("2");

  // 10) azalt butonuna tıkla
  fireEvent.click(decBtn);

  // 11) sayacın değeri 1 mi kontrol et
  expect(count).toHaveTextContent("1");

  // 12) azalt butonuna tıkla
  fireEvent.click(decBtn);

  // 13) sayacın değeri 0 mi kontrol et
  expect(count).toHaveTextContent("0");

  // 14) azalt butonu inaktif mi kontrol et
  expect(decBtn).toBeDisabled();
});
