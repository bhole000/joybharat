import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 
import Header from './../../Layout/Header';
import Footer2 from './../../Layout/Footer2';
import PageTitle from './../../Layout/PageTitle';
import {VideoPopup2} from './../../Element/VideoPopup';

import img1 from './../../../images/projects/img1.jpg';
import img2 from './../../../images/projects/img2.jpg';

import pic2 from './../../../images/gallery/pic5.jpg';
import gallery3 from './../../../images/gallery/gallery-6/pic3.jpg';
import gallery4 from './../../../images/gallery/gallery-6/pic4.jpg';
import img3 from './../../../images/projects/img3.jpg';

//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()

  return (
    <Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="lightimg " >
      <i className="ti-zoom-in icon-bx-xs"></i>
    </Link>
  )
}

const detailBlog = [
	{icon: <i className="ti ti-user" />, 			title:'CLIENT',    subtitle: 'Martin Stewart' },	
	{icon: <i className="ti ti-user" />, 			title:'ARCHITECT', subtitle: 'Jimmy Smith' },	
	{icon: <i className="ti ti-location-pin" />, 	title:'LOCATION',  subtitle: 'London, UK' },	
	{icon: <i className="ti ti-ruler-alt-2" />, 	title:'SIZE',      subtitle: '1,200m2' },		
	{icon: <i className="ti ti-home" />, 			title:'TYPE',      subtitle: 'Residential Project' },	
];

const OverlayBlog = ({imageType})=> {
	return(
		<>
			<div className="dlab-box gallery-box-2">
				<div className="dlab-media dlab-img-overlay1 dlab-img-effect"> 
					<img src={imageType} alt="" /> 
					<div className="overlay-bx">
						<Iconimage />
					</div>
				</div>
			</div>
		</>
	)
}

class ProjectDetail1 extends Component{
	
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content bg-white" id="lightgallery">
					{/*  banner  */}
				<PageTitle motherMenu="Project Detail" activeMenu="Project Detail" />
					{/*  Project Img  */}
					<SimpleReactLightbox>
						<SRLWrapper >
							<div className="section-full content-inner-1">
								<div className="container">
									<div className="row">
										<div className="col-lg-12 mfp-gallery" >
											<OverlayBlog imageType={img1} />
										</div>
									</div>
								</div>
							</div>
							{/*  Project Img End */}
							{/*  Project Video Section */}
							<section className="section-full content-inner-2 overlay-black-middle video-bx"  style={{backgroundImage: "url(" + img2 + ")", backgroundSize: "cover"}}>
								<div className="container">
									<div className="row">
										<div className="col-lg-12 text-center text-white">
											<div className="video-play">
												<VideoPopup2 />
											</div>
											<h2 className="video-title text-white">The Power to Make Anything</h2>
											<p className="video-content">Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
											<Link to={"/contact-us-1"} className="btn btn-primary radius-xl"><span className="text-black">Contact us</span></Link>
										</div>
									</div>
								</div>
							</section>
							{/*  Project Video Section End */}
							{/* Our Gallery  */}
							<div className="section-full content-inner-2">
								<div className="container">
									<div className="row our-gallery mfp-gallery">
										<GallerySection />
									</div>
								</div>
							</div>
							{/* Our Gallery End */}
							{/* Project Info  */}
							<section className="section-full content-inner">
								<div className="container">
									<div className="row">
										<div className="col-lg-5 m-b30">
											<div className="section-head mb-3">
												<p>YEAR 2018</p>
												<h4 className="title">Creating authentic and Character for most Luxury Residential project</h4>
											</div>
											<p className="m-b30">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack.</p>
											<p className="m-b40">Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up artisan.</p>
											<a href="https://www.youtube.com/watch?v=Dj6CKxQue7U" className="popup-youtube m-r20 video btn btn-primary btn-video">
												<i className="fa fa-play"></i><span></span>
											</a>
											<Link to={"/contact-us-1"} className="btn btn-primary">Contact us</Link>
										</div>
										<div className="col-lg-7">
											<div  className="m-b30 mfp-gallery" >
												<OverlayBlog imageType={img3} />
											</div>
											<div className="row widget widget_getintuch widget_getintuch-pro-details m-lr0">
												{detailBlog.map((data,index)=>(
													<div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 p-lr0" key={index}>
														<div className="pro-details">{data.icon}<strong>{data.title}</strong> {data.subtitle}</div>
													</div>
												))}	
											</div>
										</div>
									</div>
								</div>
								{/* Project Info  End*/}
							</section>
						</SRLWrapper>
					</SimpleReactLightbox>		
					{/* Content Area End  */}
				</div>	
				<Footer2 />		
			</Fragment>
		)
	}
}	

function GallerySection(){
	return(
		<>
			<div className="col-lg-12 col-md-12 col-sm-12 m-b30" >
				<OverlayBlog imageType={pic2} />
			</div>
			<div className="col-lg-6 col-md-6 col-sm-6 m-sm-b30 " >
				<OverlayBlog imageType={gallery3} />
			</div>
			<div className="col-lg-6 col-md-6 col-sm-6 m-sm-b30 " >
				<OverlayBlog imageType={gallery4} />
			</div>
		</>
	)
}
export  {GallerySection};

export default ProjectDetail1;
