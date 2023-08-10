import React from 'react'
import "./PagePieChart.css"
import Navigation from '../../components/Navigation'
import { PieGraph } from '../../charts/PieGraph'
export const PagePieChart = () => {
  return (
    <div className='page__pie'>
        <Navigation />
        <PieGraph /></div>

  )
}
