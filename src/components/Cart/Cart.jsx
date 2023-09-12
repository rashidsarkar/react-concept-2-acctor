import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCart/SingleCard";
import NameCard from "../NameCard/NameCard";

const Cart = () => {
  const [allActors, setAllActors] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);
  const selectActor = (acctor) => {
    console.log(acctor);
  };
  return (
    <div className="flex justify-around ">
      <div className="flex justify-between w-[900px] flex-wrap gap-4  ">
        {allActors.map((acctor, idx) => (
          <SingleCard
            selectActor={selectActor}
            acctor={acctor}
            key={idx}
          ></SingleCard>
        ))}
      </div>
      <div className="bg-fuchsia-500 w-[300px]">
        <NameCard></NameCard>
      </div>
    </div>
  );
};

export default Cart;
