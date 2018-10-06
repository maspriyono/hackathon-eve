import './search.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { truncateString } from '../../libs/stringUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Search extends Component {
	constructor (props) {
		super(props);
		this.state = {
			cards: []
		}
	}

	componentDidMount() {

		// fetch('http://localhost:1337/patrakomala.disbudpar.bandung.go.id:8080/api/v1/public/event/list-event', {
		//   method: 'POST',
		//   headers: {
		//     'Accept': 'application/json',
		//     'Content-Type': 'application/json',
		//     'access-key': 'b01e7d160c1bb89350e0dff38f5363'
		//   },
		//   body: JSON.stringify({
		//     event: 'past',
		//     page: '1',
		//   })
		// })
		// .then(response => response.json())
		// .then((data) => {
		// 	this.setState({data: data.data});
		// });

		var data = [
				{
					id: 900,
					images: ["https://media-cdn.tripadvisor.com/media/photo-s/0b/8b/4f/25/bandung-bandros-city.jpg"],
					title: "Bandros",
					type: "event",
					description: "Berkeliling Bandung dengan Double Decker khas Bandung"
				},
				{
					id: 901,
					images: ["http://www.infobdg.com/v2/wp-content/uploads/2017/09/surabi_radja-@surabi_radja.jpg"],
					title: "Surabi Cihapit",
					type: "event",
					description: "Surabi terkenal di Bandung"
				},
				{
					"id":39,
					"title":"Bandung Broadway 2018",
					"images":["http:\/\/patrakomala.disbudpar.bandung.go.id:8080\/uploads\/event_news\/1538368114.jpeg"],
					"type":"event"
				},
				{
					"id":10,
					"title":"Design Action Bandung",
					"images":["http:\/\/patrakomala.disbudpar.bandung.go.id:8080\/uploads\/event_news\/1530124816.jpg"],
					"type":"event"
				},
				{
					"id":9,
					"title":"BCH Festival",
					"images":["http:\/\/patrakomala.disbudpar.bandung.go.id:8080\/uploads\/event_news\/1530124404.jpg"],
					"type":"event"
				},
				{
					"id":8,
					"title":"Bandung Design Biennale 2017",
					"images":["http:\/\/patrakomala.disbudpar.bandung.go.id:8080\/uploads\/event_news\/1530124241.png"],
					"type":"event"
				}
			];

			this.setState({data})

	}

	_renderList = () => {
		if (this.state.data) {
			return this.state.data.map((list) => (
				<Link to={`/buy/` + list.id} key={list.id}>
					<div className="recommendation-wrapper" key={list.id}>
						<div className="row">
							<div className="col-xs-2">
								<img className="recommendation-image" src={list.images[0]}/>
							</div>
							<div className="col-xs-10">
								<h4>{list.title}</h4>
								<p className="badge badge-default">{list.type}</p>
							</div>
						</div>
					</div>
				</Link>
			));
		}

		return null;
	}

  	render() {
	    return (
	    	<div className="card-list-root">
	    		<div className="search-header">
		    		<div className="row">
		    			<FontAwesomeIcon className="search-icon" icon="search"/>
		    			<input className="form-control search-field" type="text"/>
		    		</div>
	    		</div>
	    		<div className="col-xs-12">
	    			<br/>
	    			<h3 className="text-recommended">Recommended</h3>
	    			{this._renderList()}
		    	</div>
	    	</div>
	    );
  	}
}

export default Search;
