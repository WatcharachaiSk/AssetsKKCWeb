import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// interface LineProps {
//   options: ChartOptions<"line">;
//   data: ChartData<"line">;
// }

function UpTestt() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };
  const labels = ["ปกติ", "ชำรุด"];

  const data = {
    labels,
    datasets: [
      {
        label: labels[0],
        data: labels.map(() => Math.random() * 1000),

        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: labels[1],
        data: labels.map(() => Math.random() * 1000),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
}

export default UpTestt;
