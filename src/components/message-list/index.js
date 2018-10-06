import './message-list.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MessageList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			content: null
		}
	}

	_navigateMenu = (menu) => {
		if (menu.type !== 'object') {
			return false;
		}

		const menuObj = {
			3: {
				type: 'panel',
				payload: {
					data: [
						{
							title: 'Free',
							subtitle: 'Subtitle price 1',
							body: 'dsadasdas',
							footer: 'dsadasdas'
						},
						{
							title: 'Premium',
							subtitle: 'Subtitle price 1',
							body: 'dsadasdas',
							footer: 'dsadasdas'
						},
						{
							title: 'Business',
							subtitle: 'Subtitle price 1',
							body: 'dsadasdas',
							footer: 'dsadasdas'
						},
						{
							title: 'Custom',
							subtitle: 'Subtitle price 1',
							body: 'dsadasdas',
							footer: 'dsadasdas'
						}
					]
				}
			}
		}

		this.setState({content: menuObj[menu.id]});

	}

	_renderContent = () => {
		if (!this.state.content) {
			return null;
		}

		const {content} = this.state;
		let output = null;

		switch (content.type) {
			case 'panel':
				output = content.payload.data.map((panel) => (
					<div className="panel panel-primary" key={panel.title}>
						<div className="panel-heading">
							<div className="panel-title">
								<h4>{ panel.title }</h4>
							</div>
						</div>
						<div className="panel-body">
						{ panel.body }
						</div>
						<div className="panel-footer">
						{ panel.footer }
						</div>
					</div>
				));
			break;
		}

		return output;
	}

  render() {
		const welcomeMsg = (
			<div className="row message-root">
				<div className="col-xs-2">
					<div className="photo-container">
						<img src="https://randomuser.me/api/portraits/women/50.jpg" 
							className="avatar"
							alt=""
						/>	
					</div>
				</div>
				<div className="col-xs-9">
					<div className="message-container">
						<p className="sender-info">
							<strong>Nadia Pribadi</strong>
						</p>
						<p>Halo, Perkenalkan, saya Nadia. Kalau ada yang ingin ditanyakan, bisa melalui chat ini ya. Kamu bisa pilih menu berikut ini untuk mengetahui informasi lebih lanjut.</p>
					</div>
				</div>
			</div>
		);

		const menuList = [
			{
				id: '1',
				name: 'Login atau register',
				description: 'Masuk ke dalam aplikasi web',
				icon: 'sign-in-alt',
				type: 'direct-link',
				payload: 'suar-social'
			},
			{
				id: '2',
				name: 'Download',
				description: 'Download aplikasi mobile',
				icon: 'play',
				type: 'direct-link',
				payload: 'https://play.google.com/store/apps/details?id=social.suar'
			},
			{
				id: '3',
				name: 'Pricing',
				description: 'Cari tahu harga produk yang cocok untuk kamu',
				icon: 'dollar-sign',
				type: 'object',
			},
		];

		const menu = menuList.map((item) => (
			<a className="row menu-container" 
				key={item.id}
				onClick={() => this._navigateMenu(item)}
				href={item.payload ? item.payload : '#'}
				target={item.type === 'direct-link' ? '_blank' : ''}
			>
				<div className="col-xs-12">
					<div className="menu">
						<div className="row">
							<div className="col-xs-2">
								<div className="menu-icon-container">
									<FontAwesomeIcon className="menu-icon" icon={item.icon}/>
								</div>
							</div>
							<div className="col-xs-9">
								<div className="menuIcon">
									<strong>{item.name}</strong>
								</div>
								<div className="menuIcon">
									{item.description}
								</div>
							</div>
						</div>
					</div>
				</div>
			</a>
		));

		const separator = (
			<p className="separator"><span>Menu</span></p>
		);

		const chatField = (
			<div className="footer-chat">
				<input className="form-control chat-field" type="text" placeholder="Tulis pesan kamu di sini..."/>
				<button className="btn-send">
					<FontAwesomeIcon icon="paper-plane"/>
				</button>
			</div>
		);

    return (
    	<div className="message-list-root">
    		<div className="profile-header">
    			<div className="row">
		    		<div className="col-xs-1 arrow-left">
		    			<Link to='/'>
		    				<FontAwesomeIcon icon="arrow-left"/>
		    			</Link>
		    		</div>
		    		<div className="col-xs-2">
		    			<img src="https://randomuser.me/api/portraits/women/50.jpg" 
								className="avatar"
								alt=""
							/>
		    		</div>
		    		<div className="col-xs-7">
		    			<h4 className="user-name-header">Nadia Pribadi</h4>
		    		</div>
	    		</div>
    		</div>
    		<div className="col-xs-12">
	    		{ welcomeMsg }
	    		{ separator }
	    		{
	    			!this.state.content &&
	    			menu
	    		}
	    		{ this._renderContent() }
	    		{ chatField }
	    	</div>
    	</div>
    );
  }
}

export default MessageList;
