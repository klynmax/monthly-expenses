import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

export default function MainExpenses() {
  const options: ApexOptions = {
    xaxis: {
      categories: [
        'Energia',
        'Água',
        'Aluguel',
        'Supermercado',
        'Saúde',
        'Lazer',
        'Viagens',
        'outros',
      ],
    },
    title: {
      text: 'Principais despesas',
    },
    colors: ['#00ffff'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        // gradientToColors: ['#dbead5'],
      },
    },
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
      position: 'top',
      horizontalAlign: 'left',
      fontSize: '18px',
      // fontFamily: 'Helvetica, Arial',
      fontWeight: 400,
    },
    grid: {
      borderColor: '#edf5ff',
      row: {
        colors: ['transparent'],
        opacity: 0.1,
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  const series = [
    {
      // name: 'Entradas',
      data: [480, 312, 3000, 1500, 1000, 800, 1230, 2750],
    },
    // {
    //   name: 'Saídas',
    //   data: [5000, 6000, 5000, 5300, 5800, 6200, 5000, 5360, 5800, 5000, 7400, 8000],
    // },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      height={360}
      style={{ padding: 20 }}
    />
  );
}
