import { delay } from "@/utils/delay";

const Page = async () => {
  await delay(1500);

  return <div className="box">Bildirimler</div>;
};

export default Page;
