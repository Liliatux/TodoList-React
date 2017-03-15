import React, {Component} from 'react';
import AddList from './AddList';
import Task from './Task';
import Filter from './Filter';

class List extends Component {
	constructor(){
		super();
		this.state = {
			tasks: [
				{
					id: 1,
					content: "Jouer",
					checked: false
				},
				{
					id:2,
					content: "Stage",
					checked: false
				},
				{
					id:3,
					content: "Axel",
					checked: false
				},
			]
		}
	}

	onSubmit = (newTask) => {
		let myNewTasks = Object.assign([], this.state.tasks);
		myNewTasks.push(newTask);

		this.setState({
			tasks: myNewTasks
		});
	}

	onChangeTask = (taskId, isChecked) => {
		const updatedTasks = this.state.tasks.map( task => {
			if(task.id === taskId) {
				task.checked = isChecked;
			}
			return task;
		});

		this.setState({
			tasks: updatedTasks
		});
	}

	render(){
		const taskList = this.state.tasks.map(task => {
			return( 
				<Task
					key={ task.id }
					task={ task }
					onChangeTask={ this.onChangeTask }
				/>
			);
		});

		return(
			<div>
				<AddList onSubmit={ this.onSubmit } />
				<Filter />
				<ul>{taskList}</ul>
			</div>
		);
	}
};

export default List;