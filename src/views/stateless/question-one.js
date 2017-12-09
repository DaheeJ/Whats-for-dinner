import './stateless.css';
import React, { Component } from 'react';
import chicken from './img/chicken.png'
import cow from './img/cow.png'
import fish from './img/fish.png'
import pizza from './img/pizza.png'


const QuestionOne = () =>{
    return (
    <div className="question-container">
        <h1 className="question-title">Stateless Question one</h1>
        <div className="question-choices">
        <div className="question-picture">
            <img src={chicken} className="App-logo" alt="chicken" />
            <img src={cow} className="App-logo" alt="cow" />
            <img src={fish} className="App-logo" alt="fish" />
            <img src={pizza} className="App-logo" alt="pizza" />
        </div>
        <div className="question-user-selected"></div>

        </div>
    </div>
    );  
};

export default QuestionOne;
