import './footer.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render() {
    return (
      <div className="footer-root">
      	<div className="container footer-border">
	      	<div className="row text-center">
	      		<div className="col-xs-4">
	      			<Link to='/'>
		      			<button className="send-btn">
				      		<FontAwesomeIcon icon="home"/>
				      	</button>
			      	</Link>
		      	</div>
	      		<div className="col-xs-4">
	      			<Link to='/search'>
		      			<button className="send-btn">
				      		<FontAwesomeIcon icon="search"/>
				      	</button>
			      	</Link>
		      	</div>
	      		<div className="col-xs-4">
		      		<Link to='/profile'>
				      	<button className="send-btn">
				      		<FontAwesomeIcon icon="user"/>
				      	</button>
			      	</Link>
		      	</div>
		      </div>
	      </div>
      </div>
    );
  }
}

export default Footer;
