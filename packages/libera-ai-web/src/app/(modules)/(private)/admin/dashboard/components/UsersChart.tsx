'use client'

import { Chart } from 'react-google-charts'

interface UsersChartProps {
  data: (string | number)[][]
}

export default function UsersChart({ data }: UsersChartProps) {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={{
        // title: 'Usuários cadastrados',
        is3D: true,
        backgroundColor: '#1A1A1A',
        titleTextStyle: { color: '#F9F9F9' },
        legendTextStyle: { color: '#F9F9F9' },
        hAxis: {
          // title: 'Dia',
          titleTextStyle: { color: '#F9F9F9' },
          textStyle: { color: '#F9F9F9' },
        },
        vAxis: {
          // title: 'Quantidade',
          titleTextStyle: { color: '#F9F9F9' },
          textStyle: { color: '#F9F9F9' },
        },
        legend: 'bottom',
        colors: ['#8D7DFF', '#CFFF5E', '#B87EEE'],
      }}
    />
  )
}
