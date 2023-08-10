import React from 'react'
import "./PageBarChart.css"
import Navigation from '../../components/Navigation'
import { BarGraph } from '../../charts/BarGraph'
export const PageBarChart = () => {
  return (
    <div className='page__bar'>
        <Navigation />
        <BarGraph /></div>
  )
}
