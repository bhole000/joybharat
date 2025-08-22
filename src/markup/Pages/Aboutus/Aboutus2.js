import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';	
import CountUp from 'react-countup';
import SimpleReactLightbox,{SRLWrapper} from 'simple-react-lightbox';
import Header from './../../Layout/Header';
import Footer2 from './../../Layout/Footer2';
import PageTitle from './../../Layout/PageTitle';
import SponsorOwl from './SponsorOwl';
import {VideoPopup2} from './../../Element/VideoPopup';

import Bnr1 from './../../../images/background/bg1.jpg';
import pic1 from './../../../images/gallery/gallery-5/pic1.jpg';
import pic2 from './../../../images/gallery/gallery-5/pic2.jpg';
import pic3 from './../../../images/gallery/gallery-5/pic3.jpg';
import pic4 from './../../../images/gallery/gallery-5/pic4.jpg';

import team1 from './../../../images/team/our-team/pic1.jpg';
import team2 from './../../../images/team/our-team/pic2.jpg';
import team3 from './../../../images/team/our-team/pic3.jpg';
import team4 from './../../../images/team/our-team/pic4.jpg';

const aboutBlog = [
	{icon: <i className="ti-rocket" />, title: 'Planning', },	
	{icon: <i className="ti-pie-chart" />, title: 'Investment', },	
	{icon: <i className="ti-ruler-pencil" />, title: 'Support Completion', },	
	{icon: <i className="ti-light-bulb" />, title: 'Architect plans', },	
	{icon: <i className="ti-home" />, title: 'Office Spaces', },	
	{icon: <i className="ti-brush-alt" />, title: 'Landscapes', },	
];

const progessBlog = [
	{title: '2D Drawings', 	num: '93',  percent: '93',},	
	{title: '3D Modeling', 	num: '70', percent: '70',},	
	{title: 'Moodboard', 	num: '48', percent: '48',},	
];

const counterBlog = [
	{icon: <i className="ti-home" />, num: '3587',  title: 'Satisfied Clients',},	
	{icon: <i className="ti-user" />, num: '70',    title: 'Employees',},	
	{icon: <i className="ti-medall-alt" />, num: '685',   title: 'Cups of Coffee',},	
	{icon: <i className="ti-truck" />, num: '21930', title: 'Lines of Code',},	
];

const teamBlog= [
	{image: team1, },
	{image: team2, },
	{image: team3, },
	{image: team4, },
];

class Aboutus2 extends Component{
	componentDidMount(){
		new WOW.WOW().init();	
	}
	render(){
	
		return(
			<Fragment>
				<Header />
				<div className="page-content bg-white">
					<PageTitle motherMenu="About us 2" activeMenu="About Us 2" />
					{ /* About Us Start */ }
					<section className="content-inner">
						<div className="container">
							<div className="row">
								{aboutBlog.map((item,index)=>(
									<div className="col-lg-4 col-md-6 col-sm-6 m-b30" key={index}>
										<div className="icon-bx-wraper about-bx">
											<div className="icon-bx-sm radius bg-primary"> 
												<Link to={"#"} className="icon-cell">{item.icon}</Link> 
											</div>
											<div className="icon-content">
												<h5 className="dlab-tilte">{item.title}</h5>
												<p>I have worked with many companies offering supplemental industrial services, and out of all those companies</p>
											</div>
										</div>
									</div>
								))}	
							</div>
						</div>
					</section>
					{ /* About Us End */ }
					
					{ /* Video Section  */}
					<VideoSection />	
					{ /* Video Section  End*/}
					
					{ /* Our Gallery */}
					<div className="content-inner-2">
						<div className="container">
							<SimpleReactLightbox>
								<SRLWrapper>
									<div className="row our-gallery">
										<div className="col-lg-6 col-md-6 col-sm-6 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
											<img src={pic1} alt="" />
										</div>
										<div className="col-lg-6 col-md-6 col-sm-6 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
											<img src={pic2} alt="" />
										</div>
										<div className="col-lg-6 col-md-6 col-sm-6 m-sm-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
											<img src={pic3} alt="" />
										</div>
										<div className="col-lg-6 col-md-6 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
											<img src={pic4} alt="" />
										</div>
									</div>
								</SRLWrapper>	
							</SimpleReactLightbox>	
						</div>
					</div>
					{ /* Our Gallery  End */}
					{/*  Our Info END  */}
					<section className="content-inner">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 section-head">
									<h3 className="title">Because there is no interest</h3>
									<p>Suspendisse facilisis commodo lobortis. Nullam mollis lobortis ex vel faucibus. Proin nec viverra turpis. Nulla eget justo scelerisque, pretium purus vel, congue libero. Suspendisse potenti. Sed risus nisi  Nullam mollis lobortis ex vel faucibus.  </p>
								</div>
								<div className="col-lg-6">
									<div className="progress-section">
										{progessBlog.map((item,index)=>(	
											<div className="progress-bx" key={index}>
												<h6 className="title">{item.title}</h6>
												<div className="count-box">{item.num}%</div>
												<div className="progress">
													<div className="progress-bar" style={{width: item.percent + "%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										))}	
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*  Our Info END  */}
					
					{/*  Counters  */}
					<CounterSection />
					{/*  Counters  End */}
					
					{/* Our Team  */}
					<TeamSection />
					{/* Our Team End */}
					
					{ /* Our Partners */ }
					<SpondorSection />
					{ /* Our Partners End*/ }
				</div>
				<Footer2 />
			</Fragment>
		)
	}
}


function VideoSection(){
	return(
		<>
			<section className="video-bx overlay-black-middle" style={{backgroundImage: "url(" + Bnr1 + ")", backgroundSize: "cover"}}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center text-white">
							<div className="video-play">
								
								<VideoPopup2/>
							</div>
							<h2 className="video-title text-white">The Power to Make Anything</h2>
							<p className="video-content">Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
							<Link to={"/contact-us-1"} className="btn btn-primary radius-xl"><span className="text-black">Contact us</span></Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

function CounterSection(){
	return(
		<>
			<div className="bg-light content-inner" data-content="OUR TEAM">
				<div className="container">
					<div className="row">
						{counterBlog.map((data,index)=>(
							<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30" key={index}>
								<div className="counter-left archia-counter">
									<div className="icon-lg pull-left m-tb10">{data.icon}</div>
									<div className="clearfix m-l90">
										<div className="counter m-b5"><CountUp end={data.num} duration={4}/> </div>
										<span className="font-16 text-black">{data.title}</span> 
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

function TeamSection(){
	return(
		<>
			<section className="content-inner-2" data-content="OUR TEAM">
				<div className="container">
					<div className="section-head text-center">
						<p>Meet The Team</p>
						<h2 className="title">Our Team</h2>
					</div>
					<div className="row">
						{teamBlog.map((data,index)=>(
							<div className="col-lg-3 col-md-6 col-sm-6 m-md-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s" key={index}>
								<div className="our-team team-style1">
									<div className="dlab-media radius-sm">
										<img src={data.image} alt="" />
									</div>
									<div className="team-title-bx text-center">
										<h2 className="team-title">Philip Demarco</h2>
										<span className="clearfix">founder of agency</span>
									</div>
								</div>
							</div>
						))}	
					</div>
				</div>
			</section>
		</>
	)
}

function SpondorSection(){
	return(
		<>
			<section className="content-inner-1" data-content="SOPONSER">
				<div className="container">
					<div className="section-head text-center">
						<p>Explore Soponser</p>
						<h2 className="title">Explore Sponsor</h2>
					</div>
					<SponsorOwl />
				</div>	
			</section>	
		</>
	)
}


export { VideoSection, CounterSection ,TeamSection, SpondorSection}

export default Aboutus2;
				