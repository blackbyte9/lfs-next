"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useReducer, useState } from 'react';
import Table from 'react-bootstrap/Table';

type User = {
  id: number
  name: string
  password: string
};

const defaultData: User = [
    { id: 1, name: "blackbyte", password: "$2b$10$l3S3tE6cWI9VitMw2bTsoOBy8hC48ROjTCKvhg9ZIlkHi28cXp4fq"},
    { id: 2, name: "birgit", password: "$2b$10$sftk9VaKUglhGm3R85Q05OiP57BTo1zSufoSJp6nYoewrj3Y/y666" },
];

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor('id', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.name, {
    id: 'name',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('password', {
    header: () => 'Password',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
];

export default function UserTable() {
    
    const [data, _setData] = useState(() => [...defaultData]);
    const rerender = useReducer(() => ({}), {})[1];

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    return (
      <Table striped bordered hover>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </Table>
    )
}