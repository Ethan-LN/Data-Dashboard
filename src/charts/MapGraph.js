// import React, { useEffect, useRef } from 'react';
// import echarts from 'echarts/lib/echarts';
// import 'echarts/extension/bmap/bmap';
// import 'echarts/lib/chart/lines';
// import EChartsReact from 'echarts-for-react';
// import { loadScript } from 'react-script-tag';

// const MapGraph = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     loadScript('https://api.map.baidu.com/api?v=3.0&ak=YOUR_APP_KEY', () => {
//       const myChart = echarts.init(chartRef.current, 'dark');
      
//       $.get(ROOT_PATH + '/data/asset/data/lines-bus.json', function (data) {
//         let hStep = 300 / (data.length - 1);
//         let busLines = [].concat.apply(
//           [],
//           data.map(function (busLine, idx) {
//             let prevPt = [];
//             let points = [];
//             for (let i = 0; i < busLine.length; i += 2) {
//               let pt = [busLine[i], busLine[i + 1]];
//               if (i > 0) {
//                 pt = [prevPt[0] + pt[0], prevPt[1] + pt[1]];
//               }
//               prevPt = pt;
//               points.push([pt[0] / 1e4, pt[1] / 1e4]);
//             }
//             return {
//               coords: points,
//               lineStyle: {
//                 normal: {
//                   color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx))
//                 }
//               }
//             };
//           })
//         );
//         const option = {
//           bmap: {
//             // ... your bmap configuration
//           },
//           series: [
//             {
//               // ... your lines series configuration
//             },
//             {
//               // ... your lines series configuration
//             }
//           ]
//         };
//         myChart.setOption(option);
//       });
//     });
//   }, []);

//   return (
//     <div style={{ width: '100%', height: '500px' }}>
//       <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
//     </div>
//   );
// };

// export default MapGraph;