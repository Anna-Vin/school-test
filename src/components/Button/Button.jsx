import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({data}) => {

  const toLocalStorage = () => {
    localStorage.setItem('Answers', JSON.stringify(data));
  };

  return (
    <Link className="link" to='/result' onClick={(e) => toLocalStorage(e)}>Узнать результат</Link>
  );
}

export default Button;