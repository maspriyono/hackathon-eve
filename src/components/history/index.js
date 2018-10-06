import './history.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class History extends Component {
	constructor (props) {
		super(props);
		this.state = {
			cards: []
		}
	}

	componentDidMount() {
		const data = [
			{
				id: 1,
				image: 'https://randomuser.me/api/portraits/men/26.jpg',
				name: 'Wahyu',
				title: 'Title',
				description: 'description'
			},
			{
				id: 2,
				image: 'https://randomuser.me/api/portraits/women/34.jpg',
				name: 'Rahmawati',
				title: 'Aing maung',
				description: 'description'
			},
			{
				id: 3,
				image: 'https://randomuser.me/api/portraits/women/26.jpg',
				name: 'Dita',
				title: 'Title',
				description: 'description'
			},
			{
				id: 4,
				image: 'https://randomuser.me/api/portraits/men/26.jpg',
				name: 'Wahyu',
				title: 'Title',
				description: 'description'
			},
			{
				id: 5,
				image: 'https://randomuser.me/api/portraits/women/34.jpg',
				name: 'Rahmawati',
				title: 'Aing maung',
				description: 'description'
			},
			{
				id: 6,
				image: 'https://randomuser.me/api/portraits/women/26.jpg',
				name: 'Dita',
				title: 'Title',
				description: 'description'
			}
		];

		this.setState({data});
	}

	_renderList = () => {
		if (this.state.data) {
			return this.state.data.map((list) => (
				<div className="recommendation-wrapper">
					<div className="row">
						<div className="col-xs-2">
							<img className="recommendation-image" src={list.image}/>
						</div>
						<div className="col-xs-10">
							<h4>{list.name}</h4>
							<p>{list.title}</p>
						</div>
					</div>
				</div>
			));
		}

		return null;
	}

  	render() {
	    return (
	    	<div className="card-list-root">
	    		<div className="search-header">
		    		<div className="row">
			    		<div className="col-xs-1">
			    			<FontAwesomeIcon className="search-icon" icon="search"/>
			    		</div>
			    		<div className="col-xs-11">
			    			<input className="form-control search-field" type="text"/>
			    		</div>
		    		</div>
	    		</div>
	    		<div className="col-xs-12">
	    			<h3>Recommended</h3>
	    			{this._renderList()}
		    	</div>
	    	</div>
	    );
  	}
}

export default History;
