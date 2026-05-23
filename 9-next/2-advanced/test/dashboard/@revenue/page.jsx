import { delay } from "@/utils/delay";

const Page = async () => {
  await delay(2000);

  return <div className="box">Gelir Gider Tablosu</div>;
};

export default Page;
