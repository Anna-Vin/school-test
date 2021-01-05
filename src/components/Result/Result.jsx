import React from 'react';
import { Link } from 'react-router-dom';
import welldone from '../../img/welldone.gif';
import tryagain from '../../img/tryagain.gif';


const Result = () => {
  let answers = JSON.parse(localStorage.getItem('Answers')) || [];
  let score = answers.reduce((a, b) => {
    return a + b;
  });
  let percent = ((score * 100) / 9).toFixed(2);

  return (
    <div className="App">
      <div className="container">
        <div className="result">
          <h1>Ваш результат:</h1>
          <p>Вы справились на <span>{percent}% </span>, набрав <span>{score}</span> баллов из 9</p>
          <img src={percent > 50 ? `${welldone}` : `${tryagain}`} alt="img"></img>
          <p>Чтобы улучшить свой результат, пройдите тест еще раз :</p>
          <Link className="link" to='/'>Пройти тест</Link>
        </div>
      </div>
    </div>
  );
}

export default Result;