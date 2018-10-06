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

		const data = [
			{"status":200,"message":"FoundData","errors":[],"data":{"id":10,"title":"Design Action Bandung","images":["http:\/\/patrakomala.disbudpar.bandung.go.id:8080\/uploads\/event_news\/1530124816.jpg"],"type":"event","take_place":"Pendopo Kota Bandung","description":"<p>Design Action Bandung, or DesignAction.Bandung, the city of Bandung&rsquo;s annual workshop-conference on design thinking to find innovative solutions for urban issues, was held for the fourth time on 21-22 November 2017 at Pendopo Kota Bandung, a historic building located right across the Bandung&rsquo;s Alun-Alun. Fully sponsored by Bandung City Department of Culture and Tourism (Disbudpar Kota Bandung) in collaboration with BEKRAF, Ekraf.bdg, and Bandung Creative City Forum, the theme for Design Action Bandung this year is SERENDICITY.<\/p>\r\n\r\n<p>In Design Action Bandung 2017, more than 250 people take part in activities that include Design Thinking Crash Course, Ideation, and Prototyping, with guidance from internationally-known figures in the creative field that include Dr. Dwinita Larasati, Dr. Dwi Purnomo, Adi Panuntun, Claire Dufour from Creative Dundee, Lynn-Sayers McHattie, Ph.D from Glasgow School of Art, and Katelijn Verstraete from British Council.<\/p>\r\n\r\n<p>Design Action Bandung 2017&rsquo;s theme, SERENDICITY, is a portmanteau of the words *serendipity* and *city*, conveying an image of the city of Bandung being a place where its talented citizens synergize with supporting parties and facilities as an effort to nurture creative growth. As a city that has long been known as a city of creative talents, Bandung has borne witness to independent talents in a wide range of creative sectors, from fashion to music, culinary experience to design, digital creatives to media arts, and more. These talents spawn a palette of colorful subcultures that gives Bandung its unique mix of local characteristics for which the city is known. Supporting these subcultures is key to create solutions and improvements for Bandung&rsquo;s communities and society.<\/p>\r\n\r\n<p>Design Action Bandung is an initiative of Bandung Creative City Forum (BCCF) held for the first time in 2013. Real-life implementations of Design Action Bandung include improved city buses, improved zebra cross, the free school bus program, the &ldquo;Bandros&rdquo; tourist buses, bike sharing system, and more, which can be enjoyed by both citizens and tourists alike.<\/p>","start_date":"2017-11-21","end_date":null,"start_time":"18:40:16","end_time":null,"tags":[{"id":6,"name":"DA.bdg","slug":"dabdg"},{"id":7,"name":"Design Action Bandung 2017","slug":"design-action-bandung-2017"}],"urls":[]}},
			{"status":200,"message":"FoundData","errors":[],"data":{"id":39,"title":"Bandung Broadway 2018","images":["http:\/\/patrakomala.disbudpar.bandung.go.id:8080\/uploads\/event_news\/1538368114.jpeg","http:\/\/patrakomala.disbudpar.bandung.go.id:8080\/uploads\/event_news\/1538368153.jpeg"],"type":"event","take_place":"Gedung De Majestic Jl. Braga Pendek Bandung","description":"<p>Bandung Broadway 2018 adalah cities movement melalui seni pertunjukan yang didedikasikan bagi penggiat dan pecinta fashion di Kota Bandung.<\/p>\r\n\r\n<p>Bandung Broadway diharapkan dapat merevitalisasi de Majestic &ndash; Braga melalui pendekatan kepariwisataan dan ekonomi kreatif.<\/p>\r\n\r\n<p>Bandung Broadway 2018 adalah program pemerintah dalam usaha pengembangan distrik wisata di Kelurahan Braga, di bawah Dinas Kebudayaan dan Pariwisata Kota Bandung.<\/p>\r\n\r\n<p>Event ini akan diselenggarakan pada tanggal 22 s.d 28 September 2018 di Gedung De Majestic Jl. Braga Pendek&nbsp; Bandung.<\/p>\r\n\r\n<p>Mau ikutan fenomenal dan jadi saksi meriahnya event ini klik Bandungroadway.com atau kamu akan menyesal seumur hidup.<br \/>\r\nBales pesan ini untuk dapetin tiket GRATISNYA!!!<\/p>\r\n\r\n<p>RSVP<br \/>\r\nTritone 0821 3050 2070<\/p>\r\n\r\n<p>Jangan tunda lagi karena tiket GRATISSSSnya terbatas... sampai ketemu di event paling fenomenal tahun ini.<\/p>","start_date":"2018-09-22","end_date":"2018-09-28","start_time":"12:30:00","end_time":"10:30:00","tags":[{"id":15,"name":"bandungjuara","slug":"bandungjuara"},{"id":16,"name":"bandungbroadway","slug":"bandungbroadway"},{"id":17,"name":"bandungbroadway2018","slug":"bandungbroadway2018"},{"id":18,"name":"stunningbandung","slug":"stunningbandung"},{"id":19,"name":"bandungfashion","slug":"bandungfashion"},{"id":20,"name":"bandungcreativecity","slug":"bandungcreativecity"}],"urls":[]}},
			{"status":200,"message":"FoundData","errors":[],"data":{"id":9,"title":"BCH Festival","images":["http:\/\/patrakomala.disbudpar.bandung.go.id:8080\/uploads\/event_news\/1530124404.jpg"],"type":"event","take_place":"Bandung Creative Hub","description":"<p>Bandung Creative Hub became the meeting point for Bandung City Department of Culture and Tourism (Disbudpar Kota Bandung) and KEKKB (Bandung City Creative Economy Committee) with the city&rsquo;s flourishing creative communities to discuss BCH Fest in Wednesday, December 13, 2017. BCH Fest is set to start from 28 to 31 December 2017.<\/p>\r\n\r\n<p>Led by Tris Avianti, head of Bidang Ekonomi Kreatif Disbudpar Kota Bandung, along with Bandung City Creative Economy Committee (KEKKB), The brainstorming session involved more than 10 communities from all across Bandung, from music, film, and video games to performance art and fine art.<\/p>\r\n\r\n<p>BCH Fest is a four-day event in which creative communities from all across Bandung performance art stage as well as fine art exhibition. BCH Fest, which is scheduled be opened by Bandung city mayor Ridwan Kamil, will be the grand launching event for Bandung Creative Hub, therefore officially opening its doors to creative communities from all across bandung to gather, meet up, and discuss ideas. In addition to launching Bandung Creative Hub, BCH Fest is set to also launch 3 government buildings, Museum Sejarah, Pasir Kunci, and Rumah Budaya. Bandung city mayor Ridwan Kamil is also scheduled to attend the event.<\/p>\r\n\r\n<p>Bandung Creative Hub is one of the efforts of Bandung City Department of Culture and Tourism (Disbudpar Kota Bandung) to facilitate and integrate communities from the sixteen creative economy subsectors, which hopefully lead to an increase in tourism. &ldquo;Bandung&rsquo;s creative communities have immense potential to attract tourists,&rdquo; Tris Avianti head of Bidang Ekonomi Kreatif Disbudpar Kota Bandung remarked.<\/p>\r\n\r\n<p>Bandung Creative Hub is an iconic, six-story building located in Jalan Laswi No. 5, Kota Bandung, West Java. Eye-catching from the outside with its unique, extruding exterior, Bandung Creative Hub exhibits more than 20 rooms and spaces, which consists of community gathering spaces, fashion and art galleries; dance, drama, and music studios; interactive classrooms; creative library; a large cinematic theater to hold up to 100 people; and an amphitheater equipped with two big screens.<\/p>","start_date":"2017-12-28","end_date":null,"start_time":"18:33:24","end_time":null,"tags":[{"id":3,"name":"BCH Fest","slug":"bch-fest"},{"id":4,"name":"Bandung Creative Hub","slug":"bandung-creative-hub"},{"id":5,"name":"EKRAF","slug":"ekraf"}],"urls":[]}},
			{"status":200,"message":"FoundData","errors":[],"data":{"id":8,"title":"Bandung Design Biennale 2017","images":["http:\/\/patrakomala.disbudpar.bandung.go.id:8080\/uploads\/event_news\/1530124241.png"],"type":"event","take_place":"Jalan Gudang Selatan 22","description":"<p>Bandung City Department of Culture and Tourism (Disbudpar Kota Bandung) is proud to sponsor the first ever design industry event in Bandung, Bandung Design Biennale (BDB) 2017. Held in Jalan Gudang Selatan 22 on November 23-27, 2017, BDB 2017 offered a week-long series of events on design that consisted of a total of more than 30 design exhibitions and installations, public shows and performances, conferences as well as bazaars that design practitioners and enthusiasts from all range of industries can attend and participate in.<\/p>\r\n\r\n<p>A collaboration between Disbudpar Kota Bandung with Forum Design Bandung (FDB) and House the House Experience (HTH XP), Bandung Design Biennale is an initiative conceived from a fundamental idea of maximizing the potential power of design and implementing it to solve real-life urban issues. Responding positively to the focus in design, Tris Avianti, Head of Creative Economy Division of Bandung City Department of Culture and Tourism remarks, &ldquo;As one of the 16 subsectors in Bandung creative economy, design plays an important part as it can help to form a strong foundation of ideas for the rest of the subsectors.&rdquo;<\/p>\r\n\r\n<p>The target audience of BDB is all parties related to the design, which involves policy-makers and stakeholders to design industry practitioners and enthusiasts. BDB is expected to become the catalyst for the growth of economy, science, environment, and culture in a global context in the next 30 years.<\/p>\r\n\r\n<p>As the proud host of BDB 2017, the city of Bandung is one of Indonesia&rsquo;s central creative industry drivers. Bandung is also proud to have been honored the membership in UNESCO Creative Cities Network (UCCN) as the Creative City of Design in 2015, the second of its kind following Pekalongan which was crowned City of Craft and Folk Art in 2014. These distinguished awards makes Bandung the design enthusiasts&rsquo; haven, and therefore, the perfect home for BDB 2017.<\/p>","start_date":"2017-11-23","end_date":null,"start_time":"18:30:41","end_time":null,"tags":[{"id":1,"name":"Bandung Design Biennale","slug":"bandung-design-biennale"},{"id":2,"name":"BDB 2017","slug":"bdb-2017"}],"urls":[]}}
		];

		const product = data.filter((product) => product.data.id == productId);

		// fetch('http://localhost:1337/patrakomala.disbudpar.bandung.go.id:8080/api/v1/public/event/detail-event?content_id=' + productId, {
		// 	method: 'GET',
		//   headers: {
		//     'Accept': 'application/json',
		//     'Content-Type': 'application/json',
		//     'access-key': 'b01e7d160c1bb89350e0dff38f5363'
		//   },
		// })
		// .then((response) => response.json())
		// .then((product) => {
  		console.log('product', product)
			this.setState({product: product[0].data});
		// });
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
