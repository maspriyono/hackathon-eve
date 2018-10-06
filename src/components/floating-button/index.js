import './floating-button.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FloatingButton extends Component {
	constructor (props) {
		super(props);
	}

  render() {
    return (
    	<div className="floating-root" onClick={() => this.props.toggleVisibility()}>
				<FontAwesomeIcon className="floating-icon" icon="comments"/>
      </div>
    );
  }
}

export default FloatingButton;
