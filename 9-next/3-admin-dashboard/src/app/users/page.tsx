import UserModal from "@/components/modal/user-modal";
import UserTable from "@/components/table/user-table";
import { FC } from "react";

interface Props {
  searchParams: Promise<{ userId?: string }>;
}

const UsersPage: FC<Props> = async ({ searchParams }) => {
  const { userId } = await searchParams;

  return (
    <div className="page">
      <div>
        <h1 className="title">Kullanıcılar</h1>
        <p className="text-zinc-500">Kayıtlı kullanıcıları yönetin</p>
      </div>

      <UserTable />

      <UserModal userId={userId} />
    </div>
  );
};

export default UsersPage;
