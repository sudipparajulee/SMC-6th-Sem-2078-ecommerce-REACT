import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = () => {
  const options = {
    title: {
      text: 'My First Highchart'
    },
    series: [
      {
        name: 'Demo Series',
        data: [1, 3, 2, 4]
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
