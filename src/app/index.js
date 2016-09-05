import React from 'react';
import ReactDOM from 'react-dom';

import InputField from './components/InputField';

var ToDo = React.createClass({
	render: function(){
		return(
			<div>
				<InputField />
			</div>
		);
	}
});

ReactDOM.render(<ToDo />, document.getElementById('todo'));