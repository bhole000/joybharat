import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';
import SimpleReactLightbox,{SRLWrapper, useLightbox} from 'simple-react-lightbox';
import Header3 from './../../Layout/Header3';
import Footer2 from './../../Layout/Footer2';
import {ExhibitionSection} from './../CompanyExhibition';
import { CounterSection ,TeamSection, SpondorSection, VideoSection} from './../Aboutus/Aboutus2';
import {GalleryBox} from './../Portfolio/Portfolio1';
import BannerSlider from './BannerSlider';

//images 
import port1 from './../../../images/portfolio/portfolio-box/pic1.jpg';
import port2 from './../../../images/portfolio/portfolio-box/pic2.jpg';
import port3 from './../../../images/portfolio/portfolio-box/pic3.jpg';
import port4 from './../../../images/portfolio/portfolio-box/pic4.jpg';
import port5 from './../../../images/portfolio/portfolio-box/pic5.jpg';
import colrimg1 from './../../../images/icons/color-2/icon1.png';
import colrimg2 from './../../../images/icons/color-2/icon2.png';
import colrimg3 from './../../../images/icons/color-2/icon3.png';

const ServiceBlog = ({serviceImage, serviceTitle}) =>{
	return(
		<div className="icon-bx-wraper sr-iconbox">
			<div className="icon-lg m-b20">
				<Link to={"#"} className="icon-cell"><img src={serviceImage} alt=""/></Link>
			</div>
			<div className="icon-content">
				<h2 className="dlab-tilte">{serviceTitle}</h2>
				<p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
			</div>
		</div>
	)
} 

class Index2 extends Component{
	componentDidMount(){
		new WOW.WOW().init();	
	}
	render(){
		return(
			<Fragment>
				<Header3 />
				<div className="main-slider style-two default-banner" id="home">
					<div className="tp-banner-container">
						<div className="tp-banner" >
							<BannerSlider />	
						</div>
					</div>	
				</div>	
				{/* Content */}
				<div className="page-content bg-white">
					<div className="content-block">
						{/*  About Us */}
						<section className="content-inner exhibition-bx" >
							<ExhibitionSection />
						</section>
						{/*  About Us  End*/}
						
						{/* Video Section */}
						<VideoSection />
						{/* Video Section End*/}
						
						{/*  Services Section */  }
						<section className="content-inner-2" data-content="SERVICES">
							<div className="container">
								<div className="row">
									<div className="col-lg-4 col-md-4 col-sm-6 col-12 m-md-b30 wow fadeIn" data-wow-delay="0.2s"  data-wow-duration="2s">
										<ServiceBlog serviceImage={colrimg1} serviceTitle="Interior design"  />
									</div>
									<div className="col-lg-4 col-md-4 col-sm-6 col-12 m-md-b30 wow fadeIn" data-wow-delay="0.4s"  data-wow-duration="2s">
										<ServiceBlog serviceImage={colrimg2} serviceTitle="Architecture"  />
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12 col-12 wow fadeIn" data-wow-delay="0.6s"  data-wow-duration="2s">
										<ServiceBlog serviceImage={colrimg3} serviceTitle="Product design"  />
									</div>
								</div>
							</div>
						</section>
						
						{/*  Our Gallery */}
						<section className="content-inner" data-content="PRICE TABLE">				
							<div className="container">
								<div className="section-head text-center">
									<p>VIEW PORTFOLLO</p>
									<h2 className="title">Don’t miss your chance to discover the most fascinating </h2>
									<p>Phasellus dolor risus, luctus at lorem eu, sollicitudin mollis leo. Pellentesque tincidunt vel tortor et cursus. Donec posuere risus vitae viverra cursus. Nunc porttitor pharetra elit id</p>
								</div>
								<SimpleReactLightbox>
									<SRLWrapper >
										<div className="row" id="lightgallery">
											<div className="col-md-12 col-lg-6">
												<div className="dlab-box gallery-box-1 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
													<GalleryBox imageBlog={port1} />
												</div>
											</div>
											<div className="col-md-6 col-lg-3 col-sm-6">
												<div className="dlab-box gallery-box-1 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
													<GalleryBox imageBlog={port2} />
												</div>
												<div className="dlab-box gallery-box-1 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
													<GalleryBox imageBlog={port3} />
												</div>
											</div>
											<div className="col-md-6 col-lg-3 col-sm-6">
												<div className="dlab-box gallery-box-1 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
													<GalleryBox imageBlog={port4} />
												</div>
												<div className="dlab-box gallery-box-1 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
													<GalleryBox imageBlog={port5} />
												</div>
											</div>
										</div>
									</SRLWrapper>
								</SimpleReactLightbox>
							</div>
						</section>
						{/*  Our Gallery */}
					
						{/*  Counters  */}
						<CounterSection />
						{/*  Counters End */}
						
						{/*  Our Team  */}
						<TeamSection />
						{/*  Our Team End */}
						
						{/*  Our Partners */}
						<SpondorSection />
						{/*  Our Partners End*/}
					</div>
				</div>
				{/*  Content END */}
				<Footer2 />
			</Fragment>
		)
	}
}
export default Index2;