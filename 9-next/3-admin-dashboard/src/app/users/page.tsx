import UserTable from "@/components/table/user-table";
import { FC } from "react";

const UsersPage: FC = () => {
  return (
    <div className="page">
      <div>
        <h1 className="title">Kullanıcılar</h1>
        <p className="text-zinc-500">Kayıtlı kullanıcıları yönetin</p>
      </div>

      <UserTable />
    </div>
  );
};

export default UsersPage;
