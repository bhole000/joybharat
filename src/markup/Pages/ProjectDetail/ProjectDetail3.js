import React,{Fragment, Component} from 'react';
import WOW from 'wowjs';
import Header from './../../Layout/Header';
import Footer2 from './../../Layout/Footer2';
import PageTitle from './../../Layout/PageTitle';
import {ProDetail} from './Data';
import Detail3Owl from './Detail3Owl';

class ProjectDetail3 extends Component{
	componentDidMount(){
		new WOW.WOW().init();	
	}
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content bg-white" >
					{/*  banner  */}
					<PageTitle motherMenu="Project Detail 3" activeMenu="Project Detail 3" />
					{/*  Project Img  */}
					{/*  Info Carousel  */}
					<div className="section-full content-inner-2 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="container-fluid">
							<Detail3Owl />
						</div>
					</div>
					{/*  Info Carousel */}
					
					{/*  Project Info  */}
					<section className="section-full content-inner">
						<div className="container">
							<div className="section-head">
								<span>YEAR 2018</span>
								<h4 className="title">Creating authentic and Character for<br/> most Luxury Residential project</h4>
							</div>
							<p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack.</p>
							<p className="m-b30">Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up artisan.</p>
							<div className="row m-b30 widget widget_getintuch widget_getintuch-pro-details pro-details-col-5 m-lr0">
								<ProDetail />
							</div>
						</div>
					</section>
					{/*  Project Info  End*/}
				</div>	
				<Footer2 />		
			</Fragment>
		)
	}
}	

export default ProjectDetail3; 