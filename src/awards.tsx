import React from "react";

interface Award {
  img: string;
  text: string;
  containerId: string;  // Уникальный идентификатор
}

interface AwardsProps {
  title: string;
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
        <div
          className="svg flex justify-center absolute left-36 sm:mt-6 xl:flex-no-wrap flex-col xl:grid grid-flow-col"
        >
          {awards.map(({ img, text, containerId }) => (
            <div
              key={containerId}
              className="sm:mr-8 sm:ml-0 -ml-20 flex justify-start sm:mt-0 mt-3"
            >
              <img
                className="mr-3"
                src={img}
                alt={text}
              />
              <span className="sm:text-sm text-xs font-normal text-white pt-6">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;


