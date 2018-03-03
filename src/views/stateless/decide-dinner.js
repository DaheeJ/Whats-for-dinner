import './stateless.css';
import React, { Component } from 'react';

const DecideDinner = (xxyxyx ) => {

    let foods = xxyxyx;
    let mainDish = foods.food.mainCourse.picked;
    let howCooked = foods.food.howToCook.picked;

    function randomNumber (limit) {
        return Math.floor(Math.random() * Math.floor(limit));
    }

    function getSides () {
        let sidesChoices = xxyxyx.food.sides;

        let rice = ' ' + sidesChoices.rice[randomNumber(sidesChoices.rice.length)]+' rice,';
        let salad = ' ' + sidesChoices.salad[randomNumber(sidesChoices.salad.length)] + ' Salad and ';
        let vegetables = ' ' + sidesChoices.vegetables[randomNumber(sidesChoices.vegetables.length)];
        return [rice,salad,vegetables];
    }
    let sides = getSides();
    
    return (
        <div className="question-container">
            <h1 className="question-title">Eat This!</h1>
            <div className="question-choices">
                <h3>A delicious {howCooked} cooked {mainDish}</h3>
                <h3> With sides of {sides.map((item)=> item)}</h3>
            </div>
        </div>
    );
};

export default DecideDinner;
