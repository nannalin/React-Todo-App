import _ from 'lodash';
import React from 'react';
import TodoListHeader from './todoListHeader';
import TodoListItem from './todoListItem';

export default class TodoList extends React.Component {
	/** 
	arrow =>
	function(todo, index) {
		return <TodoListItem />
	}
	spread ...
	task = {todo.task}
	isCompleted = {todo.isCompleted}
	*/
	renderItems() {
		const props = _.omit(this.props, 'todo');
		
		return _.map(this.props.todo, (todo, index) => <TodoListItem key={index} {...todo} {...props} />);				
	}

	render() { 
		return (
			<table style={{ marginLeft: '26%',marginTop: '15px' }}>
				<TodoListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}