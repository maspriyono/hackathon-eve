import React, { Component } from 'react';
import CardList from '../card-list';
import './container.css';

class Container extends Component {
	constructor (props) {
		super(props);
	}

  render() {
    return (
    	<div className="container-root">
	    	<div className="row white-container">
	       	<CardList/>
	      </div>
      </div>
    );
  }
}

export default Container;
