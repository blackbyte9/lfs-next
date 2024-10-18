"use client";

import BootstrapTable from 'react-bootstrap-table-next';

const products = [
    { id: 1, name: "blackbyte", password: "$2b$10$l3S3tE6cWI9VitMw2bTsoOBy8hC48ROjTCKvhg9ZIlkHi28cXp4fq"},
    { id: 2, name: "birgit", password: "$2b$10$sftk9VaKUglhGm3R85Q05OiP57BTo1zSufoSJp6nYoewrj3Y/y666" },];
    


export default function UserTable() {
    const columns = [
        {
          dataField: "id",
          text: "Benutzer ID",
          sort: true
        },
        {
          dataField: "name",
          text: "Benutzername",
          sort: true
        },
      ];
    return (
        <div className="App">
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={products}
          columns={columns}
        />
      </div>
    )
}