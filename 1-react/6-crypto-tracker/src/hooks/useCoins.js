import { useEffect, useMemo, useState, useCallback } from "react";
import api from "../utils/api";

/*
!  Custom Hook
* React'ta tekrar enden state'i veya kodu component'lardan alıp yeniden kullanılabilir hale getirdiğimiz fonkisyondur
* Hook'lar herzaman use ile başlar 
* Her zaman data / fonksiyon return eder
*/
const useCoins = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coins, setCoins] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");

  // api'dan verileri alan fonksiyon
  const fetchCoins = useCallback((isRefreshing = true) => {
    isRefreshing ? setRefreshing(true) : setLoading(true);

    api
      .get("/coins/markets?vs_currency=usd")
      .then((res) => {
        setCoins(res.data);
        setError(null);
        setLastUpdated(new Date());
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
  }, []);

  // hook çağrılınca api isteğini atar
  useEffect(() => {
    fetchCoins(false);
  }, []);

  // otomatik yenileme
  useEffect(() => {
    // her 30 saniyede bir api'dan güncel verileri al
    const id = setInterval(() => fetchCoins(true), 30000);

    // performan kaybını önlemek için interval'ı durdur
    return () => clearInterval(id);
  }, []);

  // aratılan terim veya coinler değişirse filtreleme yap
  const filtredCoins = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return coins.filter((coin) => coin.name.toLowerCase().includes(term) || coin.symbol.includes(term));
  }, [coins, searchTerm]);

  // hook'un döndürceği verileri belirle
  return { loading, error, coins, filtredCoins, lastUpdated, refreshing, searchTerm, setSearchTerm, fetchCoins };
};

export default useCoins;
