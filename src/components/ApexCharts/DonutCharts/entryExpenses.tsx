import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

export default function EntryExpenses() {
  const options: ApexOptions = {
    xaxis: {
      categories: ['Despesas', 'Entradas'],
    },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
        },
      },
    },
    // title: {
    //   text: 'Principais despesas',
    // },
    colors: ['#b2f35f', '#F44336'],
    // fill: {
    //   type: 'gradient',
    //   gradient: {
    //     shade: 'dark',
    //     type: 'vertical',
    //     // gradientToColors: ['#dbead5'],
    //   },
    // },
    markers: {
      size: [4, 4],
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '18px',
      // fontFamily: 'Helvetica, Arial',
      fontWeight: 400,
    },
    // grid: {
    //   borderColor: '#edf5ff',
    //   row: {
    //     colors: ['transparent'],
    //     opacity: 0.1,
    //   },
    //   yaxis: {
    //     lines: {
    //       show: false,
    //     },
    //   },
    // },
  };

  //   const series = [
  //     {
  //       name: 'Entradas',
  //       data: '200',
  //     },
  //     {
  //       name: 'Despesas',
  //       data: '500',
  //     },
  //   ];

  const series = [500, 600];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="donut"
      height={200}
      style={{ padding: 20 }}
    />
  );
}
