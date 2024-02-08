'use client';

import ReactApexChart from 'react-apexcharts';

const columnChart = {
  series: [
    {
      name: 'Trips',
      data: [450, 200, 100, 220, 500, 100, 400, 230, 500, 300, 400, 250],
      color: '#fff',
    },
  ],

  options: {
    chart: {
      type: 'bar',
      width: '100%',
      height: 'auto',

      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['transparent'],
    },
    grid: {
      show: true,
      borderColor: '#ccc',
      strokeDashArray: 2,
    },
    xaxis: {
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
      labels: {
        show: true,
        align: 'right',
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: [
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
          ],
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        align: 'right',
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: [
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
          ],
        },
      },
    },

    tooltip: {
      y: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatter: function (val: any) {
          return val;
        },
      },
    },
  },
};

const BarChart = () => {
  return (
    <div className="overflow-hidden">
      <div className="mb-4">
        <h2>Booking Summery</h2>
      </div>
      <div>
        <ReactApexChart
          className="bg-black rounded-md shadow-md"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          options={columnChart?.options}
          series={columnChart?.series}
          type="bar"
          height={300}
        />
      </div>
    </div>
  );
};

export default BarChart;
