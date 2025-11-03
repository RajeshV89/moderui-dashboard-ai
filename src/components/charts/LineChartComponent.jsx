import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChartComponent() {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    datasets: [
      {
        label: 'Revenue',
        data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
        borderColor: 'rgba(50, 184, 198, 1)',
        backgroundColor: 'rgba(50, 184, 198, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Target',
        data: [2400, 2210, 7640, 4000, 3200, 2900, 3500],
        borderColor: 'rgba(254, 202, 87, 1)',
        backgroundColor: 'rgba(254, 202, 87, 0.2)',
        tension: 0.4,
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
      <h3 className="text-lg font-semibold text-text-main mb-4">Weekly Revenue Trend</h3>
      <div style={{ height: '350px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default LineChartComponent;
