import React, { useState } from 'react'
import "./ManageStaff.css"
import Navigation from '../../components/Navigation'
import { TableDisplay } from '../../components/TableDisplay'

export const ManageStaff = () => {
  const [group, setGroup] = useState()
  return (
    <div className='page__staff'>
      <Navigation />
      {/* <TableDisplay name={group} /> */}
      ManageStaff</div>
  )
}
