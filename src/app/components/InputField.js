import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddButton from './AddButton'

class InputField extends Component{
	render(){
		return(
			<div>
				<input type="text" placeholder="Enter Your ToDo Item" />
				<AddButton />
			</div>
		);
	}
}

export default InputField;