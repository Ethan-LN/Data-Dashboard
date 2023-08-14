import React from 'react'
import ReactEcharts from "echarts-for-react";

export const RadarGraph = () => {
    const option = {
            // title: {
            //   text: 'Proportion of Browsers',
            // //   subtext: 'Fake Data',
            //   top: 10,
            //   left: 10
            // },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              type: 'scroll',
              bottom: 10,
              data: (function () {
                var list = [];
                for (var i = 1; i <= 28; i++) {
                  list.push(i + 2000 + '');
                }
                return list;
              })()
            },
            visualMap: {
              top: 'middle',
              right: 10,
              color: ['#0066cc', '#009999'],
              calculable: true
            },
            radar: {
              indicator: [
                { text: 'Retail', max: 400 },
                { text: 'Stock', max: 400 },
                { text: 'Royalty', max: 400 },
                { text: 'Share', max: 400 },
                { text: 'Member', max: 400 }
              ]
            },
            series: (function () {
              var series = [];
              for (var i = 1; i <= 28; i++) {
                series.push({
                  type: 'radar',
                  symbol: 'none',
                  lineStyle: {
                    width: 1
                  },
                  emphasis: {
                    areaStyle: {
                      color: 'rgba(0,250,0,0.3)'
                    }
                  },
                  data: [
                    {
                      value: [
                        (40 - i) * 10,
                        (38 - i) * 4 + 60,
                        i * 5 + 10,
                        i * 9,
                        (i * i) / 2
                      ],
                      name: i + 2000 + ''
                    }
                  ]
                });
              }
              return series;
            })()
          };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactEcharts option={option} />
    </div>
  )
}
