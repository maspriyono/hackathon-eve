import './buy.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { truncateString } from '../../libs/stringUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Buy extends Component {
	constructor (props) {
		super(props);
		this.state = {
			product: null
		}
	}

	componentDidMount() {
		let { productId } = this.props.match.params;

		if (productId >= 900) {
			productId = 10;
		}

		fetch('http://patrakomala.disbudpar.bandung.go.id:8080/api/v1/public/event/detail-event?content_id=' + productId, {
			method: 'GET',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		    'access-key': 'b01e7d160c1bb89350e0dff38f5363'
		  },
		})
		.then((response) => response.json())
		.then((product) => {
  		console.log('product', product.data)
			this.setState({product: product.data});
		});
	}

  	render() {
  		if (!this.state.product || this.state.product.length == 0) return null;

  		const { product } = this.state;

	    return (
	    	<div className="profile-root">
	    		<div className="profile-header">
	    			<div className="row">
			    		<div className="col-xs-1 arrow-left">
			    			<Link to='/'>
			    				<FontAwesomeIcon icon="arrow-left"/>
			    			</Link>
			    		</div>
			    		<div className="col-xs-6">
			    			<h4 className="text-beli">Beli</h4>
			    		</div>
			    		<div className="col-xs-4">
			    			<Link to='/'>
			    				<h5 className="btn-buy-again">+ Beli Lagi</h5>
			    			</Link>
			    		</div>
		    		</div>
	    		</div>
	    		<div className="profile-header">
		    		<div className="row">
			    		<div className="col-xs-2">
			    			<img className="recommendation-image" src={product.images[0]}/>
			    		</div>
			    		<div className="col-xs-10">
			    			<h4>{ product.title }</h4>
			    			<p>{ product.price || 'IDR 800.000' }</p>
			    			<p className="badge badge-success">{ product.type }</p>
			    		</div>
		    		</div>
		    		<br/>
		    		{
		    			product.type == 'event'	&&
		    			<div className="row">
				    		<div className="col-xs-12">
				    			<p><strong>Waktu</strong></p>
				    			<p>Mulai pada { product.start_date } { product.start_time }</p>
				    			<p>Berakhir pada { product.end_date } { product.end_time }</p>
				    		</div>
			    		</div>
		    		}
		    		
		    		<div className="row">
			    		<div className="col-xs-12">
			    			<p><strong>Deskripsi</strong></p>
			    			<p>{ truncateString(product.description, 120) }</p>
			    		</div>
		    		</div>
	    		</div>
    			<div className="payment-summary">
    				<table className="table table-total">
    					<tbody>
	    					<tr>
	    						<td><strong>Subtotal</strong></td>
	    						<td><strong>800.000</strong></td>
	    					</tr>
	    					<tr>
	    						<td>Ongkos kirim</td>
	    						<td>20.000</td>
	    					</tr>
	    					<tr>
	    						<td>+ Voucher</td>
	    						<td>15.000</td>
	    					</tr>
	    					<tr>
	    						<td><strong><h4>Total</h4></strong></td>
	    						<td><strong><h4>805.000</h4></strong></td>
	    					</tr>
    					</tbody>
    				</table>

    				<Link to='/transaction'>
    					<button className="btn btn-primary btn-block btn-lg">Beli</button>
    				</Link>
    			</div>
	    	</div>
	    );
  	}
}

export default Buy;
