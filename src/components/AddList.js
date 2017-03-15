import React, { Component } from 'react';

class AddList extends Component {
	handleSubmit = (event) => {
		event.preventDefault();
		const newContentTache = this.inputTache.value;
		const newTache = {
			id: Date.now(),
			content: newContentTache
		}
		this.props.onSubmit(newTache);

		this.inputTache.value = "";
	}

	render(){
		return(
			<div>
				<form onSubmit={ this.handleSubmit }>
					<label htmlFor="tache">Nouvelle tâche</label>
					<div>
						<input
							ref={ input => this.inputTache = input }
							type="text"
							name="tache"
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