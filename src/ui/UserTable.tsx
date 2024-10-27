
import Table from 'react-bootstrap/Table';

//import { tUser } from '@/lib/users/data_definition';
import { fetchUsers } from '@/lib/users/data_functions';

export default async function UserTable() {
  const users = await fetchUsers();
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Passwort</th>
        </tr>
      </thead>
      <tbody>
        {users.map(row => (
          <tr key={row.id}>
            <td>
              {row.id}
            </td>
            <td>
              {row.name}
            </td>
            <td>
              {row.password}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}