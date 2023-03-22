import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './dashboard.css'
import React from 'react';
import ReactDOM from 'react-dom';

class HealthItem extends React.Component {
    render(){
        return(
            <div>
                {this.props.number + 1} <button className = "list-class" onClick = {() => console.log(this.props.number)}>&nbsp;</button>
            </div>
        );
    }
}

class HealthForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
            healthComponents: ["Happiness", "Energy", "Sleep"]
        }
    
    }

    renderButtons(){
        const happiness = [];
        const energy = [];
        const sleep = [];

        contentToReturn = [happiness, energy, sleep];

        for(let i = 0; i < 3; i++){
            let component = this.state.healthComponents[i];
            contentToReturn[i].push(component);
            for(let j = 0; j < 10; j++){
                if (i == 0) {
                    let item = <HealthItem key={j} number={j}/>  
                    contentToReturn[i].push(item);  
                } else if (i == 1) {
                    let item = <HealthItem key={j+10} number={j}/> 
                    contentToReturn[i].push(item);
                } else if (i == 2) {
                    let item = <HealthItem key={j+20} number={j}/> 
                    contentToReturn[i].push(item);
                }
                
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

export default HealthForm;