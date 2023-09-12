import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCart/SingleCard";
import NameCard from "../NameCard/NameCard";

const Cart = () => {
  const [allActorsData, setAllActorsData] = useState([]);
  const [selectAcctor, setSelectAcctor] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllActorsData(data));
  }, []);
  const selectActor = (acctor) => {
    // setSelectAcctor([...selectAcctor, acctor]);
    const oldAcc = [...selectAcctor];
    // console.log(selectAcctor);
    if (!oldAcc.includes(acctor)) {
      oldAcc.push(acctor);
      setSelectAcctor(oldAcc);
    }
  };
  return (
    <div className="flex justify-around ">
      <div className="flex justify-between w-[900px] flex-wrap gap-4  ">
        {allActorsData.map((acctor, idx) => (
          <SingleCard
            selectActor={selectActor}
            acctor={acctor}
            key={idx}
          ></SingleCard>
        ))}
      </div>
      <div className="bg-fuchsia-500 w-[300px]">
        <NameCard selectAcctor={selectAcctor}></NameCard>
      </div>
    </div>
  );
};

export default Cart;
