import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoInput extends Component{
	constructor(){
		super();
		this.onSave.bind(this);
	}
	onSave(){
		alert("THIS IS WORKING");

	}
	render(){
		return(
			<div>
				<input type="text" placeholder="What Do You Need To Do?" />
				<input type="submit" value="SAVE" onClick={this.onSave} />
			</div>
		);
	}
}

export default TodoInput;