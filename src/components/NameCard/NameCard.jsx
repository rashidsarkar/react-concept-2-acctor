const NameCard = ({ selectAcctor, totalExp }) => {
  return (
    <div>
      <h2 className="text-2xl text-center">this is price cart </h2>
      <div className="flex justify-between px-3 py-5 text-white">
        <div className="text-white cart">
          <h3>Total Actor : {selectAcctor.length}</h3>
          {selectAcctor.map((acctor, idx) => (
            <li key={idx}>{acctor.name}</li>
          ))}
        </div>
        <div>
          <h3>Total Expend : {totalExp} </h3>
          <h3>Total Remaning : {20000 - totalExp} </h3>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
