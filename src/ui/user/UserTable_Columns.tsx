"use client";

import { ColumnDef } from "@tanstack/react-table";

import { tUser } from "@/lib/users/data_definition";

export const UserColumns: ColumnDef<tUser>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "password",
      header: "Passwort",
    },
  ]