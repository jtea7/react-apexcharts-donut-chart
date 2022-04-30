import { ApexOptions } from 'apexcharts';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function DonutChart() {
  const [series] = useState([44, 55, 41, 17, 15]);
  const [options] = useState<ApexOptions>({
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
    colors: ['#F44336', '#E91E63', '#9C27B0'],
    chart: {
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + '%';
      },
      dropShadow: {},
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    // plotOptions: {
    //   pie: {
    //     donut: {
    //       labels: {
    //         name: { show: false },
    //         value: { show: false },
    //         total: { show: false },
    //       },
    //     },
    //   },
    // },
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     options: {
    //       chart: {
    //         width: 200,
    //       },
    //       legend: {
    //         position: 'bottom',
    //       },
    //     },
    //   },
    // ],
    legend: {
      position: 'bottom',
      offsetY: 0,
      fontSize: '16px',
      horizontalAlign: 'center',
      width: 300,
      height: 50,
    },
  });

  return <ReactApexChart options={options} series={series} type="donut" />;
}

export default DonutChart;
