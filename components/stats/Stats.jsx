import React from "react";
import StatsItem from "./Statsitem";

const statsData = [
  {
    endCountNum: 2,
    endCountText: "+",
    text: "Yrs. of Experience",
  },
  {
    endCountNum: 99,
    endCountText: "+",
    text: "Websites Built",
  },
  {
    endCountNum: 100,
    endCountText: "%",
    text: "Clients Satisfied",
  },
];

const Stats = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
      {statsData.map((item, index) => (
        <StatsItem
          key={index}
          endCountNum={item.endCountNum}
          endCountText={item.endCountText}
          text={item.text}
        />
      ))}
    </section>
  );
};

export default Stats;
