import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import userEvent from "@testing-library/user-event";

const props = {
  id: "1",
  name: "Vanilya Rüyası",
  description: "Madagaskar vanilya çekirdeği ile hazırlanmış kremalı ve yumuşak doku",
  price: 149.9,
  image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
};

describe("ProductCard", () => {
  // her testten sonra mock fonksiyonları tamamen temizle
  afterEach(() => jest.clearAllMocks());

  // describe içerisindeki testlerin her birinin öncesinde fonksiyon çalıştırmaya yarar
  //   beforeEach(() => console.log("beforeEach çalıştı"));
  // describe içerisindeki testlerin her birinin sonrasında fonksiyon çalıştırmaya yarar
  //   afterEach(() => console.log("afterEach çalıştı"));
  // describe içerisindeki testlerin tamamının öncesinde fonksiyon çalıştırmaya yarar
  //   beforeAll(() => console.log("beforeAll çalıştı"));
  // describe içerisindeki testlerin tamamının sonrasında fonksiyon çalıştırmaya yarar
  //   afterAll(() => console.log("afterAll çalıştı"));

  test("Bileşene gönderilen proplar doğru şekilde renderlanır", () => {
    render(<ProductCard {...props} />);

    screen.getByText(props.name);

    screen.getByText(props.description);

    screen.getByText(`${props.price} TL`);

    const image = screen.getByAltText(new RegExp(props.name));

    expect(image).toHaveAttribute("src", props.image);
  });

  test('"Külah" ve "Bardak" seçenekleri değiştirilebilir', async () => {
    const user = userEvent.setup();
    render(<ProductCard {...props} />);

    expect(screen.getByText("Külah")).toHaveClass("bg-tertiary-container");
    expect(screen.getByText("Kap")).not.toHaveClass("bg-tertiary-container");

    await user.click(screen.getByText("Kap"));

    expect(screen.getByText("Kap")).toHaveClass("bg-tertiary-container");
    expect(screen.getByText("Külah")).not.toHaveClass("bg-tertiary-container");

    await user.click(screen.getByText("Külah"));

    expect(screen.getByText("Külah")).toHaveClass("bg-tertiary-container");
    expect(screen.getByText("Kap")).not.toHaveClass("bg-tertiary-container");
  });

  test('"Sepete Ekle" butonuna tıklanınca onAddToCart fonksiyonu doğru parametrelerle çalışır', async () => {
    const user = userEvent.setup();
    const mockFn = jest.fn();

    render(<ProductCard {...props} onAddToCart={mockFn} />);

    const basketBtn = screen.getByText("Sepete Ekle");

    await user.click(basketBtn);

    expect(mockFn).toHaveBeenCalledWith({
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
      type: "Külah",
    });
  });
});
