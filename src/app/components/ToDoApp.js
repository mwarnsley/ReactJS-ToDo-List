import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ToDoList from './ToDoList';
import TodoInput from './TodoInput';

class ToDoApp extends Component{
	constructor(props) {
	    super()
	    this.state = {
	    	todos: [
	    		{
	    			id: 1,
	    			text: "Clean My Room"
	    		},
	    		{
	    			id: 2,
	    			text: "Mow The Lawn"
	    		},
	    		{
	    			id: 3,
	    			text: "Laundry"
	    		}
	    	]
	    }
  	}
	render(){
		var {todos} = this.state;
		return(
			<div>
				<TodoInput />
				<ToDoList todos={todos} />
			</div>
		);
	}
}

export default ToDoApp;