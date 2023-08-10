import React from 'react'
import "./PageAreaChart.css"
import Navigation from '../../components/Navigation'
import { AreaGraph } from '../../charts/AreaGraph'

export const PageAreaChart = () => {
  return (
    <div className='page__area'>
        <Navigation />
        <AreaGraph /> </div>

  )
}
