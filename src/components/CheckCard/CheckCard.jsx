import React from 'react';

const initialAnswers = answers => {
  return answers.map(answer => {
    return { ...answer, isChecked: false };
  })
}


const CheckCard = ({ data, numberOfQuestion, setAnswer }) => {
  const arrOfAnswers = initialAnswers(data.answers);

  const result = (e, index) => {
    const newArr = [...arrOfAnswers];
    newArr[index].isChecked = e.target.checked;

    let resultOfRight = newArr.filter(el => el.isChecked).map(el => el.point);
    resultOfRight = resultOfRight.length ? resultOfRight.reduce((a, b) => a + b) : 0;

    let resultOfWrong = newArr.filter(el => el.isChecked && !el.point).map(el => el.point);
    resultOfWrong = resultOfWrong.length / 2;

    setAnswer(resultOfRight - resultOfWrong)
  }

  return (
    <div className="card col-12">
      <h2 className="card-title">№ вопроса: {numberOfQuestion}</h2>
      <h3>{data.title}</h3>
      <div className="card-body">
        {data.answers.map((item, index) => {
          return (
            <div key={index} className="checkbox-wrapper">
              <input type="checkbox" name={data.title} value={index} id={data.title + index}
                onChange={(e) => result(e, index)} />
              <label htmlFor={data.title + index}>{item.title}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckCard;