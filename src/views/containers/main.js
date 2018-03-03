import React, { Component } from 'react';
import './containers-style.css';
import QuestionOne from '../stateless/question-one';
import QuestionTwo from '../stateless/question-two';
import DecideDinner from '../stateless/decide-dinner';


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
        this.handleQuestionTwo = this.handleQuestionTwo.bind(this);

    }

    changeQuestionNumber(){
        this.setState({qNumber: this.state.qNumber + 1})
    }
    handleQuestionTwo(option) {
        let newHowToCook = this.state.howToCook;
        newHowToCook.picked = option;
        this.setState({ howToCook: newHowToCook, qNumber: this.state.qNumber + 1})

    }
    pickedChoice(question, selection){
        const partOfStateToChange = this.state[question];
        partOfStateToChange.picked = selection;
        this.setState({partOfStateToChange, qNumber: this.state.qNumber + 1})


    }

     showQuestion(){
        if(this.state.qNumber === 0){
            return (<QuestionOne 
                handlePickChoice ={
                    (question, selection) => this.pickedChoice(question, selection)
                }/>
            );
        }
         if(this.state.qNumber === 1){
            return (<QuestionTwo 
                handlePickChoice = {
                    (question, selection) => this.handleQuestionTwo(question, selection) 
                }/>
            );   
        }
         if(this.state.qNumber === 2){
            return (<DecideDinner food = {this.state}/>
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