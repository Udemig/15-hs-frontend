import { useState } from "react";

const useCoinDetail = (coinId) => {
  // coin detay state'leri
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // coin detaylarını çeken fonksiyon

  // sayfa yüklenme anında verileri al

  // hook'un return ettiği verileri belirle
  return { coin, loading, refreshing, error };
};

export default useCoinDetail;
