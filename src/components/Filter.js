import React, { Component } from 'react';

class Filter extends Component {
	handleFilter = (event) => {
		const filter = event.target.getAttribute('data-filter');
		this.setState({
			filter
		});
	}

	render(){
		return(
			<div>
				<button
					data-filter="all"
					onClick={ this.handleFilter }
				>Tous</button>
				<button
					data-filter="toDo"
					onClick={ this.handleFilter }
				>Fait</button>
				<button
					data-filter="done"
					onClick={ this.handleFilter }
				>A faire</button>
			</div>
		);
	}
}

export default Filter;