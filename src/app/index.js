import React from 'react';
import ReactDOM from 'react-dom';

import ToDoApp from './components/ToDoApp';

var ToDo = React.createClass({
	render: function(){
		return(
			<div>
				<ToDoApp />
			</div>
		);
	}
});

ReactDOM.render(<ToDo />, document.getElementById('todo'));