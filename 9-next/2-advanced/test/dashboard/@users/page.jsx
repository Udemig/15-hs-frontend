import { delay } from "@/utils/delay";

const Page = async () => {
  await delay(2500);

  return <div className="box">Kullanıcı Listesi</div>;
};

export default Page;
