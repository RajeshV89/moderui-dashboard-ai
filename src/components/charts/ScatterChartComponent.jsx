import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

function ScatterChartComponent() {
  const data = {
    datasets: [
      {
        label: 'Series A',
        data: [
          { x: 100, y: 200 },
          { x: 120, y: 100 },
          { x: 170, y: 300 },
          { x: 140, y: 250 },
          { x: 150, y: 400 },
          { x: 110, y: 280 },
        ],
        backgroundColor: 'rgba(50, 184, 198, 0.8)',
      },
      {
        label: 'Series B',
        data: [
          { x: 300, y: 300 },
          { x: 400, y: 500 },
          { x: 200, y: 700 },
          { x: 340, y: 350 },
          { x: 560, y: 500 },
          { x: 230, y: 780 },
        ],
        backgroundColor: 'rgba(255, 107, 107, 0.8)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: 'rgba(255, 255, 255, 0.9)' } },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        ticks: { color: 'rgba(255, 255, 255, 0.7)' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
      },
      y: {
        ticks: { color: 'rgba(255, 255, 255, 0.7)' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
      },
    },
  };

  return (
    <div className="backdrop-blur-lg bg-smoke/20 border border-border-color rounded-xl p-6">
      <h3 className="text-lg font-semibold text-text-main mb-4">Customer Engagement vs Sales</h3>
      <div style={{ height: '350px' }}>
        <Scatter data={data} options={options} />
      </div>
    </div>
  );
}

export default ScatterChartComponent;
