import React from "react";

const SingleCard = ({ acctor, selectActor }) => {
  const { image, name, salary, role } = acctor;

  return (
    <>
      <div className="text-white border-2 shadow-xl card bg-base-100 w-[350px] rounded-2xl ">
        <figure className="flex justify-center px-10 pt-10">
          <img src={image} alt="Shoes" className="w-32 rounded-xl" />
        </figure>
        <div className="items-center p-3 text-center card-body">
          <h2 className="text-2xl font-bold card-title">{name}!</h2>
          <p className="text-center">
            If a dog chews um dolor sit amet consectetur. Lorem ipsum dolor sit
            amet.
          </p>
          <div className="flex justify-around">
            <p> Sallary : {salary} $ </p>
            <p>Role : {role}</p>
          </div>
          <div className="card-actions">
            <button
              onClick={() => selectActor(acctor)}
              className="px-4 py-3 rounded-xl btn btn-active bg-amber-500"
            >
              Accent
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
