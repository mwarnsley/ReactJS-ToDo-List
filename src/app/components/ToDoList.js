import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo';

class ToDoList extends Component{
	render(){
		var {todos} = this.props;
		var renderTodos = () => {
			return todos.map((todo) => {
					return(
						<Todo key={todo.id} {...todo} />
					); 
				});
		}
		return(
			<div>
				{renderTodos()}
			</div>
		);
	}
}

export default ToDoList;