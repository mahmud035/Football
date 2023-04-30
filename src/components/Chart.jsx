/* eslint-disable no-unused-vars */
import SecondaryButton from './SecondaryButton';
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';

const Chart = () => {
  const data = [
    { name: 'Defending Frequency', value: 350 },
    { name: 'Defending Impact', value: 300 },
    { name: 'Shot Creation', value: 370 },
    { name: 'Ball Progression', value: 270 },
    { name: 'Set Plays', value: 300 },
  ];

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

        <div className="pt-9">
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie dataKey="value" data={data} fill="#14314E" label />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
