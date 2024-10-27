import { fetchUsers } from "@/lib/users/data_functions";

import UserTable from "@/ui/user/UserTable";
import { UserColumns } from "@/ui/user/UserTable_Columns";

export default async function AdminUsers() {
  const data = await fetchUsers();
  return (
    <>
    <h1>Benutzerverwaltung</h1>
    <UserTable columns={UserColumns} data={data}  />
    </>
  );
}
