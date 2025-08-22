import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';
import Header from './../Layout/Header';
import Footer2 from './../Layout/Footer2';
import PageTitle from './../Layout/PageTitle';

import jet from './../../images/jet.png';
import img1 from './../../images/projects/project-slide/img1.jpg';
import img2 from './../../images/projects/project-slide/img2.jpg';
import img3 from './../../images/projects/project-slide/img3.jpg';


const HistoryBox =({sessionMenu, imageBlog})=>{
	return(
		<>
			<div className="history-details">
				<div className="history-head">
					<h2>{sessionMenu}</h2>
					<h3>Online Network Connection Monitor</h3>
				</div>
				<p>Under Construction ! </p>
			</div>
			<div className="history-media">
				<img src={imageBlog} alt="" />
			</div>	
		</>	
	);
};

class CompanyHistory extends Component{
	componentDidMount(){
		new WOW.WOW().init();	
	}
	render(){
		return(
			<Fragment>
				<Header />	
				<div className="page-content bg-white">
					{/*  banner  */}
					<PageTitle motherMenu="Company History" activeMenu="Company History" />
					{/*  About Me  */}
					<section className="content-inner" data-content="HISTORY">
						<div className="container">
							<div className="row">
								<div className="col-md-12 section-head text-center">
									<div className="animation-jet">
										<img src={jet} alt="" />
									</div>
									<h4 className="title">Looking for an agency near you but not <span className="text-red">finding what you want?</span> <br/>We understand how to work with you.</h4>
									<Link to={"./company-exhibition"} className="btn btn-primary">More Information</Link>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.2s">
									<div className="history-box right">
										<HistoryBox sessionMenu="2020" imageBlog={img1} />
									</div>
								</div>
								<div className="col-md-12 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.4s">
									<div className="history-box">
										<HistoryBox sessionMenu="2018" imageBlog={img2} />
									</div>
								</div>
								<div className="col-md-12 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.6s">
									<div className="history-box right">
										<HistoryBox sessionMenu="2016" imageBlog={img3} />
									</div>
								</div>
								<div className="col-md-12 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.8s">
									<div className="history-box">
										<HistoryBox sessionMenu="2014" imageBlog={img1} />
									</div>
								</div>
							</div>
							
						</div>
					</section>
					{/*  About Me  End*/}
				</div>
				<Footer2 />	
			</Fragment>
		)
	}
}
export default CompanyHistory;
