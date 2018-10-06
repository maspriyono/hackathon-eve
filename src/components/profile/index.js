import './profile.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Profile extends Component {
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
				image: 'https://randomuser.me/api/portraits/lego/2.jpg',
				name: 'Wahyu',
				title: 'Title',
				description: 'description'
			},
			{
				id: 2,
				image: 'https://randomuser.me/api/portraits/lego/3.jpg',
				name: 'Rahmawati',
				title: 'Aing maung',
				description: 'description'
			},
			{
				id: 3,
				image: 'https://randomuser.me/api/portraits/lego/7.jpg',
				name: 'Dita',
				title: 'Title',
				description: 'description'
			},
			{
				id: 4,
				image: 'https://randomuser.me/api/portraits/lego/0.jpg',
				name: 'Wahyu',
				title: 'Title',
				description: 'description'
			},
			{
				id: 5,
				image: 'https://randomuser.me/api/portraits/lego/1.jpg',
				name: 'Rahmawati',
				title: 'Aing maung',
				description: 'description'
			},
			{
				id: 6,
				image: 'https://randomuser.me/api/portraits/lego/4.jpg',
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
				<div className="recommendation-wrapper" key={list.id}>
					<div className="row">
						<div className="col-xs-2">
							<img className="recommendation-image" src={list.image}/>
						</div>
						<div className="col-xs-10">
							<h4>{list.title}</h4>
							<p>{list.description}</p>
						</div>
					</div>
				</div>
			));
		}

		return null;
	}

  	render() {
	    return (
	    	<div className="profile-root">
	    		<div className="profile-header">
	    			<div className="row">
			    		<div className="col-xs-1 arrow-left">
			    			<Link to='/'>
			    				<FontAwesomeIcon icon="arrow-left"/>
			    			</Link>
			    		</div>
			    		<div className="col-xs-9">
			    			<h4 className="text-beli">Profile</h4>
			    		</div>
		    		</div>
	    		</div>
	    		<div className="profile-header">
		    		<div className="row">
			    		<div className="col-xs-2">
			    			<img className="recommendation-image" src='https://randomuser.me/api/portraits/women/26.jpg'/>
			    		</div>
			    		<div className="col-xs-10">
			    			<h4>Name</h4>
			    			<p>@uniquename</p>
			    		</div>
		    		</div>
		    		<br/>
		    		<div className="row">
			    		<div className="col-xs-12">
			    			<p><strong>Bio</strong></p>
			    			<p>dsadasdsadas</p>
			    		</div>
		    		</div>
		    		<div className="row">
			    		<div className="col-xs-12">
			    			<p><strong>Website</strong></p>
			    			<p>dsadasdsadas</p>
			    		</div>
		    		</div>
	    		</div>
	    		<div className="col-xs-12">
	    			<h4>Posts</h4>
	    			{this._renderList()}
		    	</div>
	    	</div>
	    );
  	}
}

export default Profile;
