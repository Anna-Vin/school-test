import React from 'react';


const TextCard = ({ data, numberOfQuestion, setAnswer }) => {

  const result = (answerString) => {
    if (data.answers[0].title === answerString.toLowerCase()) {
      setAnswer(1)
    } else {
      setAnswer(0)
    }
  };

  return (
    <div className="card col-12">
      <h2 className="card-title">№ вопроса: {numberOfQuestion}</h2>
      <h3>{data.title}</h3>
      <div className="card-body">
        <input type="text" placeholder="Ваш ответ" onChange={(e) => result(e.target.value)} />
      </div>
    </div>
  );
};

export default TextCard;