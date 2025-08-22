import React,{Fragment, Component} from 'react';
import WOW from 'wowjs';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper} from 'simple-react-lightbox'; 
import Header from './../../Layout/Header';
import Footer2 from './../../Layout/Footer2';
import PageTitle from './../../Layout/PageTitle';
import {ProDetail, ButtonPara, BlogPage} from './Data';
import {GallerySection} from './ProjectDetail1';
//images
import project1 from './../../../images/projects/project/img1.jpg';
import project2 from './../../../images/projects/project/img2.jpg';
import project3 from './../../../images/projects/project/img3.jpg';

class ProjectDetail4 extends Component{
	componentDidMount(){
		new WOW.WOW().init();	
	}
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content bg-white" id="lightgallery">
					{/*  banner  */}
					<PageTitle motherMenu="Project Detail 4" activeMenu="Project Detail 4" />
					{/*  Project Img  */}
					<SimpleReactLightbox>
						<SRLWrapper >
							{/* Our Gallery  */}
							<div className="section-full content-inner-2">
								<div className="container">
									<div className="row our-gallery mfp-gallery">
										<GallerySection />
									</div>
								</div>
							</div>
							{/* Our Gallery End */}
							
							<section className="content-inner-2">
								<div className="container">
									<div className="row section-head">
										<div className="col-lg-6">
											<span>YEAR 2018</span>
											<h4 className="title">Creating authentic and Character for most Luxury Residential project</h4>
										</div>
										<div className="col-lg-6 align-self-center">
											<p className="m-b0">
												Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Drinking vinegar jean vinegar stumptown yr pop-up artisan.
											</p>
										</div>
									</div> 
									<div className="row m-b30 widget widget_getintuch widget_getintuch-pro-details pro-details-col-5 m-lr0">
										<ProDetail />
									</div>
								</div>
							</section>
							
							<div className="content-inner-1 mfp-gallery">
								<div className="container">
									<div className="row">
										<div className="col-lg-12 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
											<div className="dlab-box gallery-box-2 m-b30">
												<BlogPage  imageType={project1} />
											</div>
										</div>
										<div className="col-lg-12 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
											<div className="dlab-box gallery-box-2 m-b30">
												<BlogPage  imageType={project2} />
											</div>
										</div>
										<div className="col-lg-12 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
											<div className="dlab-box gallery-box-2 m-b50">
												<BlogPage  imageType={project3} />
											</div>
										</div>
									</div>
									<ButtonPara />
									
								</div>
							</div>
						</SRLWrapper>
					</SimpleReactLightbox>		
					{/* Content Area End  */}
				</div>	
				<Footer2 />		
			</Fragment>
		)
	}
}	


export default ProjectDetail4;
