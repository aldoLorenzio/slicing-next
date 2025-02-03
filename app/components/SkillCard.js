import React from "react";

const SkillCard = ({img, title, level }) => {
  return (
    <div>
          <div className="flex shadow-skill-box bg-white rounded-lg p-8">
            <img src={img} alt="" className="h-20" />
            <div className="flex-col my-auto ml-1">
            <h4 className="font-semibold text-2xl">{title}</h4>
            <p className="text-sm text-gray-400 text-left pl-1">{level}</p>
            </div>
          </div>
    </div>
  );
};

export default SkillCard;
