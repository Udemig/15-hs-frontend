import { render, screen } from "@testing-library/react";
import TopNavBar from "./TopNavBar";
import userEvent from "@testing-library/user-event";

test("cartItemCount propu 0 ise ekrana badge basılmaz", () => {
  render(<TopNavBar cartItemCount={0} />);

  const cartButton = screen.getByLabelText("Sepet");

  expect(cartButton.querySelector(".rounded-full")).not.toBeInTheDocument();
});

test("cartItemCount propu 0 dan büyük ise ekrana badge basılır", () => {
  render(<TopNavBar cartItemCount={2} />);

  expect(screen.getByText("2")).toBeInTheDocument();
});

test("sepet butonuna tıklanınc onCartClick fonksiyonu çalışır", async () => {
  // userEvent kurulum
  const user = userEvent.setup();

  // mock fonksiyon oluştur
  const mockFn = jest.fn();

  // bileşeni renderla (prop olarak mock fn gönderildi)
  render(<TopNavBar onCartClick={mockFn} />);

  // sepet butonuna tıkla
  await user.click(screen.getByLabelText("Sepet"));

  // prop olarak göndeirlen mock fonksiyon çalıştı mı
  expect(mockFn).toHaveBeenCalledTimes(1);
});

test("mobile menu açılır ve kapanır", async () => {
  const user = userEvent.setup();

  render(<TopNavBar />);

  const menuButton = screen.getByLabelText("Menü");

  expect(screen.getAllByText("Mağaza")).toHaveLength(1);

  await user.click(menuButton);
  expect(screen.getAllByText("Mağaza")).toHaveLength(2);

  await user.click(menuButton);
  expect(screen.getAllByText("Mağaza")).toHaveLength(1);
});
