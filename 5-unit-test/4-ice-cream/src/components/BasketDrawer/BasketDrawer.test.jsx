import userEvent from "@testing-library/user-event";
import { renderWithStore, screen } from "../../utils/test-utils";
import BasketDrawer from "./BasketDrawer";
import { mockBasketItems, mockProducts } from "../../utils/constants";

describe("BasketDrawer", () => {
  it("isOpen propuna göre drawer görünür/gizlenir", () => {
    // bileşeni ekrana bas
    const { rerender } = renderWithStore(<BasketDrawer isOpen={false} />);

    // modal kapalıdır
    expect(screen.queryByLabelText("backdrop")).not.toBeInTheDocument();

    // bileşeni yeniden renderla (isOpen:true)
    rerender(<BasketDrawer isOpen={true} />);

    // modal açıktır
    screen.getByLabelText("backdrop");
  });

  it("arkaplana veya x'e tıklanınca onClose fonksiyonu tetiklenir", async () => {
    const user = userEvent.setup();

    const mockOnClose = jest.fn();

    renderWithStore(<BasketDrawer isOpen={true} onClose={mockOnClose} />);

    await user.click(screen.getByLabelText("backdrop"));

    expect(mockOnClose).toHaveBeenCalledTimes(1);

    await user.click(screen.getByLabelText("Kapat"));

    expect(mockOnClose).toHaveBeenCalledTimes(2);
  });

  it('sepette hiç ürün yoksa "Sepetiniz boş" ekrana basılır', () => {
    renderWithStore(<BasketDrawer isOpen={true} onClose={() => {}} />, { preloadedState: { basket: { items: [] } } });

    screen.getByText("Sepetiniz boş");

    expect(screen.queryByText("Sepeti Onayla")).not.toBeInTheDocument();
  });

  it("store'daki ürünler ekrana basılır", () => {
    renderWithStore(<BasketDrawer isOpen={true} onClose={() => {}} />, {
      preloadedState: { basket: { items: mockBasketItems } },
    });

    screen.getByText(mockBasketItems[0].name);
    screen.getByText(mockBasketItems[0].type);
    screen.getByText(mockBasketItems[0].quantity);
    screen.getByText(`${mockBasketItems[0].price} TL`);
    expect(screen.getByAltText(mockProducts[0].name)).toHaveAttribute("src", mockBasketItems[0].image);

    screen.getByText(mockBasketItems[1].name);
    screen.getByText(mockBasketItems[1].type);
    screen.getByText(mockBasketItems[1].quantity);
    screen.getByText(`${mockBasketItems[1].price} TL`);
    expect(screen.getByAltText(mockProducts[1].name)).toHaveAttribute("src", mockBasketItems[1].image);
  });

  it("+ / - tıklanınca ürünün miktarı değişir", async () => {
    // userEvent kurulum
    const user = userEvent.setup();

    // bileşeni renderla
    const { store } = renderWithStore(<BasketDrawer isOpen={true} onClose={() => {}} />, {
      preloadedState: { basket: { items: mockBasketItems } },
    });

    // ilk ürünün miktarı 2 dir
    expect(store.getState().basket.items[0].quantity).toBe(2);

    // ilk ürünün + butonuna tıkla
    await user.click(screen.getAllByLabelText("Arttır")[0]);

    // ilk ürünün miktarı 3 dür
    expect(store.getState().basket.items[0].quantity).toBe(3);

    // ilk ürünün + butonuna tıkla
    await user.click(screen.getAllByLabelText("Azalt")[0]);

    // ilk ürünün miktarı 2 dir
    expect(store.getState().basket.items[0].quantity).toBe(2);
  });

  it("sil butonuna tıklanınca ürün sepetten kaldırılır", async () => {
    // userEvent kurulum
    const user = userEvent.setup();

    // bileşeni renderla
    const { store } = renderWithStore(<BasketDrawer isOpen={true} onClose={() => {}} />, {
      preloadedState: { basket: { items: mockBasketItems } },
    });

    // ilk ürünün sil butonuna tıkla
    await user.click(screen.getAllByLabelText("Sil")[0]);

    // ilk ürün sepette yoktur
    expect(store.getState().basket.items.find((i) => i.id === "1")).toBeUndefined();
  });

  it("toplam ürün miktarı ve toplam fiyat değeri ekrana basılır", async () => {
    // userEvent kurulum
    const user = userEvent.setup();

    // mock fonksiyon
    const mockOnClose = jest.fn();

    // bileşeni renderla
    renderWithStore(<BasketDrawer isOpen={true} onClose={mockOnClose} />, {
      preloadedState: { basket: { items: mockBasketItems } },
    });

    // toplam eleman miktarı ekrana basılır
    screen.getByText(/3 ürün/i);

    // toplam fiyat değeri  ekrana basılır
    screen.getByText(/464.70 TL/i);

    // sepeti onayla butonuna tıkla
    await user.click(screen.getByText(/sepeti onayla/i));

    // sepetiniz boş ekrana gelir
    screen.getByText(/sepetiniz boş/i);

    // onClose fonksiyonu çalışır
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
