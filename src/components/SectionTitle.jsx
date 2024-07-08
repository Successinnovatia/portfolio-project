import React from "react";

const SectionTitle = ({ text, headerColor }) => {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h2
        className={`text-3xl font-medium tracking-wider capitalize ${headerColor}`}
      >
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
