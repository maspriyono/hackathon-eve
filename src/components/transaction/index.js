import './transaction.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { truncateString } from '../../libs/stringUtils';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Transaction extends Component {
	constructor (props) {
		super(props);
		this.state = {
			tab: 0
		}
	}

	componentDidMount() {
	}

	_setTabToPembayaran = () => {
		this.setState({tab: 1});
	}

	_setTabToReview = () => {
		this.setState({tab: 2});
	}

	render() {
    return (
    	<div className="transaction-root">
    		<div className="transaction-header">
    			<div className="row">
		    		<div className="col-xs-1 arrow-left">
		    			<Link to='/'>
		    				<FontAwesomeIcon icon="arrow-left"/>
		    			</Link>
		    		</div>
		    		<div className="col-xs-6">
		    			<h4 className="text-beli">Transaksi Pembelian</h4>
		    		</div>
	    		</div>
    		</div>
    		<div className="row">
	    		<Tabs selectedIndex={this.state.tab} selectedTabClassName="tab-active">
				    <TabList className="row">
				      <Tab className="col-xs-4 tabs">Pengiriman</Tab>
				      <Tab className="col-xs-4 tabs">Pembayaran</Tab>
				      <Tab className="col-xs-4 tabs">Review</Tab>
				    </TabList>

				    <TabPanel>
				    	<div className="col-xs-12">
				      	<form className="form form-horizontal">
				      		<div className="row">
				      			<div className="col-xs-12">
					      			<label>Nama Lengkap</label>
					      			<input className="form-control" type="text" placeholder="Nama Lengkap"/>
					      		</div>
				      		</div>
				      		<div className="row">
				      			<div className="col-xs-12">
					      			<label>Email</label>
					      			<input className="form-control" type="email" placeholder="Email"/>
					      		</div>
				      		</div>
				      		<div className="row">
				      			<div className="col-xs-12">
					      			<label>Nomor Handphone</label>
					      			<input className="form-control" type="number" placeholder="Nomor HP"/>
					      		</div>
				      		</div>
				      		<div className="row">
				      			<div className="col-xs-12">
					      			<label>Alamat</label>
					      			<textarea className="form-control" placeholder="Alamat">
					      			</textarea>
					      		</div>
				      		</div>
				      		<div className="row">
				      			<div className="col-xs-12">
				      				<br/>
					      			<button className="btn btn-primary btn-lg btn-block" onClick={() => this._setTabToPembayaran()}>Selanjutnya</button>
					      		</div>
				      		</div>
				      	</form>
				      </div>
				    </TabPanel>
				    <TabPanel>
				      <div className="col-xs-12">
				      	<form className="form form-horizontal">
				      		<div className="row">
				      			<div className="col-xs-12">
				      				<div className="row payment-method-wrapper">
				      					<div className="col-xs-1">
							      			<input type="radio" name="payment"/>
							      		</div>
						      			<div className="col-xs-10">
							      			<label>COD</label>
					      					<p>Bayar di tempat</p>
							      		</div>
						      		</div>
					      		</div>
				      		</div>
				      		
				      		<div className="row">
				      			<div className="col-xs-12">
					      			<div className="row payment-method-wrapper">
				      					<div className="col-xs-1">
							      			<input type="radio" name="payment"/>
							      		</div>
						      			<div className="col-xs-10">
							      			<label>Virtual Account</label>
					      					<p>Linked bank account</p>
							      		</div>
						      		</div>
					      		</div>
				      		</div>

				      		<div className="row">
				      			<div className="col-xs-12">
					      			<div className="row payment-method-wrapper">
				      					<div className="col-xs-1">
							      			<input type="radio" name="payment"/>
							      		</div>
						      			<div className="col-xs-10">
							      			<label>Bank Transfer</label>
					      					<p>BNI, BCA, Mandiri</p>
							      		</div>
						      		</div>
					      		</div>
				      		</div>

				      		<div className="row">
				      			<div className="col-xs-12">
					      			<div className="row payment-method-wrapper">
				      					<div className="col-xs-1">
							      			<input type="radio" name="payment"/>
							      		</div>
						      			<div className="col-xs-10">
							      			<label>Kartu Kredit</label>
					      					<p>BNI, BCA, Mandiri, Bank Mega</p>
							      		</div>
						      		</div>
					      		</div>
				      		</div>

				      		<div className="row">
				      			<div className="col-xs-12">
					      			<div className="row payment-method-wrapper">
				      					<div className="col-xs-1">
							      			<input type="radio" name="payment"/>
							      		</div>
						      			<div className="col-xs-10">
							      			<label>Indomaret</label>
							      			<p>Mini market dekat Anda</p>
							      		</div>
						      		</div>
					      		</div>
				      		</div>
				      		
				      		<div className="row">
				      			<div className="col-xs-12">
				      				<br/>
					      			<button className="btn btn-primary btn-lg btn-block" onClick={() => this._setTabToReview()}>Selanjutnya</button>
					      		</div>
				      		</div>
				      	</form>
				      </div>
				    </TabPanel>
				    <TabPanel>
				      <div className="row">
					      <div className="col-xs-12">
					      	<div className="transaction-detail">
					      		<h3>No. Transaction 2018-01-01-XI-01</h3>
					      		<p>Total 2 produk</p>
					      	</div>
					      </div>
				      </div>
				    </TabPanel>
				  </Tabs>
	    	</div>
    	</div>
    );
	}
}

export default Transaction;
