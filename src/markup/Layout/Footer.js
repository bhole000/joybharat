import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

import logo1 from './../../images/logo/logo1.png';
import logo2 from './../../images/logo/logo2.png';
import logo3 from './../../images/logo/logo3.png';
import logo4 from './../../images/logo/logo4.png';
import logowhite from './../../images/logo-white.png';

class Footer extends Component{
	render(){
		return(
			<Fragment>
				<footer className="site-footer" id="sidenav_footer">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-md-4 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
								<Footercol1 />
							</div>
							<div className="col-md-4 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s">
								<Footercol2 />
							</div>
							<div className="col-md-4 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.9s">
								<Footercol3 />
							</div>
						</div>
					</div>
				</div>
				{/*  footer bottom part */}
				<div className="footer-bottom">
					<Footerbottom />
				</div>
			</footer>
			</Fragment>
		)
	}
}
function Footercol1(){
	return(
		<>
			<div className="widget widget_about">
				<div className="footer-logo">
					<Link to="./"><img src={logowhite} alt=""/></Link> 
				</div>
				<p>Marble • Tiles • Sanitaryware.</p>
				<div className="dlab-social-icon">
					<ul>
						<li><Link to={{  pathname:"#"}} className="fa fa-facebook mr-1" target="_blank" rel="noopener noreferrer" ></Link></li>
						<li><Link to={{  pathname:"#"}} className="fa fa-linkedin mr-1" target="_blank" rel="noopener noreferrer"  ></Link></li>
						<li><Link to={{  pathname:"#"}} className="fa fa-instagram" target="_blank" rel="noopener noreferrer" ></Link></li>
					</ul>
				</div>
			</div>
		</>
	)
} 

function Footercol2(){
	return(
		<>
			<div className="widget">
				<h5 className="footer-title">Contact Us</h5>
				<ul className="contact-info-bx">
					<li><i className="las la-map-marker"></i>Gopinagar More Haripal, Hooghly</li>
					<li><i className="las la-phone-volume"></i>(+91)9830266108 / (+91)9330275831</li>
					{/* <li><i className="las la-phone-square-alt"></i><strong>Board line :-</strong> 0123-4567890</li> */}
				</ul>
			</div>
		</>
	)
} 

function Footercol3(){
	return(
		<>
			{/* <div className="widget widget-logo">
			   <h5 className="footer-title">Our Business Channels</h5>
			   <ul>
					<li><Link to={"#"}><img src={logo1} alt=""/></Link></li>
					<li><Link to={"#"}><img src={logo2} alt=""/></Link></li>
					<li><Link to={"#"}><img src={logo3} alt=""/></Link></li>
					<li><Link to={"#"}><img src={logo4} alt=""/></Link></li>
			   </ul>
			</div> */}
		</>
	)
} 

function Footerbottom(){
	return(	
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-sm-12 text-md-left text-center"> <span>© 2025 Joy Bharat Agencies. All Right Reserved Power by Creatornet</span> </div>
					<div className="col-md-6 col-sm-12 text-md-right text-center"> 
						<div className="widget-link "> 
							<ul>
								<li><Link to={"/about-us-1"}> About</Link></li>
								<li><Link to={"/contact-us-1"}> Contact Us</Link></li>
								<li><Link to={"/privacy-policy"}> Privacy Policy</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)	
}

export {Footercol1, Footercol2, Footercol3 , Footerbottom }; 
export default Footer;