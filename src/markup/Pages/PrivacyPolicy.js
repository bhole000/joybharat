import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer2 from './../Layout/Footer2';
import PageTitle from './../Layout/PageTitle';
import bgimg from './../../images/bg-view.png';

class PrivacyPolicy extends Component{
	
	render(){
		return(
			<Fragment>
				<Header />	
				<div className="page-content bg-white">
					{/*  banner  */}
					<PageTitle motherMenu="Privacy Policy" activeMenu="Privacy Policy" />
					<section className="content-inner-2">				
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-7 col-sm-12">
									<div className="dlab-page-text sidebar">
										<h3 className="title">The Industrial Privacy Policy was updated on 25 June 2018.</h3>
										<p className="font-18"><Link to={"#"}> Contact Us </Link></p>
										<div className="dlab-divider bg-gray-dark"></div>
										<h3 className="title">Who We Are and What This Policy Covers</h3>
										<p className="font-18"></p>
										<div className="dlab-divider bg-gray-dark"></div>
										<h3 className="title">What personal information we collect</h3>
										<ul className="list-circle primary m-a0">
											{/*<li>The Industrial Privacy Policy was updated on 25 June 2018. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </li>
											<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
											<li>Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
											<li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
		<li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>*/}
										</ul>
									</div>
								</div>
								<div className="col-lg-4 col-md-5 col-sm-12">
									<aside className="sticky-top">
										<div className="list-group mb-5">
											<Link className="list-group-item" to={"/"}><i className="fa fa-home mr-2"></i>Home</Link>
											<Link className="list-group-item" to={"/about-us-1"}><i className="fa fa-user mr-2"></i>About Us</Link>
											<Link className="list-group-item active" to={"/privacy-policy"}><i className="fa fa-lock mr-2"></i>Privacy Policy</Link>
											<Link className="list-group-item" to={"/blog-grid"}><i className="fa fa-rss mr-2"></i>Blog</Link>
											<Link className="list-group-item" to={"/contact-us-1"}><i className="fa fa-phone mr-2"></i>Contact Us</Link>
										</div>
										<ul className="contact-question">
											<li>
												<i className="fa fa-map-marker"></i>
												<h4 className="title">Address</h4>
												<p>Nabagram, Chandannagar Mankundu, Hooghly</p>
											</li>
											<li>
												<i className="fa fa-envelope-o"></i>
												<h4 className="title">Email</h4>
												<p>contact@makendisplay.in</p>
											</li>
											<li>
												<i className="fa fa-phone"></i>
												<h4 className="title">Phone</h4>
												<p>(+91)6289894799 | (+91)8420961199</p>
											</li>
											<li>
												<i className="fa fa-fax"></i>
												<h4 className="title">Fax</h4>
												<p></p>
											</li>
										</ul>
									</aside>
								</div>
							</div>
						</div>
					</section>
					<div>				
						<img src={bgimg} className="bg-view" alt=""/>
					</div>
				</div>
				<Footer2 />	
			</Fragment>
		)
	}
}
export default PrivacyPolicy;
