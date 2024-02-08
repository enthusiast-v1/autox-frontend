'use client';

import ReactApexChart from 'react-apexcharts';

const lineChart = {
  series: [
    {
      name: 'Petrol',
      data: [350, 40, 300, 220, 500, 250, 400, 230, 500, 420, 300, 500],
      offsetY: 0,
    },
    {
      name: 'Diesel',
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400, 350, 450, 400],
      offsetY: 0,
    },
  ],

  options: {
    chart: {
      width: '100%',
      height: 'auto',
      type: 'area',
      toolbar: {
        show: false,
      },
    },

    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },

    yaxis: {
      labels: {
        style: {
          fontSize: '14px',
          fontWeight: 600,
          colors: ['#8c8c8c'],
        },
      },
    },

    xaxis: {
      labels: {
        style: {
          fontSize: '14px',
          fontWeight: 600,
          colors: [
            '#8c8c8c',
            '#8c8c8c',
            '#8c8c8c',
            '#8c8c8c',
            '#8c8c8c',
            '#8c8c8c',
            '#8c8c8c',
            '#8c8c8c',
            '#8c8c8c',
            '#8c8c8c',
            '#8c8c8c',
            '#8c8c8c',
          ],
        },
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },

    tooltip: {
      y: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatter: function (val: any) {
          return val + ' Liter';
        },
      },
    },
  },
};

const LineChart = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between mb-[14px]">
        <h2>Rent Summery</h2>
      </div>

      <ReactApexChart
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        options={lineChart.options}
        series={lineChart.series}
        type="area"
        height={300}
        width={'100%'}
      />
    </div>
  );
};

export default LineChart;
