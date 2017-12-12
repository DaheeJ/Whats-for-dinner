import './stateless.css';
import React, { Component } from 'react';
import chicken from './img/chicken.png'
import cow from './img/cow.png'
import fish from './img/fish.png'
import pizza from './img/pizza.png'


const QuestionOne = ({handlePickChoice}) =>{
  
    return (
    <div className="question-container">
        <h1 className="question-title">What do you feel like?</h1>
        <div className="question-choices">
        <div className="question-picture">
            <img onClick={()=>handlePickChoice('mainCourse','Chicken')} src={chicken} className="App-logo" alt="Chicken" />
            <img onClick={()=>handlePickChoice('mainCourse','Beef')} src={cow} className="App-logo" alt="cow" />
            <img onClick={()=>handlePickChoice('mainCourse','Fish')} src={fish} className="App-logo" alt="fish" />
            <img onClick={()=>handlePickChoice('mainCourse','Pizza')} src={pizza} className="App-logo" alt="pizza" />
        </div>
        <div className="question-user-selected"></div>

        </div>
    </div>
    );  
};

export default QuestionOne;
