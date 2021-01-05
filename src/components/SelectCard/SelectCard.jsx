import React from 'react';


const SelectCard = ({ data, numberOfQuestion, setAnswer }) => {
  
  const result = (indexOfAnswerArr) => {
    const answer = data.answers[indexOfAnswerArr];
    setAnswer(answer.point)
  };

  return (
    <div className="card col-12">
      <h2 className="card-title">№ вопроса: {numberOfQuestion}</h2>
      <h3>{data.title}</h3>
      <div className="card-body">
        <select className="custom-select" onChange={(e) => result(e.target.value)}>
          {data.answers.map((item, index) => {
            return (
              <option key={index} value={index}>{item.title}</option>
            );  
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectCard;