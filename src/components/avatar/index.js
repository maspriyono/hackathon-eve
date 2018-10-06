import React, { Component } from 'react';
import './avatar.css';

class Avatar extends Component {
  render() {
    return (
    	<img 
    		src="https://randomuser.me/api/portraits/women/50.jpg" 
    		className="avatar"
    		alt=""
    	/>
    );
  }
}

export default Avatar;
