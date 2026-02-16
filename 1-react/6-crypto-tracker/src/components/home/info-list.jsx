import { RefreshCw, TrendingUp } from "lucide-react";

const InfoList = ({ total, lastUpdated }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      <div className="card">
        <div>
          <p className="card-label">Toplam Coin</p>
          <p className="card-value text-2xl font-bold">{total}</p>
        </div>
        <TrendingUp className="size-8 text-blue-500" />
      </div>

      <div className="card">
        <div>
          <p className="card-label">Son Güncellenme</p>
          <p className="card-value text-lg font-bold">{lastUpdated}</p>
        </div>
        <RefreshCw className="size-8 text-blue-500" />
      </div>

      <div className="card">
        <div>
          <p className="card-label">Durum</p>
          <div className="card-value text-lg font-bold flex items-center gap-2">
            <div className="size-2 bg-green-500 rounded-full animate-pulse" />
            <span>Canlı</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoList;
