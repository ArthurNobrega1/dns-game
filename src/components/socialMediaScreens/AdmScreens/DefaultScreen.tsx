import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function Dashboard() {
  // Dados fictícios para o gráfico
  const gerarDadosFicticios = () => {
    const horas = Array.from({ length: 24 }, (_, i) => `Hora ${i + 1}`);
    const instabilidade = Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));
    return { horas, instabilidade };
  };

  const { horas, instabilidade } = gerarDadosFicticios();

  const data = {
    labels: horas,
    datasets: [
      {
        label: 'Instabilidade (%)',
        data: instabilidade,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Monitoramento de Instabilidade',
      },
    },
    scales: {
      y: { beginAtZero: true, max: 100 },
      x: {},
    },
  };

  return (
    <div className=" w-full bg-gray-100 p-2">

      <div className="bg-purple-700 text-white text-center py-4 font-bold text-lg w-full max-lg:text-xs">Website Overview</div>

      <div className="bg-white p-4 shadow-md rounded-md mt-2 w-full grid grid-cols-4 max-lg:flex max-lg:flex-col gap-2 *:*:max-lg:text-xs">
        <div className="text-center w-full">
          <p className="text-3xl font-bold">203</p>
          <p>Users</p>
        </div>
        <div className="text-center w-full">
          <p className="text-3xl font-bold">12</p>
          <p>Pages</p>
        </div>
        <div className="text-center w-full">
          <p className="text-3xl font-bold">33</p>
          <p>Posts</p>
        </div>
        <div className="text-center w-full">
          <p className="text-3xl font-bold">12,334</p>
          <p>Visitors</p>
        </div>
      </div>

      <div className="bg-white p-4 shadow-md rounded-md mt-2 min-w-72 h-[40%]">
        <h2 className="bg-purple-700 text-white text-center py-4 font-bold text-lg w-full max-lg:text-xs">Instabilidade do Sistema</h2>
        <div className="w-full h-80 min-w-60"> {/* Define uma altura fixa para o gráfico */}
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}