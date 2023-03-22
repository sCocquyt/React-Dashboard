import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react';
import ReactDOM from 'react-dom';



class ShoppingListItem extends React.Component{
  render(){
    return(
      <li>
      <button className="list-class"
        onClick={() => this.props.onClick(this.props.index)}
        > &nbsp;
      </button> &nbsp;
      {this.props.name} 
      </li>
    );
  }

}

class TodoList extends React.Component {
  /* Uncomment this constructor if you feel like you need it*/
  constructor(props){
    super(props)
    this.state ={
      name: this.props.name,
      myInitialList: ["Bananas", "Oat Milk", "Coffee"],
      myInitialClicked: [false, false, false],
      itemsBoughtCounter: 0,
      pendingItem: "",
    }

    //binds the events to the Component
    // i.e. the events will be able to access 'this'
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onAddItem = this.onAddItem.bind(this);

  }
  onAddItem(event){
    //prevent default to avoid changing the enter key
    event.preventDefault();

    //make copies of the initial state
    let listUpdate = this.state.myInitialList.slice();
    let clickedUpdate = this.state.myInitialClicked.slice();
    //add new item
    listUpdate.push(this.state.pendingItem);
    clickedUpdate.push(false);

    //update the state
    this.setState({
      myInitialList: listUpdate,
      myInitialClicked: clickedUpdate,
      pendingItem: this.state.pendingItem,
    });


  }



  //Don't worry about this until the last challenge
  onKeyUp(event){
    //updates the pending item until submission
    this.setState({
      pendingItem: event.target.value,
    })
  }

  handleClick(i){
    //create slices to update
    let listUpdate = this.state.myInitialList.slice();
    let clickedUpdate = this.state.myInitialClicked.slice();

    if(!this.state.myInitialClicked[i]){
      //sudo code: for every listItem, check whether listItem is equal to the string we want to get rid of. If it is, delete it, if not, keep:
      listUpdate = listUpdate.filter((listItem) => listItem != listUpdate[i]);
      clickedUpdate.pop();
    }

    //calculating the numebr of true values
    //in clickedUpdate
    const count = clickedUpdate.filter(Boolean).length;
    this.setState({
      myInitialList: listUpdate,
      myInitialClicked: clickedUpdate,
      itemsBoughtCounter: count,
    })
  }

  renderList(){
    //create array of board rows
    const contentToReturn = [];

    for(let i = 0; i < this.state.myInitialList.length; i++){
      let item = <ShoppingListItem
                  key={i}
                  name={this.state.myInitialList[i]}
                  onClick = {(i) => this.handleClick(i)}
                  index = {i}/>
      contentToReturn.push(item);
    }
    return contentToReturn;
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
        {/* a form used for enerting things. ONLY NEEDED for later challenges.*/}
        <form className="margin-top">
          <label htmlFor="add an item">Add an item: &nbsp;</label>
          <input
            type="text"
            name="add an item"
            placeholder="item to add"
            value={this.state.pendingItem}
            onChange={this.onKeyUp}
          />
          {/*add a button to help with key press*/}
          <button onClick={this.onAddItem}> &nbsp;Submit&nbsp; </button>
        </form>
      </div>
    );
  }
}

// ReactDOM.render(
//   <ShoppingList name="David"/>,
//   document.getElementById('root')
// );

export default TodoList;
