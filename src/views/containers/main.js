import React, { Component } from 'react';
import './containers-style.css';
import QuestionOne from '../stateless/question-one';
import QuestionTwo from '../stateless/question-two';
import QuestionThree from '../stateless/question-three';

class Main extends Component {
    constructor(){
        super();
        this.state = {
            mainCourse: {
                picked:'',
                choices:['Chicken','Fish','Beef','Pizza']
            },
            howToCook: {
                picked:'',
                chicken:['Frid','Boiled','Baked','BBQ'],
                fish:['Frid','Boiled','Baked','BBQ'],
                beef:['Frid','Boiled','Baked','BBQ']
            },
            sides: {
                picked:'',
                rice: ['Fried Rice','Cheese and Broccoli','Soy Rice','Chicken Flavored','Plain Rice'],
                vegetables: ['Carrots','Mixed Vegetables','Peas','Broccoli','Mushrooms','Onions'],
                potatoes: ['French Fries','Baked','Rosted','Salad','Mash'],
                salad: ['Fruit','Marshmellow','Regular']
            },
            qNumber: 0
        };
        this.showQuestion = this.showQuestion.bind(this);
        this.changeQuestionNumber = this.changeQuestionNumber.bind(this);
    }

    changeQuestionNumber(){
        this.setState({qNumger: this.state.qNumber + 1})
    }

     showQuestion(){
        if(this.state.qNumber === 0){
            return (<QuestionOne/>);
        }
        else if(this.state.qNumber === 1){
            return (<QuestionTwo/>);   
        }
        else if(this.state.qNumer === 2){
            return (<QuestionThree/>);
        }else{
            return (<h1>Dinner Time</h1>);
        }
     }
    render(){
        return(<div>{this.showQuestion()}</div>);
    }
}



export default Main;