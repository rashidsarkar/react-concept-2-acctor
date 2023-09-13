import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCart/SingleCard";
import NameCard from "../NameCard/NameCard";

const Cart = () => {
  const [allActorsData, setAllActorsData] = useState([]);
  const [selectAcctor, setSelectAcctor] = useState([]);
  const [totalExpen, setTotalExpen] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllActorsData(data));
  }, []);
  const selectActor = (acctor) => {
    // setSelectAcctor([...selectAcctor, acctor]);
    const oldAcc = [...selectAcctor];
    // console.log(selectAcctor);
    const newAcc = selectAcctor.find((item) => item.name === acctor.name);

    if (!newAcc) {
      oldAcc.push(acctor);

      setSelectAcctor(oldAcc);
      if (totalExpen + acctor.salary > 20000) {
        alert("we dontr money");
      } else {
        setTotalExpen(totalExpen + acctor.salary);
      }
    }
  };
  let totalExp = totalExpen;

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
      <div className="bg-fuchsia-500 w-[370px]">
        <NameCard totalExp={totalExp} selectAcctor={selectAcctor}></NameCard>
      </div>
    </div>
  );
};

export default Cart;
