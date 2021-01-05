import React from 'react';


const RadioCard = ({ data, numberOfQuestion, setAnswer }) => {

  const result = (indexOfAnswerArr) => {
    const answer = data.answers[indexOfAnswerArr];
    setAnswer(answer.point)
  };

  return (
    <div className="card col-12">
      <h2 className="card-title">№ вопроса: {numberOfQuestion}</h2>
      <h3>{data.title}</h3>
      <div className="card-body">
        {data.answers.map((item, index) => {
          return (
            <div key={index} className="radio-wrapper">
              <input type="radio" name={data.title} value={index} id={data.title + index}
                onChange={(e) => result(e.target.value)} />
              <label htmlFor={data.title + index}>{item.title}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioCard;