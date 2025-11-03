import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChartComponent() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales',
        data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
        backgroundColor: 'rgba(50, 184, 198, 0.8)',
      },
      {
        label: 'Expenses',
        data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
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
      <h3 className="text-lg font-semibold text-text-main mb-4">Monthly Performance</h3>
      <div style={{ height: '350px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default BarChartComponent;
