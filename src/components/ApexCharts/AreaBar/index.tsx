import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

export default function AreaChart() {
  const options: ApexOptions = {
    xaxis: {
      categories: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ],
    },
    // title: {
    //   text: 'Entradas x Saídas',
    // },
    colors: ['#b2f35f', '#fe0f0f'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        gradientToColors: ['#dbead5', '#772f27'],
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
      name: 'Entradas',
      data: [8000, 7600, 8750, 5000, 8000, 8000, 8000, 8750, 7600, 8000, 9800, 9500],
    },
    {
      name: 'Saídas',
      data: [5000, 6000, 5000, 5300, 5800, 6200, 5000, 5360, 5800, 5000, 7400, 8000],
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={360}
      style={{ padding: 20 }}
    />
  );
}
