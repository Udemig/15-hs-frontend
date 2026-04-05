import { render, screen, waitFor } from "@testing-library/react";
import Statistics from "../pages/home/statistics";
import { mockStatisticsData } from "../utils/constants";

/*
 ! Mock
 * Yazdığımız testler kesinlikle api sitekleri gibi dış etkenlerden tamamen bağımsız olmalı, yani api'dan gelicek olan cevap testin sonucunu etkilememeli

 * Yani "api'dan yanıt geliyor mu" testi değil, "api'dan bu yanıt gelince arayüz güncelleniyor mu" testi yazarız

 * API isteğini atan fonksiyonu "mock'layıp" bu sayede api'ın döndüreceği cevabı test içerisinde biz belirleyeceğiz
*/

// 1) mocklamak istediğimiz değişkeni import ederiz
import { totalApi } from "../utils/api";

// 2) api isteğini atan get fonksiyonun yerine sahte bir test fonksiyonu koyalım
jest.mock("../utils/api", () => ({ totalApi: { get: jest.fn() } }));

test("bileşen render olduğunda api isteği atılır ve ekrana loader gelir", () => {
  // mock'ladığımız fonksiyon çağrıldığı zaman hangi değeri return ediceğini belirle
  totalApi.get.mockReturnValue(new Promise(() => {}));

  // bileşeni renderla
  render(<Statistics />);

  // api isteğini atan fonksiyon çalıştı mı?
  expect(totalApi.get).toHaveBeenCalledWith("/reports/total");

  // ekana loader bileşeni geldi mi
  screen.getByTestId("loader");
});

test("api'dan hata gelirse ekrana hata mesajı gelir", async () => {
  // mock'ladığımız fonksiyon çağrıldığı zaman hangi değeri return ediceğini belirle
  totalApi.get.mockRejectedValue(new Error("Üzgünüz bir hata oluştu"));

  // bileşeni renderla
  render(<Statistics />);

  // belirli bir sürenin ardından ekrana hata mesajı geliyor mu kontrol et
  // waitFor: fonksiyonda verilen olay gerçekleşene kadar bir süre bekler
  // ekranda hata mesajı var mı
  await waitFor(() => screen.getByText("Üzgünüz bir hata oluştu"));
});

test("api'dan veri gelirse ekrana istatiskler gelir", async () => {
  // mock'ladığımız fonksiyon çağrıldığı zaman hangi değeri return ediceğini belirle
  totalApi.get.mockResolvedValue({ data: mockStatisticsData });

  // bileşeni renderla
  render(<Statistics />);

  // api isteğinin atılmaısnı bekle
  await waitFor(() => expect(totalApi.get).toHaveBeenCalled());

  // ekrana veriler geldi mi
  screen.getByText("Toplam Vaka");
  screen.getByText("Toplam Vefat");
  screen.getByText("Aktif Vaka");
});
