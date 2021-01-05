import React, { useState, useEffect } from 'react';
import TextCard from '../TextCard/TextCard';
import SelectCard from '../SelectCard/SelectCard';
import CheckCard from '../CheckCard/CheckCard';
import RadioCard from '../RadioCard/RadioCard';
import Button from '../../components/Button/Button.jsx';
import Timer from '../../components/Timer/Timer.jsx'


const QuestionsContainer = ({ data }) => {
  const [answersModel, setAnswersModel] = useState(new Array(data.length));

  useEffect(() => {
    console.log(answersModel)
  }, [answersModel])

  const setAnswer = (index) => {
    return (pointerCount) => {
      const indexOfElement = index;
      let arr = [...answersModel];
      arr[indexOfElement] = pointerCount;
      setAnswersModel(arr);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <Timer />
        {data.map((item, index) => {
          switch (item.type) {
            case "TEXT":
              return <TextCard key={index} data={item} numberOfQuestion={index + 1}
                setAnswer={setAnswer(index)} />;
            case "CHECK":
              return <CheckCard key={index} data={item} numberOfQuestion={index + 1}
                setAnswer={setAnswer(index)} />;
            case "RADIO":
              return <RadioCard key={index} data={item} numberOfQuestion={index + 1}
                setAnswer={setAnswer(index)} />;
            case "SELECT":
              return <SelectCard key={index} data={item} numberOfQuestion={index + 1} setAnswer={setAnswer(index)} />;
            default: return null;
          }
        })
        }
      </div>
      <Button data={answersModel} />
    </div>
  );
};

export default QuestionsContainer;