import React from 'react'
import "./CustomerContacts.css"
import Navigation from '../../components/Navigation'
import DataTable from '../../tables/DataTable'

export const CustomerContacts = () => {
  return (
    <div className='page__customer'> 
    <Navigation />
    <DataTable />
    </div>
  )
}
