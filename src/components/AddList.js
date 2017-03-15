import React, { Component } from 'react';

class AddList extends Component {
	handleSubmit = (event) => {
		event.preventDefault();
		const newContentTask = this.inputTask.value;
		const newTask = {
			id: Date.now(),
			content: newContentTask
		}
		this.props.onSubmit(newTask);

		this.inputTask.value = "";
	}

	render(){
		return(
			<div>
				<form onSubmit={ this.handleSubmit }>
					<label htmlFor="task">Nouvelle tâche</label>
					<div>
						<input
							ref={ input => this.inputTask = input }
							type="text"
							name="task"
							placeholder="Faire mes devoirs"
						/>
						<button>+</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddList;