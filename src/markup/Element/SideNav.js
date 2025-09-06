import React, { Component } from 'react';
import { Link } from "react-scroll";

class SideNav extends Component {
	render() {
		return(
			<>
				<div className="bottom-bor">
				<nav class="navigation-bar">
					<ul class="list-items">
						<span class="pointer"></span>
						<li class="item active">
							<Link
								activeClass="active" to="sidenav_home" smooth={true} offset={-70} duration={500} className="nav-link " >
								<i className="link las la-home text-white"></i>
							</Link>
						</li>
						<li class="item">
							<Link
								activeClass="active" to="sidenav_specifications" className="scroll nav-link" smooth={true} offset={-70} duration={500}>
								<i className="link las la-file-alt text-white"></i>
							</Link>
						</li>
						<li class="item">
							<Link
								activeClass="active" to="sidenav_aboutUs" className="scroll nav-link " smooth={true} offset={-70} duration={500} >
								<i className="link las la-user text-white"></i>
							</Link>
						</li>
						<li class="item">
							<Link
								activeClass="active" to="sidenav_mainGallery" className="scroll nav-link" smooth={true} offset={-70} duration={500} >
								<i className="link las la-image text-white"></i>
							</Link>
						</li>
						<li class="item">
							<Link
								activeClass="active" to="sidenav_footer" className="scroll nav-link" smooth={true} offset={-70} duration={500} >
								<i className="link las la-phone-volume text-white"></i>
							</Link>
						</li>
					</ul>
				</nav>
				</div>
				<div className = "side-bor">
				<ul className="navbar">
					<li>
						<Link
							activeClass="active"  to="sidenav_home" smooth={true} offset={-70} duration={500} className="scroll nav-link " >
							<i className="las la-home text-white"></i> <span className="text-white">Home</span>
						</Link>
					</li>
					<li>	
						<Link 
							activeClass="active" to="sidenav_specifications" className="scroll nav-link" smooth={true} offset={-70} duration={500}>
							<i className="las la-file-alt text-white"></i> <span className="text-white">specifications</span>
						</Link>
					</li>
					<li>
						<Link 
							activeClass="active" to="sidenav_aboutUs" className="scroll nav-link "  smooth={true} offset={-70} duration={500} >
							<i className="las la-user text-white"></i> <span className="text-white">ABOUT US</span>
						</Link>
					</li>
					{/* <li>
						<Link 
							activeClass="active" to="sidenav_masterPlan" className="scroll nav-link"  smooth={true} offset={-70} duration={500}  >
							<i className="las la-chart-bar text-white"></i> <span className="text-white">MASTER PLAN</span>
						</Link>
					</li> */}
					<li>
						<Link 
							activeClass="active" to="sidenav_mainGallery" className="scroll nav-link"  smooth={true} offset={-70} duration={500} >
							<i className="las la-image text-white"></i> <span className="text-white">Gallery</span>
						</Link>
					</li>
					{/* <li>
						<Link 
							activeClass="active" to="sidenav_ourServices" className="scroll nav-link"  smooth={true} offset={-70} duration={500} >
							<i className="las la-cog text-white"></i> <span className="text-white">Our products</span>
						</Link>
					</li> */}
					<li>
						<Link 
							activeClass="active" to="sidenav_newsEvent" className="scroll nav-link"  smooth={true} offset={-70} duration={500}  >
							<i className="las la-rss text-white "></i> <span className="text-white">News Event</span>
						</Link>
					</li>
					<li>
						<Link 
							activeClass="active" to="sidenav_footer" className="scroll nav-link"  smooth={true} offset={-70} duration={500} >
							<i className="las la-phone-volume text-white"></i> <span className="text-white">Contact Us</span>
						</Link>
					</li>
				</ul>
				</div>
			</>
		)
	}
}

export default SideNav;