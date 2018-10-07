import './card-list.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { truncateString } from '../../libs/stringUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CardList extends Component {
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
		// .then((list) => {
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

			// for (var event in list.data) {

			// 	fetch('http://localhost:1337/patrakomala.disbudpar.bandung.go.id:8080/api/v1/public/event/detail-event?content_id=' + list.data[event].id, {
			// 		method: 'GET',
			// 	  headers: {
			// 	    'Accept': 'application/json',
			// 	    'Content-Type': 'application/json',
			// 	    'access-key': 'b01e7d160c1bb89350e0dff38f5363'
			// 	  },
			// 	})
			// 	.then((response) => response.json())
			// 	.then((event) => {
			// 		const newData = {
			// 			...list.data[event],
			// 			...event.data
			// 		}
			// 		data.push(newData);
					this.setState({data});
			// 	})
			// }

		// });
	}

	_pop = (params) => {
		let data = this.state.data;

		if (data.length == 1) return false;

		data.shift();

		this.setState({data});
	}

	_renderCards = () => {
		if (!this.state.data) {
			return null;
		}

		const card = this.state.data[0];

		if (!card) {
			return null;
		}

		return (
			<div>
				<div>
					<div className="card-holder" key={card.id}>
						<div className="card-profile">
							<div className="row">
								<div className="col-xs-3">
									<img className="profile-picture" src={card.images[0]}/>
								</div>
								<div className="col-xs-9">
									<h4>{card.title}</h4>
									<p>{ truncateString(card.description, 20) }</p>
								</div>
							</div>
						</div>
						<img className="img-card" src={card.images[0]}/>

						<div className="card-action">
							<div className="row">
								<div className="col-xs-2">
									<button className="action-buttons" onClick={() => this._pop('yes')}>
										<FontAwesomeIcon className="action-button" icon="heart"/>
									</button>
								</div>
								<div className="col-xs-2">
									<FontAwesomeIcon className="action-button" icon="share"/>
								</div>
								<div className="col-xs-1"></div>
								<div className="col-xs-5">
									<Link to={`/buy/` + card.id}>
										<div className="row btn-buy">
											<div className="col-xs-2">
												<p className="text-buy"><strong>Rp</strong></p>
											</div>
											<div className="col-xs-9">
												<p className="text-buy">Beli</p>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>

						<div className="card-info">
							<h3>{card.title}</h3>
							<p>{ truncateString(card.description, 40) }</p>
							<Link to='/chat'>
								<button className="btn-chat">
									<FontAwesomeIcon className="action-button" icon="comments"/>
								</button>
							</Link>
						</div>
					</div>
				</div>
				<div>
					<button className="btn-no" onClick={() => this._pop('no')}>
						<FontAwesomeIcon className="action-button" icon="times"/>
					</button>
					<button className="btn-yes" onClick={() => this._pop('yes')}>
						<FontAwesomeIcon className="action-button" icon="heart"/>
					</button>
				</div>
			</div>
		);
	}

  	render() {
	    return (
	    	<div className="card-list-root">
	    		<div className="col-xs-12">
	    			{this._renderCards()}
		    	</div>
	    	</div>
	    );
  	}
}

export default CardList;
