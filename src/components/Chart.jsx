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

const Chart = () => {
  return (
    <>
      <div className="flex h-full flex-col justify-start  rounded-xl  bg-[#FCFFFE] pt-6 shadow-md">
        <div className="flex items-center gap-1.5 px-5">
          <SecondaryButton classes={`text-[#8C8C8C] bg-[#F7F7F7] w-28`}>
            Model
          </SecondaryButton>
          <SecondaryButton classes={`bg-[#14314E] w-28 text-white`}>
            Style
          </SecondaryButton>

          <SecondaryButton classes={`text-[#8C8C8C] bg-[#F7F7F7] w-36`}>
            Contribution
          </SecondaryButton>
        </div>

        <div className="relative px-20 pt-10">
          <PolarArea data={data} />
          <p className="absolute left-28 top-10 text-[10px] font-semibold text-[#8C8C8C]">
            Defending <br /> Frequency
          </p>
          <p className="absolute right-28 top-10  text-[10px] font-semibold text-[#8C8C8C]">
            Defending <br /> Impact
          </p>
          <p className="absolute right-6 top-2/4  text-[10px] font-semibold text-[#8C8C8C]">
            Possession <br /> Retention
          </p>
          <p className="absolute bottom-2 right-28  text-[10px] font-semibold text-[#8C8C8C]">
            Set <br /> Plays
          </p>
          <p className="absolute bottom-2 left-28 text-[10px] font-semibold text-[#8C8C8C]">
            Ball <br /> Progression
          </p>
          <p className="absolute left-9  top-2/4 text-[10px] font-semibold text-[#8C8C8C]">
            Shot <br /> Creation
          </p>

          {/* Numbers */}
          <p className="absolute left-44 top-24  text-[10px] font-bold text-[#8C8C8C]">
            42
          </p>
          <p className="absolute right-52 top-36 text-[10px] font-bold text-[#8C8C8C]">
            15
          </p>
          <p className="absolute right-20 top-44  text-[10px] font-bold text-[#8C8C8C]">
            81
          </p>
          <p className="absolute bottom-32 right-60  text-[10px] font-bold text-[#8C8C8C]">
            3
          </p>
          <p className="absolute bottom-24 left-48 text-[10px] font-bold text-[#8C8C8C]">
            4
          </p>
          <p className="absolute left-52  top-52 text-[10px] font-bold text-[#8C8C8C]">
            3
          </p>
        </div>
      </div>
    </>
  );
};

export default Chart;
