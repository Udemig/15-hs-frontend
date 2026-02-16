import { useEffect, useState } from "react";
import api from "../utils/api";

const useCoinDetail = (coinId) => {
  // coin detay state'leri
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // grafik state'leri
  const [selectedPeriod, setSelectedPeriod] = useState(7);
  const [priceHistory, setPriceHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(true);

  // coin detaylarını çeken fonksiyon
  const getCoinDetails = (isRefreshing = false) => {
    if (isRefreshing) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    api
      .get(`/coins/${coinId}`)
      .then((res) => {
        setCoin(res.data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
  };

  // fiyat geçmişini çek
  const fetchPriceHistory = async () => {
    setHistoryLoading(true);

    const params = { vs_currency: "usd", days: String(selectedPeriod) };
    api
      .get(`/coins/${coinId}/market_chart`, { params })
      .then((res) => {
        setPriceHistory(res.data.prices);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setHistoryLoading(false));
  };

  // ekrandaki verileri yenilemek için kullanılacak fonksiyon
  const refreshData = () => {
    getCoinDetails(true);
    fetchPriceHistory();
  };

  // sayfa yüklenme anında verileri al
  useEffect(() => {
    getCoinDetails();
    fetchPriceHistory();
  }, [coinId]);

  // gün değeri değişince yeni fiyat geçimişini al
  useEffect(() => {
    if (coin) {
      refreshData();
    }
  }, [selectedPeriod]);

  // hook'un return ettiği verileri belirle
  return {
    coin,
    loading,
    refreshing,
    error,
    refetch: () => getCoinDetails(false),
    refreshData,
    selectedPeriod,
    setSelectedPeriod,
    priceHistory,
    historyLoading,
  };
};

export default useCoinDetail;
