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
					<section className="content-inner exhibition-bx" data-content="EXHIBITION">
						<ExhibitionSection />
					</section>
					<div className="section-full">
						<ExhibitionSlider2 />
					</div>
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
							<h2 className="title">Mission Is Design & Develop The Best Interior </h2>
							<p>
								Make & Design  is an interior design and architecture company in Kolkata. An interior designer in Kolkata you can hire if you’re looking for the best in class interior decoration in Kolkata. Our teams for furniture, false ceiling, flooring, paint & polish, electrical and plumbing work are highly skilled with a minimum of 4-5 years of experience. It makes the entire process seamless and our team, the best interior decorators in Kolkata. You have the option of choosing our design service where we create layouts and 3d designs while you get it executed. You can also get the execution done under a total project management contract wherein we complete the entire project. The third and the most popular method is where we design the entire site and execute it too. This relieves you of all the stress involved with only the materials being provided by you. Being the leading interior designing company in Kolkata, we provide interior and exterior designing services for homes, offices, showrooms, restaurants & cafes, hotels, gyms and salons. Our interior designers and architects create your dream home, be it an apartment or a bungalow. Not only do they make excellent utilization of space for the living room, kitchen, dining room, bedrooms, bathrooms, gallery and terrace gardens, they will provide you with the ideal colour combinations, lighting, furniture and home décor accessories according to vaastu as well as the latest trends. We also provide innovative designs for offices and showrooms that create a very productive work environment. Our interior decorators have also made outstanding ambiences for cafes, restaurants and hotels.
							</p>
						</div>
						<Link to={"/contact-us-1"} className="btn btn-primary m-r10 m-b10">Contact us</Link>
						<Link to={"/portfolio-1"} className="btn btn-primary m-b10">View Portfolio</Link>
					</div>
				</div>
			</div>
		</>
	)
}
export {ExhibitionSection};

export default CompanyExhibition;