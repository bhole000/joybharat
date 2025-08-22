import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 
import Header from './../../Layout/Header';
import Footer2 from './../../Layout/Footer2';
import PageTitle from './../../Layout/PageTitle';
import {BlogPage, ProDetail, ButtonPara} from './Data';

import project1 from './../../../images/projects/project/img1.jpg';
import project2 from './../../../images/projects/project/img2.jpg';
import project3 from './../../../images/projects/project/img3.jpg';

//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()
	
  return (
    <Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="lightimg " >
      <i className="ti-zoom-in icon-bx-xs"></i>
    </Link>
  )
}

class ProjectDetail2 extends Component{
	componentDidMount(){
		new WOW.WOW().init();	
	}
	render(){
		return(
			<Fragment>	
				<Header />
				<div className="page-content bg-white" >
					{/*  banner  */}
					<PageTitle motherMenu="Project Detail 2" activeMenu="Project Detail 2" />
					{/*  Project Img   */}
					<section className="mfp-gallery content-inner-2">
						<div className="container">
							<div className="row section-head">
								<div className="col-lg-6">
									<p>YEAR 2018</p>
									<h4 className="title">Creating authentic and Character for most Luxury Residential project</h4>
								</div>
								<div className="col-lg-6 align-self-center">
									<p className="m-b0">Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Drinking vinegar jean vinegar stumptown yr pop-up artisan.</p>
								</div>
							</div>
						</div>
						<SimpleReactLightbox>
							<SRLWrapper >
								<div className="container-fluid p-lr50">
									<div className="row">
										<div className="col-lg-12 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
											<div className="dlab-box gallery-box-2">
												<BlogPage  imageType={project1} />
											</div>
										</div>
										<div className="col-lg-12 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
											<div className="dlab-box gallery-box-2">
												<BlogPage  imageType={project2} />
											</div>
										</div>
										<div className="col-lg-12 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
											<div className="dlab-box gallery-box-2">
												<BlogPage  imageType={project3} />
											</div>
										</div>
									</div>
								</div>
							</SRLWrapper>
						</SimpleReactLightbox>		
					</section>
					{/*  Project Img END  */}
					{/* Project Info  */}
					<div className="content-inner-1">
						<div className="container">
							<div className="row p-b30 widget widget_getintuch widget_getintuch-pro-details pro-details-col-5 m-lr0">
								<ProDetail />
							</div>
							<ButtonPara />
						</div>
					</div>
					{/* Project Info End  */}
				</div>	
				<Footer2 />
			</Fragment>
		)	
	}
}
export default ProjectDetail2;