import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../../API';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDaily());
    }

    console.log("blah", dailyData);

    fetchAPI();
  });

  const lineChart = (
    dailyData.length
    ? (
      <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed),
          label: 'Confirmed',
          borderColor: 'yellow',
          fill: true,
        }, {
          data: dailyData.map(({ deaths }) => deaths),
          label: 'Deaths',
          borderColor: 'red',
          fill: true,
        }],
      }}
    />) : null
  );

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}


export default Chart;