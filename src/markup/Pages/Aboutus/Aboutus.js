import React,{Fragment, Component} from 'react';
import Header from './../../Layout/Header';
import Footer2 from './../../Layout/Footer2';
import PageTitle from './../../Layout/PageTitle';
import Mapview from './../../Element/Mapview';
import EventSection from '../Homepage/EventSection';
import SwiperSlider from './SwiperSlider';


//Images 
import  bnr1 from './../../../images/amenities/bg/pic1.jpg';
import  bnr2 from './../../../images/amenities/bg/pic2.jpg';
import  bnr3 from './../../../images/amenities/bg/pic3.jpg';

const backgrounBlog = [
	{image: bnr1 , title: 'Dive in To The Aquamarine waters of our swanky Swimming pool', },	
	{image: bnr2 , title: 'Temple', },	
	{image: bnr3 , title: 'Squash Court', },	
];

class Aboutus extends Component{
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content bg-white">
					<PageTitle motherMenu="About us" activeMenu="About Us" />
					{/* Section-1 End */ }
					<section className="content-inner-1" data-content="ABOUT US">				
						<div className="container">
							<div className="section-head text-center">
								<h2 className="title">25+ Years Of Experience</h2>
								<p>Surround yourself with fresh energy, high-tech amenities, and elevated style. Indulge in extraordinary amenities, relax in appealing social spaces, and cultivate your ideal life. We're the fresh look in this historic district - a vibrant new community for movers and shakers.</p>
							</div>
							{/*<div className="row">
							<div className="col-md-4 col-lg-2 col-6 mb-4">
									<div className="aminite-icon-bx"><i className="flaticon-drama"></i><h4 className="title">Activity Room</h4></div>
								</div>
								<div className="col-md-4 col-lg-2 col-6 mb-4 mt-lg-3 mt-0">
									<div className="aminite-icon-bx"><i className="flaticon-cinema"></i><h4 className="title">mini Theater</h4></div>
								</div>
								<div className="col-md-4 col-lg-2 col-6 mb-4 mt-lg-5 mt-0">
									<div className="aminite-icon-bx"><i className="flaticon-stationary-bike"></i><h4 className="title">Fitnesh Gym </h4></div>
								</div>
								<div className="col-md-4 col-lg-2 col-6 mb-4 mt-lg-5 mt-0">
									<div className="aminite-icon-bx"><i className="flaticon-round-table"></i><h4 className="title">Multipurpose Hall</h4></div>
								</div>
								<div className="col-md-4 col-lg-2 col-6 mb-4 mt-lg-3 mt-0">
									<div className="aminite-icon-bx"><i className="flaticon-gamepad"></i><h4 className="title">Games Room</h4></div>
								</div>
								<div className="col-md-4 col-lg-2 col-6 mb-4">
									<div className="aminite-icon-bx"><i className="flaticon-reading-book"></i><h4 className="title">library</h4></div>
								</div>
							</div>*/}
						</div>
					</section>	
					{/* Section-1 End */ }
					{/* Section-2 Start */ }
					{/*<Mapview />*/}	
					{/* Section-2 End */ }
					{/* Section-3 Start */ }
					{/*<section className="content-inner-1" data-content="MASTER PLAN" id="masterPlan">				
						<div className="container">
							<div className="section-head text-center">
								<h2 className="title">Site Plan & Master Plan</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>With premium finishes and wide-open spaces, each floor plan brings you unparalleled luxury without sacrificing on comfort. Floor plans are artist’s rendering. All dimensions are approximate.</p>
							</div>
						</div>
						<SwiperSlider />
						
						
					</section>*/}	
					{/* Section-3 End */ }
					{/* Section-4 Strat */ }
					<section>	
						{backgrounBlog.map((data,index)=>(
							<div className="aminite-overlay parallax" style={{backgroundImage:"url(" + data.image + ")" }} key={index}>
								<div className="aminite-over-area">
									<div className="overlay-box">
										<h2 className="title">{data.title}</h2>
										<p>Swim in the sparking blue water or simply chill out at the pool side. Take a relaxing dip or a few laps in the swimming pool and let the calming water soothe your body and soul</p>
									</div>
								</div>
							</div>
						))}	
					</section>	
					{/* Section-4 Strat */ }
					{/* Section-5 Strat */ }
					<section className="content-inner-2" data-content="NEWS & EVENT" id="newsEvent">
						<EventSection />
					</section>	
					{/* Section-5 Strat End*/ }
				</div>
				<Footer2 />
			</Fragment>
		)
	}
}

export default Aboutus;