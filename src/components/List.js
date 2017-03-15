import React, {Component} from 'react';
import AddList from './AddList';

class List extends Component {
	constructor(){
		super();
		this.state = {
			taches: [
				{
					id: 1,
					content: "Jouer"
				},
				{
					id:2,
					content: "Stage"
				},
				{
					id:3,
					content: "Axel"
				},
			]
		}
	}

	onSubmit = (newTache) => {
		let myNewTaches = Object.assign([], this.state.taches);
		myNewTaches.push(newTache);

		this.setState({
			taches: myNewTaches
		});
	}

	render() {
		const tacheList = this.state.taches.map(tache => {
			return <li key={ tache.id }>{ tache.content }</li>
		});

		return(
			<div>
				<AddList onSubmit={ this.onSubmit } />
				<ul>{tacheList}</ul>
			</div>
		);
	}
};

export default List;