import React from 'react'
import "./PageLineChart.css";
import Navigation from '../../components/Navigation';
import { LineGraph } from '../../charts/LineGraph';

export const PageLineChart = () => {
  return (
    <div className='page__line'>
        <Navigation />
        <LineGraph /></div>
  )
}
