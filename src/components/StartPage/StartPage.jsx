import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <div className="container">
      <div className="start card">
        <h1 className="start-title">Выберите тест, который хотите сдать:</h1>
        <div className="start__inner">
          <div className="card col-12 col-md-5">
            <img src={require('../../img/biology.png')} className="card-img-top" alt="biology-icon"/>
            <div className="card-body">
              <h5 className="card-title">Биология</h5>
              <p className="card-text">Соответствует программе школьного курса по биологии за 8 класс</p>
              <Link to="/biology" className="link">Пройти тест</Link>
            </div>
          </div>
          <div className="card col-12 col-md-5">
            <img src={require('../../img/geography.png')} className="card-img-top" alt="geography-icon"/>
            <div className="card-body">
              <h5 className="card-title">География</h5>
              <p className="card-text">Соответствует программе школьного курса по географии за 6 класс</p>
              <Link to="/geography" className="link">Пройти тест</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartPage;