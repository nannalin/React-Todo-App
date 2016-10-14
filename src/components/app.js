import React from 'react';
import TodoList from './todoList';
import CreateTodo from './createTodo';

const todo = [
	{
		task: "study",
		isCompleted: false
	},
	{
		task: "do laundry",
		isCompleted: true
	}
];
export default class App extends React.Component {
	constructor(props) {
		// inheritance
		super(props);

		this.state = {
		// with property value shorthand
		// syntax, you can omit the property
		// value if key matches variable name
		// without es6 => todo: todo
			todo
		}
	}

	render() {
		return(
			<div>
				<h1>React Todo App</h1>
				<CreateTodo todo={this.state.todo} createTask={this.createTask.bind(this)} />
				<TodoList 
					todo={this.state.todo} 
					toggleTask={this.toggleTask.bind(this)}
					saveTask={this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}
				/>
			</div>
		);
	}

	toggleTask(task) {
		const foundTodo = _.find(this.state.todo, todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({ todo: this.state.todo });
	}

	createTask(task) {
		this.state.todo.push({
			task, // same as task:task
			isCompleted: false
		});
		this.setState({ todo: this.state.todo });
	}

	saveTask(oldTask, newTask) {
		const foundTodo = _.find(this.state.todo, todo => todo.task === oldTask);
		foundTodo.task = newTask;
		this.setState({ todo: this.state.todo });
	}

	deleteTask(taskToDelete) {
		_.remove(this.state.todo, todo => todo.task === taskToDelete);
		this.setState({ todo: this.state.todo });
	}
}
