import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import "./App.scss"
import QuestionsContainer from './components/QuestionsContainer/QuestionsContainer';
import StartPage from './components/StartPage/StartPage'
import Result from './components/Result/Result';
import { questionsBiology, questionsGeography } from './data/questions';



const App = ()  =>{
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/start"/>
        </Route>
        <Route path="/start"><StartPage/></Route>
        <Route path="/biology"><QuestionsContainer data={questionsBiology}/></Route>
        <Route path="/geography"><QuestionsContainer data={questionsGeography}/></Route>
        <Route path="/result"><Result/></Route>
      </Switch>
    </BrowserRouter>
  );
}

 
export default App;
