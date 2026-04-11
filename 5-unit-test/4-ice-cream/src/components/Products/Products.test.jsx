import axios from "axios";
import Products from "./Products";
import { renderWithStore, screen } from "../../utils/test-utils";
import { mockProducts } from "../../utils/constants";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

describe("Products", () => {
  it('api dan cevap beklerken "Yükleniyor..." erkana basılır', () => {
    axios.get.mockReturnValue(new Promise(() => {}));

    renderWithStore(<Products />);

    screen.getByText("Yükleniyor...");
  });

  it("api dan hata gelirse hata mesajı ekrana basılır", async () => {
    axios.get.mockRejectedValue(new Error("Bağlantı Hatası"));

    renderWithStore(<Products />);

    await screen.findByText(/Bağlantı hatası/i);
  });

  it("api dan veriler gelirse ekrana kardlar basılır", async () => {
    axios.get.mockResolvedValue({ data: mockProducts });

    renderWithStore(<Products />);

    await screen.findByText(/Vanilya Rüyası/i);

    screen.getByText(/Ahududulu Dalgalar/i);
  });

  it("ürünler seçilen kategoriye göre filtrelenir", async () => {
    const user = userEvent.setup();

    // api'dan dönücek cevabı belirle
    axios.get.mockResolvedValue({ data: mockProducts });

    // bileşeni renderla
    renderWithStore(<Products />);

    // tümü seçeneği aktif haldedir
    expect(await screen.findByText(/Tümü/i)).toHaveClass("bg-primary");
    expect(screen.getByText(/klasik/i)).not.toHaveClass("bg-primary");

    // tüm kartlar ekrana basılmıştır
    screen.getByText(/Vanilya Rüyası/i);
    screen.getByText(/Çilek Bahçesi/i);
    screen.getByText(/Mango Tango/i);

    // klasik butonuna tıkla
    await user.click(screen.getByText(/klasik/i));

    // klasik butonu aktif haldedir
    expect(screen.getByText(/klasik/i)).toHaveClass("bg-primary");
    expect(screen.getByText(/Tümü/i)).not.toHaveClass("bg-primary");

    // klasik kategorisindeki kartlar ekrana basılmıştır
    screen.getByText(/Vanilya Rüyası/i);
    expect(screen.queryByText(/Çilek Bahçesi/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Mango Tango/i)).not.toBeInTheDocument();
  });
});
