import React from 'react';
import { Chart } from  'react-charts';


// function Chart() {
//     return <div>
//         Chart
//         <div className="chart_container">
//             <canvas id="myChart" width="600" height="450"></canvas>
//         </div>
//     </div>;
//   }
  
//   export default Chart;
  
/* priceUsd */


function MyChart(props) {
    const data = React.useMemo(
      () => [
        {
        data: props.list.map((item)=>{
          return [item.time, item.priceUsd]
          })
        }  
      ]
    )

    const series = React.useMemo(
      () => ({
        type: 'area',
      })
    )

    const axes = React.useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'right' }
      ]
    )
   
    return (
      // A react-chart hyper-responsively and continuously fills the available
      // space of its parent element automatically
      <div
        style={{
          width: '650px',
          height: '350px'
        }}
      >
        <Chart data={data} series={series} axes={axes}  />
      </div>
    )
  }

  export default MyChart;