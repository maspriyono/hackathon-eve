import React, { Component } from 'react';

import './header.css';
import Avatar from '../avatar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
	constructor (props) {
		super(props);
	}

  render() {
    return (
    	<div className="row">
	    	<nav className="navbar navbar-default navbar-fixed-top">
		    	<div className="container">
			    	<div className="row header-root">
						<div className="col-md-12 col-xs-12">
							<div className="row">
								<div className="col-md-2 col-xs-3">
									<div className="avatar-container">
										<Link to='/'>
											<img src="/eve logo.png" width="60"/>
										</Link>
									</div>
								</div>
								<div className="col-md-10 col-xs-9 float-right">
									<div className="row">
										<div className="col-xs-8"></div>
										<div className="col-xs-1">
							                <div className="minimize-window">
							                	<Link className="rp-sign" to='/'>
									              	<strong>Rp</strong>
									            </Link>
											</div>
										</div>
										<div className="col-xs-1">
							                <div className="minimize-window">
							                	<Link to='/history'>
									              	<FontAwesomeIcon icon="history"/>
									            </Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			    </div>
	       	</nav>
	    </div>
    );
  }
}

export default Header;
