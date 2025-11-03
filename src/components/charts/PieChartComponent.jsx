import { PieChart } from '@mui/x-charts/PieChart';

function PieChartComponent() {
  const data = [
    { id: 0, value: 30, label: 'Product A', color: '#32b8c6' },
    { id: 1, value: 25, label: 'Product B', color: '#ff6b6b' },
    { id: 2, value: 20, label: 'Product C', color: '#4ecdc4' },
    { id: 3, value: 15, label: 'Product D', color: '#feca57' },
    { id: 4, value: 10, label: 'Product E', color: '#a29bfe' },
  ];

  return (
    <div className="backdrop-blur-lg bg-smoke/20 border border-border-color rounded-xl p-6">
      <h3 className="text-lg font-semibold text-text-main mb-4">Product Distribution</h3>
      <PieChart
        series={[
          {
             data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'red' },
          },
        ]}
        width={500}
        height={300}
        sx={{
          '.MuiChartsLegend-label': { fill: 'rgba(255, 255, 255, 0.9)' },
        }}
      />
    </div>
  );
}

export default PieChartComponent;
