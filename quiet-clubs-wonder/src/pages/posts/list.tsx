import React from 'react'
import { useTable } from '@refinedev/react-table'
import { DataTable } from '@/components/refine-ui/data-table/data-table'
import { ColumnDef } from '@tanstack/react-table'

const PostList = () => {
  const table = useTable({
    columns: [
      {
        id: 'id',
        accessorKey: 'id',
        header: 'ID',
        cell: ({ getValue }) => getValue(),
      },
      {
        id: 'title',
        accessorKey: 'title',
        header: 'Title',
        cell: ({ getValue }) => getValue(),
      },
      {
        id: 'content',
        accessorKey: 'content',
        header: 'Content',
        cell: ({ getValue }) => getValue(),
      },
      {
        id: 'author',
        accessorKey: 'author',
        header: 'Author',
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
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      <DataTable table={table} />
    </div>
  )
}

export default PostList
