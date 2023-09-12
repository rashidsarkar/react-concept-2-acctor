import React from "react";

const NameCard = ({ selectAcctor }) => {
  return (
    <div>
      <div className="py-5 text-white cart">
        <h2 className="text-2xl text-center">this is price cart </h2>
        <h3>Total Actor : {selectAcctor.length}</h3>
        {selectAcctor.map((acctor, idx) => (
          <li key={idx}>{acctor.name}</li>
        ))}
      </div>
    </div>
  );
};

export default NameCard;
