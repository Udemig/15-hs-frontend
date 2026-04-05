import { render, screen } from "@testing-library/react";
import Content from "../pages/detail/content";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { mockDetailData } from "../utils/constants";

const createMockStore = configureStore([thunk]);

test("store yüklenme durumundayken ekrana loader gelir", () => {
  // test seneryosuna uygun sahte store oluştur
  const store = createMockStore({ isLoading: true, error: null, data: null });

  // bileşeni renderla
  render(
    <Provider store={store}>
      <Content />
    </Provider>,
  );

  // ekrana loader geldi mi
  screen.getByTestId("loader");
});

test("store hata durumundayken ekrana hata mesajı gelir", () => {
  // test seneryosuna uygun sahte store oluştur
  const store = createMockStore({ isLoading: false, error: "Ülke bulunamadı", data: null });

  // bileşeni renderla
  render(
    <Provider store={store}>
      <Content />
    </Provider>,
  );

  // hata mesajı ekrana geldi mi kontrol et
  screen.getByText("Ülke bulunamadı");
});

test("store'a veri geldiğinde her bir değer ekrana basılır", () => {
  // test seneyosuna uygun sahte store oluştur
  const store = createMockStore({ isLoading: false, error: null, data: mockDetailData });

  // bileşeni renderla
  render(
    <Provider store={store}>
      <Content />
    </Provider>,
  );

  // data nesnesini diziye çevir
  const arr = Object.entries(mockDetailData).filter(([key]) => key !== "flag");

  // dizideki her bir key ve value değeri ekrana basılıyor mu
  arr.forEach(([key, value]) => {
    // ekrana item'ın key değeri geliyor mu
    screen.getByText(key.replaceAll("_", " "));

    // ekrana item'ın value değeri geliyor mu
    screen.getByText(value.toLocaleString());
  });
});
