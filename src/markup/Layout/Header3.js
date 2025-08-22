import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

import logo from './../../images/logo.png';

class Header3 extends Component{
	componentDidMount() {

        // sidebar open/close

        var Navicon = document.querySelector('.navicon');
        var sidebarmenu = document.querySelector('.myNavbar ');

        function toggleFunc() {
            sidebarmenu.classList.toggle('show');
            Navicon.classList.toggle('open');
        }
        Navicon.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }
		
		
        function checkLi(current) {
            navUl.forEach(el => (current !== el) ? el.classList.remove('open') : '');
            
			setTimeout(() => {
			
			current.classList.toggle('open');
			
			/* alert(current.className.indexOf('open'));
				if(current.className.indexOf('open') == -1){
					current.classList.toggle('open');
					alert(2);
				}else{
				alert(current.parentNode);
					current.parentNode.classList.add('khelesh');
				} */
				
			}, 100);
						
        }
	}
	render(){
		return(
			<Fragment>
				{/*  header  */}
				<header className="site-header">
					<HeaderContent />					
				</header>
				{/*  header End  */}
			</Fragment>
		)
	}
}
function HeaderContent(){
	return(
		<>
			{/*   main header  */}
			<div className="sticky-header main-bar-wraper navbar-expand-lg">
				<div className="main-bar clearfix ">
					<div className="container-fluid clearfix">
						{ /* website logo */ }
						<div className="logo-header mostion logo-dark">
							<Link to={"./"}><img src={logo} alt="" /></Link>
						</div>
						{/* nav toggle button  */}
						<button className="navbar-toggler collapsed navicon justify-content-end " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
							<span></span>
							<span></span>
							<span></span>
						</button>
						{/*extra nav  */}
						<div className="extra-nav">
							<div className="extra-cell">
								<Link to={"/contact-us-2"} className="btn btn-primary btnhover13">Contact Now</Link>
							</div>
						</div>
						<div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
							<div className="logo-header d-md-block d-lg-none">
								<Link to={"./"}><img src={logo} alt="" /></Link>
							</div>
							<ul className="nav navbar-nav navbar">	
								<li className="active"><Link to={"#"}>Home<i className="fa fa-chevron-down"></i></Link>
									<ul className="sub-menu">
										<li><Link to={"./"}>Home 1</Link></li>
										<li><Link to={"index-2"}>Home 2</Link></li>
										<li><Link to={"index-3"}>Landing Page</Link></li>
									</ul>
								</li>
								<li className="active"><Link to={"#"}>Pages<i className="fa fa-chevron-down"></i></Link>
									<ul className="sub-menu">
										<li><Link to={"/about-us-1"}>About Us 1</Link></li>
										<li><Link to={"/about-us-2"}>About Us 2</Link></li>
										<li><Link to={"/company-exhibition"}>Company Exhibition</Link></li>
										<li><Link to={"/price-table"}>Price Table</Link></li>
										<li><Link to={"/company-history"}>Company History</Link></li>
										<li><Link to={"/privacy-policy"}>Privacy Policy</Link></li>
										<li><Link to={"/404-page"}>404 Error</Link></li>
										<li><Link to={"/coming-soon"}>Coming Soon</Link></li>
										<li><Link to={"/subscription-box-1"}>Subscription Box 1</Link></li>
										<li><Link to={"/subscription-box-2"}>Subscription Box 2</Link></li>
									</ul>
								</li>
								<li><Link to={"#"}>Portfolio<i className="fa fa-chevron-down"></i></Link>
									<ul className="sub-menu">
										<li><Link to={"/portfolio-1"}>Portfolio 1</Link></li>
										<li><Link to={"/portfolio-2"}>Portfolio 2</Link></li>
										<li><Link to={"/project-detail-1"}>Project Detail 1</Link></li>
										<li><Link to={"/project-detail-2"}>Project Detail 2</Link></li>
										<li><Link to={"/project-detail-3"}>Project Detail 3</Link></li>
										<li><Link to={"/project-detail-4"}>Project Detail 4</Link></li>
									</ul>
								</li>
								<li><Link to={"#"}>Blog<i className="fa fa-chevron-down"></i></Link>
									<ul className="sub-menu">
										<li><Link to={"/blog-grid"}>Blog Grid</Link></li>
										<li><Link to={"/blog-list"}>Blog List</Link></li>
										<li><Link to={"/blog-masonry"}>Blog Masonry</Link></li>
										<li><Link to={"/blog-details"}>Blog Details</Link></li>
									</ul>
								</li>
								<li><Link to={"#"}>Contact Us<i className="fa fa-chevron-down"></i></Link>
									<ul className="sub-menu">
										<li><Link to={"/contact-us-1"}>Contact Us 1</Link></li>
										<li><Link to={"/contact-us-2"}>Contact Us 2</Link></li>
									</ul>
								</li>
							</ul>
							<div className="dlab-social-icon">
								<ul>
									<li><Link to={{  pathname:"https://www.facebook.com/makeandDisplay"}} className="site-button circle fa fa-facebook" target="_blank" 
                      rel="noopener noreferre"></Link></li>
									<li><Link to={{  pathname:"https://www.linkedin.com/company/make-display-interior/"}} className="site-button circle fa fa-linkedin" target="_blank" 
                      rel="noopener noreferre"></Link></li>
									<li><Link to={{  pathname:"https://www.instagram.com/makendisplay/"}} className="site-button circle fa fa-instagram" target="_blank" 
                      rel="noopener noreferre"></Link></li>
								</ul>
							</div>		
						</div>
					</div>
				</div>
			</div>
		</>
	)
} 
export {HeaderContent};
export default Header3;