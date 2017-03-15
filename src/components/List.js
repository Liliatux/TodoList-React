import React, {Component} from 'react';

class List extends Component {
	constructor(){
		super();
		this.state = {
			items: [
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

	render() {
		const itemList = this.state.items.map(item => {
			return <li key={ item.id }>{ item.content }</li>
		});

		return(
			<div>
				<ul>{itemList}</ul>
			</div>
		);
	}
};

export default List;