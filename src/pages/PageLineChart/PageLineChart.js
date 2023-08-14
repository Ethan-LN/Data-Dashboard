import React from 'react'
import "./PageLineChart.css";
import Navigation from '../../components/Navigation';
import { LineGraph } from '../../charts/LineGraph';
// import { useState } from 'react';

export const PageLineChart = () => {
  // const [width,setWidth] = useState(1000)
  // const [height,setHeight] = useState(800)
  return (
    <div className='page__line'>
        <Navigation />
        <LineGraph/></div>
  )
}
