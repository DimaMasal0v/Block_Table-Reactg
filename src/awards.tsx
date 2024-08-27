import React from "react";
import AwardItem from "./AwardItem"; // Импортируем компонент AwardItem

interface Award {
  img: string;
  text: string;
  containerId: string; // Уникальный идентификатор
}

interface AwardsProps {
  title?: string;
  awards: Award[];
}

const Awards: React.FC<AwardsProps> = ({ title, awards }) => {
  return (
    <section>
      <div className="bg-gray-400 sm:h-32 h-96 mb-20 grid sm:grid-cols-12 grid-cols-4 gap-4 sm:gap-8 relative">
        <div>
          <p className="select-text text-white top-10 sm:left-10 absolute">
            {title}
          </p>
        </div>
        <div className="svg flex justify-center absolute left-36 sm:mt-6 xl:flex-no-wrap flex-col xl:grid grid-flow-col">
          {awards.map(({ img, text, containerId }) => (
            <AwardItem key={containerId} img={img} text={text} /> // Используем AwardItem для каждого элемента награды
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
