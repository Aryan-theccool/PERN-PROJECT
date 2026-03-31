import { Breadcrumb } from '@/components/refine-ui/layout/breadcrumb'
import { ListView } from '@/components/refine-ui/views/list-view'
import React from 'react'

const list = () => {
  return (
    <ListView>
      <Breadcrumb />
      <h1 className="page_title">Subjects</h1>
    </ListView>
  )
}

export default list
