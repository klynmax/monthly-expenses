import { ApexOptions } from 'apexcharts';
import colors from '../../../assets/color/colors';
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
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,
        style: {
          colors: colors.secundaryText,
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
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
      fontSize: '14px',
      // fontFamily: 'Helvetica, Arial',
      fontWeight: 400,
      labels: {
        colors: colors.secundaryText,
        useSeriesColors: false,
      },
      markers: {
        width: 6,
        height: 6,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
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
    yaxis: {
      labels: {
        show: true,
        align: 'right',
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: [colors.secundaryText],
          fontSize: '12px',
          // fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-yaxis-label',
        },
      },
    },

    chart: {
      foreColor: '#373d3f',
    },

    // grid: {
    //   row: {
    //     colors: ['#F44336', '#E91E63', '#9C27B0']
    //   },
    //   column: {
    //     colors: ['#F44336', '#E91E63', '#9C27B0']
    //   }
    // }
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
