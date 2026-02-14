import { useParams } from "react-router-dom";
import useCoinDetail from "../../hooks/useCoinDetail";
import Loader from "../../components/loader";
import Error from "../../components/error";
import CoinHeader from "../../components/detail/coin-header";
import CoinPrice from "../../components/detail/coin-price";
import CoinChart from "../../components/detail/coin-chart";
import CoinStats from "../../components/detail/coin-stats";
import CoinDescription from "../../components/detail/coin-description";

const Detail = () => {
  const { id } = useParams();
  const {
    loading,
    error,
    coin,
    refreshing,
    refetch,
    refreshData,
    selectedPeriod,
    setSelectedPeriod,
    priceHistory,
    historyLoading,
  } = useCoinDetail(id);

  if (loading) return <Loader />;

  if (error) return <Error message={error} refetch={refetch} />;

  return (
    <div className="space-y-6">
      <CoinHeader coin={coin} refreshing={refreshing} refreshData={refreshData} />

      <CoinPrice coin={coin} />

      <CoinChart
        symbol={coin.symbol}
        priceHistory={priceHistory}
        historyLoading={historyLoading}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />

      <CoinStats coin={coin} />

      <CoinDescription description={coin.description.en} />
    </div>
  );
};

export default Detail;
