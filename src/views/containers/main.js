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
                chicken:['Fried','Boiled','Baked','BBQ'],
                fish:['Fried','Boiled','Baked','BBQ'],
                beef:['Fried','Boiled','Baked','BBQ']
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
        this.pickedChoice = this.pickedChoice.bind(this);
    }

    changeQuestionNumber(){
        this.setState({qNumber: this.state.qNumber + 1})
    }

    pickedChoice(question, selection){
        const partOfStateToChange = this.state[question];
        partOfStateToChange.picked = selection;
        this.setState({partOfStateToChange, qNumber: this.state.qNumber + 1})
        console.log('partOfStateToChange',this.state)

    }

     showQuestion(){
        if(this.state.qNumber === 0){
            return (<QuestionOne 
                handlePickChoice ={
                    (question, selection) => this.pickedChoice(question, selection)
                }/>
            );
        }
        else if(this.state.qNumber === 1){
            return (<QuestionTwo 
                handlePickChoice = {
                    (question, selection) => this.pickedChoice(question, selection) 
                }/>
            );   
        }
        else if(this.state.qNumer === 2){
            return (<QuestionThree 
                handlePickChoice = {
                    (question, selection)=> this.pickedChoice(question, selection) 
                }/>
            );
        }else{
            return (<h1>Dinner Time</h1>);
        }
     }
    render(){
        return(<div>{this.showQuestion()}</div>);
    }
}



export default Main;