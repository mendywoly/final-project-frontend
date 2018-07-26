import React, { Component } from 'react';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)


class ProductChart extends Component {
  render() {
    const {units_shipped_last_24_hrs, units_shipped_last_7_days, units_shipped_last_30_days, units_shipped_last_90_days, units_shipped_last_180_days, units_shipped_last_365_days} = this.props.details
    const three_six_five = 'sdf'
    return (
      <div>
        <LineChart data={{
          "three_six_five": units_shipped_last_365_days / 365, 
          "one_eighty": units_shipped_last_180_days / 180,
          "ninety": units_shipped_last_90_days / 90,
          "thirty": units_shipped_last_30_days / 30,
          "seven": units_shipped_last_7_days / 7,
          "twenty_four": units_shipped_last_24_hrs,
          }}/>
      </div>
    );
  }
}

export default ProductChart;











// import React, { Component } from 'react';

// import FusionCharts from 'fusioncharts';
// import Charts from 'fusioncharts/fusioncharts.charts';
// import ReactFC from 'react-fusioncharts';

// class ProductChart extends Component {

    
     
      
//     render() {
//         const {units_shipped_last_24_hrs, units_shipped_last_7_days, units_shipped_last_30_days, units_shipped_last_90_days, units_shipped_last_180_days, units_shipped_last_365_days} = this.props.details
//         console.log(units_shipped_last_24_hrs, units_shipped_last_7_days, units_shipped_last_30_days, units_shipped_last_90_days, units_shipped_last_180_days, units_shipped_last_365_days);
//         console.log(units_shipped_last_24_hrs, units_shipped_last_7_days / 7, units_shipped_last_30_days / 30, units_shipped_last_90_days / 90, units_shipped_last_180_days / 180, units_shipped_last_365_days / 365);
        
//         Charts(FusionCharts);

//        const myDataSource = {
//             chart: {
//               caption: 'Harry\'s SuperMart',
//               subCaption: 'Top 5 stores in last month by revenue',
//               numberPrefix: '$',
//               renderas: "line", 
//             },
//             data: [
//               {
//                 label: 'Bakersfield Central',
//                 value: '880000',
//               },
//               {
//                 label: 'Garden Groove harbour',
//                 value: '730000',
//               },
//               {
//                 label: 'Los Angeles Topanga',
//                 value: '590000',
//               },
//               {
//                 label: 'Compton-Rancho Dom',
//                 value: '520000',
//               },
//               {
//                 label: 'Daly City Serramonte',
//                 value: '330000',
//               },
//             ],
//           };
          
//           const chartConfigs = {
//             type: 'column2d',
//             width: 600,
//             height: 400,
//             dataFormat: 'json',
//             dataSource: myDataSource,
//           };
//         return (
//             <div>
//                  <ReactFC {...chartConfigs} />
//             </div>
//         )

//     }
// }

// export default ProductChart;
