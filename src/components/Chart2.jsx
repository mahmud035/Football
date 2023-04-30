/* eslint-disable no-unused-vars */
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import SecondaryButton from './SecondaryButton';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

// eslint-disable-next-line react-refresh/only-export-components
export const data = {
  datasets: [
    {
      data: [20, 50, 10, 25, 10, 40],
      backgroundColor: [
        '#14314E',
        '#14314E',
        '#14314E',
        '#EDF2F7',
        '#EDF2F7',
        '#EDF2F7',
      ],
      borderWidth: 2,
      borderColor: '#fff',
    },
  ],
};

const Chart2 = () => {
  return (
    <div className="relative flex h-full flex-col justify-start  rounded-xl  bg-[#FCFFFE] px-10 pt-6 shadow-md">
      {/* Chart */}
      <div className="pt-9"></div>
    </div>
  );
};

export default Chart2;
