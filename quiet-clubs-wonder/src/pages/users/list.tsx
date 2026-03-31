import React from 'react'
import { useTable } from '@refinedev/react-table'
import { DataTable } from '@/components/refine-ui/data-table/data-table'
import { ColumnDef } from '@tanstack/react-table'

const UserList = () => {
  const table = useTable({
    columns: [
      {
        id: 'id',
        accessorKey: 'id',
        header: 'ID',
        cell: ({ getValue }) => getValue(),
      },
      {
        id: 'name',
        accessorKey: 'name',
        header: 'Name',
        cell: ({ getValue }) => getValue(),
      },
      {
        id: 'email',
        accessorKey: 'email',
        header: 'Email',
        cell: ({ getValue }) => getValue(),
      },
      {
        id: 'role',
        accessorKey: 'role',
        header: 'Role',
        cell: ({ getValue }) => getValue(),
      },
      {
        id: 'createdAt',
        accessorKey: 'createdAt',
        header: 'Created At',
        cell: ({ getValue }) => getValue(),
      },
    ] as ColumnDef<any>[],
  })

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <DataTable table={table} />
    </div>
  )
}

export default UserList
