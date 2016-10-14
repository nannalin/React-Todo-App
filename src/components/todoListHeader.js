import React from 'react';

export default class TodoListHeader extends React.Component {
	render() {
		return(
			<thead>
				<tr>
					<th style={{ textAlign:'center', width: '80%' }}>Task</th>
					<th style={{ textAlign: 'center', width: '20%' }}>Action</th>
				</tr>
			</thead>
		);
	}
}