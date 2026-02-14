import React from "react";

const CoinDescription = ({ description }) => {
  console.log("bileşen render oldu ");

  return (
    <div className="detail-box whitespace-pre-wrap text-gray-600 dark:text-gray-300">
      {description ? description : "Açıklama bulunamadı"}
    </div>
  );
};

export default React.memo(CoinDescription);
