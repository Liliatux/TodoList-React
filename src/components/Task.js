import React, { Component } from 'react';

class Task extends Component {
	handleChangetask = (event) => {
		const isChecked = event.target.checked;
		let taskId = event.target.getAttribute('data-taskId');
		taskId = parseInt(taskId, 10);
		this.props.onChangeTask(taskId, isChecked);
	}

	static propTypes = {
		task: React.PropTypes.object.isRequired,
		onChangeTask: React.PropTypes.func.isRequired
	}

	render(){
		const task = this.props.task;

		return(
			<div>
				<li 
					key={ task.id }
					className={( task.checked ? "task-done" : "task-toDo")}
				>
					<input
						type="checkbox"
						defaultChecked={ task.checked }
						onChange={ this.handleChangetask }
						data-taskId={ task.id }
					/>
					{ task.content }
				</li>
			</div>
		);
	}
}

export default Task;