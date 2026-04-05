import { render, screen } from "@testing-library/react";
import Header from "../pages/detail/header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { mockDetailData } from "../utils/constants";

// sahte store oluşturmaya yarayan fonksiyonu kur
const createMockStore = configureStore([thunk]);

test("store yüklenme durumundayken ekrana loader gelir", () => {
  // bu teste özel loading durumunda sahte bir store oluştur
  const store = createMockStore({ isLoading: true, error: null, data: null });

  // bileşen içerisinde react-router-dom ve rewact-redux özellikleri kullanıldığından render adımının hata vermesinin önüne geçebilmek için bileşeni providerlarla sarmaladık
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  // ekranda loader var mı
  screen.getByTestId("loader");
});

test("store'a veri geldiğinde ekrana ülke ismi ve bayrağı gelir", () => {
  // bu teste özel detay verilerine sahip sahte store oluştur
  const store = createMockStore({ isLoading: false, error: null, data: mockDetailData });

  // bileşeni renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  // loader'ın ekranda olmadığını kontrol et
  const loader = screen.queryByTestId("loader");
  expect(loader).toBeNull();

  // ülke ismi ekranda mı
  screen.getByRole("heading", { name: mockDetailData.country });

  // ülke bayrağı ekranda mı
  const img = screen.getByAltText(mockDetailData.flag.alt);

  // ülke bayrağının kaynağı (src) doğru mu
  expect(img).toHaveAttribute("src", mockDetailData.flag.png);
});
