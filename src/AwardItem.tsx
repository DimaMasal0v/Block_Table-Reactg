import React from "react";

interface AwardItemProps {
  img: string;
  text: string;
  index: number;
}

const AwardItem: React.FC<AwardItemProps> = ({ img, text, index }) => {
  return (
    <div className="sm:mr-8 sm:ml-0 -ml-20 flex justify-start sm:mt-0 mt-3">
      <img className="mr-3" src={img} alt={`Award ${index + 1}`} />
      <span className="sm:text-sm text-xs font-normal text-white pt-6">{text}</span>
    </div>
  );
};

export default AwardItem;
