import './stateless.css';
import React, { Component } from 'react';
import oven from './img/oven.png'
import stov from './img/stov.png'
import bbq from './img/bbq.png'



const QuestionTwo = ({handlePickChoice}) =>{
    return (
    <div className="question-container">
        <h1 className="question-title">How to cook it?</h1>
        <div className="question-choices">
        <div className="question-picture">
        <img onClick={()=>handlePickChoice('mainCourse','oven')} src={oven} className="App-logo" alt="oven" />
            <img onClick={()=>handlePickChoice('mainCourse','stov')} src={stov} className="App-logo" alt="stov" />
            <img onClick={()=>handlePickChoice('mainCourse','bbq')} src={bbq} className="App-logo" alt="bbq" />
        </div>
        <div className="question-user-selected"></div>

        </div>
    </div>
    );  
};

export default QuestionTwo;
