import OrdersTable from "@/components/table/order-table";
import { FC, Suspense } from "react";
import Loading from "../loading";

const OrdersPage: FC = () => {
  return (
    <div className="page">
      <div>
        <h1 className="title">Siparişler</h1>
        <p className="text-zinc-500 mt-1">Tüm siparişleri görüntüleyin ve durumları takip edin</p>
      </div>

      <Suspense fallback={<Loading />}>
        <OrdersTable />
      </Suspense>
    </div>
  );
};

export default OrdersPage;
