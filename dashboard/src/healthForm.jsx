import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';

class HealthButton extends React.Component {
    render(){
        return(
            <div>
                {this.props.number + 1} <button 
                    className = {this.props.class}
                    // "list-class"
                    onClick = {() => this.props.onClick(this.props.number)}
                    >&nbsp;</button>
            </div>
        );
    }
}

class HealthComponent extends React.Component {
    handleClick(i){
        this.props.onPressed(i, this.props.component)

    }
    
    renderButtons(){
        const contentToReturn = [];

        let component = this.props.component;
        contentToReturn.push(component);

        for(let j = 0; j < 10; j++){
            if (this.props.class1[j] === 1){
                let item = <HealthButton 
                key={j} 
                number={j} 
                component={this.props.component} 
                onClick={(i) => this.handleClick(i)}
                class={"clicked"}/> 
                contentToReturn.push(item); 
            
            } else {
                let item = <HealthButton 
                key={j} 
                number={j} 
                component={this.props.component} 
                onClick={(i) => this.handleClick(i)}
                class={"unclicked"}/>  
                contentToReturn.push(item);
            }
              
            
        }

        return contentToReturn;
    }

    render(){
        return (
            <div>
                {this.renderButtons()}
            </div>
            
        )
    }
}

class HealthForm extends React.Component{
    constructor(props){
        super(props)
        this.submitClicked = this.submitClicked.bind(this);
        this.state = {
            name: this.props.name,
            healthComponents: ["Happiness", "Energy", "Sleep"],
            componentsState: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
            happinessState: [],
            energyState: [],
            sleepState: [],
            dateState: [],                                                               
        }
    }

    handleClick(j, k){
        console.log("clicked!")

        let listToUpdate = this.state.componentsState;

        listToUpdate[this.state.healthComponents.indexOf(k)][j] = 1;

        this.setState({componentsState: listToUpdate})

        console.log(this.state.componentsState)
    }

    renderComponents(){
        const contentToReturn = [];

        for(let i = 0; i < 3; i++){
            let component = <div className="components1">
                <HealthComponent  
                class1={this.state.componentsState[i]}
                key={i} 
                component={this.state.healthComponents[i]} 
                onPressed={(j, k) => this.handleClick(j, k)}/>
                </div>  
            contentToReturn.push(component);  
        }

        return contentToReturn;
    }

    submitClicked(){ 

        this.setState({dateState: [...this.state.dateState, new Date().toLocaleString()]})

        let textToDisplay = [];

        for (let i=0; i<3; i++){
            if (this.state.componentsState[i].indexOf(1) === -1) {
                textToDisplay.push(this.state.healthComponents[i] + ": " + "");
            } else {
                textToDisplay.push(this.state.healthComponents[i] + ": " + parseInt(+this.state.componentsState[i].indexOf(1)+1));
                if (i===0){
                    this.setState({happinessState: [...this.state.happinessState, this.state.componentsState[i].indexOf(1)+1]})
                } else if (i===1){
                    this.setState({energyState: [...this.state.energyState, this.state.componentsState[i].indexOf(1)+1]})
                } else if (i===2){
                    this.setState({sleepState: [...this.state.sleepState, this.state.componentsState[i].indexOf(1)+1]})
                }
            }
        }

        this.setState({componentsState: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]})

        console.log(this.state.happinessState.length)
    }

    render(){
        console.log(this.state.happinessState.length)
        let renderList = []
        if (this.state.happinessState.length==0){
            renderList.push(<div>No data to display yet!</div>)

        } else {
            for (let i = this.state.happinessState.length-1; i > -1; i-=1){
                renderList.push(<div className = "display-components">
                    <div>{this.state.dateState[i]}</div>
                    <div>Happiness: {this.state.happinessState[i]}</div>
                    <div>Energy: {this.state.energyState[i]}</div>
                    <div>Sleep: {this.state.sleepState[i]}</div>
                    </div>)
            }
        }
        return (
            <div className = "health-container">
                <div className = "border-container">
                    <div className = "survey-container">
                        {this.renderComponents()}
                    </div>
                    <button className = "submit-button" onClick={this.submitClicked}>
                        &nbsp;Submit&nbsp;
                    </button>
                </div>
                
                <div className = "display-container">
                    Health Log
                    {renderList}
                </div>
            </div>
        )
    }   
}

export default HealthForm;