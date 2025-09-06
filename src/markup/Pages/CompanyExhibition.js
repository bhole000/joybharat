import React,{ Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';
import Header from './../Layout/Header';
import Footer2 from './../Layout/Footer2';
import PageTitle from './../Layout/PageTitle';
import ExhibitionSlider1 from './../Element/ExhibitionSlider1';
import ExhibitionSlider2 from './../Element/ExhibitionSlider2';

//images/

class CompanyExhibition extends Component{
	componentDidMount(){
		new WOW.WOW().init();	
	}
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content bg-white">
					<PageTitle motherMenu="Company Exhibition" activeMenu="Company Exhibition" />
					{/*  Inner Page Banner */}
					<section className="content-inner exhibition-bx" data-content="JBA">
						<ExhibitionSection />
					</section>
					{/* <div className="section-full">
						<ExhibitionSlider2 />
					</div> */}
				</div>
				<Footer2 />
			</Fragment>
		)	
	}
}

function ExhibitionSection(){
	return(
		<>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 ">
						<ExhibitionSlider1 />
					</div>
					<div className="col-lg-6 m-b30">
						<div className="section-head">
							<h2 className="title">Discover the Art of Marble</h2>
							<p>
							✔️ Wide Variety – Marble, granite, tiles, and sanitary items in one destination.
✔️ Premium Quality – Direct from quarries and trusted global suppliers.
✔️ Design Inspiration – Ready-to-implement modern and classic concepts.
✔️ Customization – Tailored solutions for residential, commercial, and luxury projects.

Upcoming Exhibitions & Events

We frequently host exclusive product launches, designer meets, and live demos to keep our customers updated with the latest trends in interiors and architecture. Stay tuned for our next grand exhibition — where luxury meets craftsmanship.
							</p>
						</div>
						<Link to={"/contact-us-2"} className="btn btn-primary m-r10 m-b10">Contact us</Link>
						<Link to={"/portfolio-2"} className="btn btn-primary m-b10">View Portfolio</Link>
					</div>
				</div>
			</div>
		</>
	)
}
export {ExhibitionSection};

export default CompanyExhibition;