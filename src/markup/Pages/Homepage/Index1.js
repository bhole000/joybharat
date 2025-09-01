import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';

import Header2 from './../../Layout/Header2';
import Footer2 from './../../Layout/Footer2';
import SideNav from './../../Element/SideNav';
import VideoPopup from './../../Element/VideoPopup';


import Slider1 from './../../Element/Slider1';
import Mapview from './../../Element/Mapview';
import EventSection from './EventSection';
import SpecificationsBlog from './SpecificationsBlog';
import SitePlanTab from './SitePlanTab';

//Images
import  SliderImg from './../../../images/main-slider/slider1.png';
import main1 from './../../../images/gallery/main1.jpg';
						   
import spec1 from './../../../images/specifications/pic1.jpg';
import spec2 from './../../../images/specifications/pic2.jpg';
import spec3 from './../../../images/specifications/pic3.jpg';
import spec4 from './../../../images/specifications/pic4.jpg';
import spec5 from './../../../images/specifications/pic5.jpg';
import spec6 from './../../../images/specifications/pic6.jpg';
import spec7 from './../../../images/specifications/pic7.jpg';
import spec8 from './../../../images/specifications/pic8.jpg';
import spec9 from './../../../images/specifications/IMG_8206.JPG';
						  					   
import main2 from './../../../images/gallery/main2.jpg';
import main3 from './../../../images/gallery/main3.jpg';
import main4 from './../../../images/gallery/main4.jpg';
import main5 from './../../../images/gallery/main5.jpg';
import main6 from './../../../images/gallery/main6.jpg';


import gallery1 from './../../../images/gallery/pic1.jpg';
import gallery2 from './../../../images/gallery/pic2.jpg';
import gallery3 from './../../../images/gallery/pic3.jpg';
import gallery4 from './../../../images/gallery/pic4.jpg';
import gallery5 from './../../../images/gallery/pic5.jpg';
import gallery6 from './../../../images/gallery/pic6.jpg';

// import services1 from './../../../images/services/pic1.jpg';
// import services2 from './../../../images/services/pic2.jpg';
// import services3 from './../../../images/services/pic3.jpg';
// import services4 from './../../../images/services/pic4.jpg';
// import services5 from './../../../images/services/pic5.jpg';
// import services6 from './../../../images/services/pic6.jpg';
// import services7 from './../../../images/services/pic7.jpg';
// import services8 from './../../../images/services/pic8.jpg';
// import services9 from './../../../images/services/pic9.jpg';
// import services10 from './../../../images/services/pic10.jpg';
// import services11 from './../../../images/services/pic11.jpg';
// import services12 from './../../../images/services/pic12.jpg';


class Index1 extends React.Component{
	componentDidMount(){
		new WOW.WOW().init();
		
		var GalleryCategory = document.querySelectorAll('.gallery-category .items');
        var GalelryMedia = document.querySelectorAll('.gallery-img img');
       
		var fch = [].slice.call(GalleryCategory);
		var fcMedia = [].slice.call(GalelryMedia);
		
		
        for (var y = 0; y < fch.length; y++) {
            fch[y].addEventListener('mouseenter', function () { 
				galleryActive(this);
			});
        }
        
		function galleryActive(current) 
		{
            fcMedia.forEach(el => el.classList.remove('active'));
			
			setTimeout(() => {
				var dataImageBx = current.getAttribute('data-image-bx'); 
				document.querySelector('#'+dataImageBx).classList.add('active');
			}, 100);
		}
	}
	render(){
		return(
			<Fragment>
					
			<div className="sidenav-list">
					<SideNav />
				</div>
				
				<Header2 />
				{/* <!-- Main Slider --> */}
				<div className="page-content bg-white">
					<div className="banner-three " style={{backgroundImage: "url("+ SliderImg +")", backgroundSize:"cover"}} data-content="HOME" id="sidenav_home" >
						<div className="container">
							<div className="row align-items-center banner-inner " >
								<div className="col-md-6">
									{/* <div className="content-blog">
										<div className="banner-content">
											<h1 className=" title  m-b20">Helping you and your<br/>house become better </h1>
											<Link  to={"/contact-us-2"} className=" btn btn-primary">Get Now</Link>
										</div>
										<VideoPopup />
									</div>	 */}
								</div>
							</div>
						</div>
					</div>	
					{/* <!-- Main Slider End--> */}
					
					{/* Section-1  Start*/}
					<section className="amenities-area">
						 <Slider1 /> 
					</section>
					{/* Section-1  End*/}
					
					{/* Section-2  Start*/}
					<section className="content-inner-2" data-content="Professionalism" id="sidenav_specifications">				
						<div className="container">
							<div className="section-head head-col">
								<h2 className="title" >Professionalism</h2>
								<p>If you are looking for the best interior designing, look no further than us. Our skilled design team will try their level best to enhance the beauty of your interiors without punching a hole in your pocket. We try to visualize your architectural imagination before providing a customised design solution that suits your requirements and budget the best.</p>
							</div>
						</div>
						<div className="row faqs-box spno">
							<div className="col-md-8 col-lg-8 col-xl-8">
								<div className="faq-media">
									<Link to={"#"}><img src={spec1} id="Capmap1" className="active" alt=""/></Link>
									<Link to={"#"}><img src={spec2} id="Capmap2" alt=""/></Link>
									<Link to={"#"}><img src={spec3} id="Capmap3" alt=""/></Link>
									<Link to={"#"}><img src={spec4} id="Capmap4" alt=""/></Link>
									<Link to={"#"}><img src={spec5} id="Capmap5" alt=""/></Link>
									<Link to={"#"}><img src={spec6} id="Capmap6" alt=""/></Link>
									<Link to={"#"}><img src={spec7} id="Capmap7" alt=""/></Link>
									<Link to={"#"}><img src={spec8} id="Capmap8" alt=""/></Link>
									<Link to={"#"}><img src={spec9} id="Capmap9" alt=""/></Link>
								</div>
							</div>
							<SpecificationsBlog />
						</div>
					</section>	
					{/* Section-2 End */}
					
					{/* Section-3 */}
					
					<section className="content-inner about-box" data-content="ABOUT US" id="sidenav_aboutUs">	
						<div className="about-bg"></div>
						<div className="container">
							<div className="row">
								<div className="col-md-7 col-lg-6">
									<div className="section-head">
										<h2 className="title" >Overview</h2>
										<div className="dlab-separator bg-primary " ></div>
										<h4 className="mb-4" >Quality and Sustainability.</h4>
										<p >
										Joy Bharat Agencies undertake the responsibility of perfect interior designing service for you but also execute the plan with utmost dedication and professionalism. You just have to lean back and watch your dream project taking shape. With them by your side, each and every client approaching us can stay assured of getting world-class interior designing at affordable prices.
										</p>
										<p>
											We uses the highest-quality materials available on the market, as well as industry professionals and highly talented labourers, to create your dream home interiors.
										</p>
									</div>
									<Link to={"/about-us-1"} className="btn btn-primary " >About Us</Link>
								</div>
								<div className="col-md-5 col-lg-6"></div>
							</div>
						</div>
					</section>
					{/* Section-3 End*/}
					{/* Section-4 Start */}
					{/*<section className="content-inner" data-content="Feel the revolution." id="sidenav_masterPlan">				
						<SitePlanTab />
		</section>*/}
					{/* Section-4 End*/}
					{/* Section-5 Start*/}
					<section id="sidenav_mainGallery">
						<div className="main-gallery" >
							<div className="gallery-img">
								<img src={main1} id="structureOne" className="active" alt=""/>
								<img src={main2} id="structureTow" alt=""/>
								<img src={main3} id="kitchenOne" alt=""/>
								<img src={main4} id="kitchenTow" alt=""/>
								<img src={main5} id="kitchenThree" alt=""/>
								<img src={main6} id="interiorOne" alt=""/>
							</div>
							<div className="gallery-area">
								<div className="gallery-category">
									<div className="category-box">
										<div className="media">
											<img src={gallery1} alt=""/>
										</div>
										<div className="info">
											<h3 className="title">Structure</h3>
											<span><i className="las la-image"></i> 02</span>
										</div>
									</div>
									<div className="category-media">
										<div className="items" data-image-bx="structureOne">
											<div className="media"><img src={gallery1} alt=""/></div>
										</div>
										<div className="items" data-image-bx="structureTow">
											<div className="media"><img src={gallery2} alt=""/></div>
										</div>
									</div>
								</div>
								<div className="gallery-category">
									<div className="category-box">
										<div className="media">
											<img src={gallery1} alt=""/>
										</div>
										<div className="info">
											<h3 className="title">Kitchen</h3>
											<span><i className="las la-image"></i> 03</span>
										</div>
									</div>
									<div className="category-media">
										<div className="items" data-image-bx="kitchenOne">
											<div className="media"><img src={gallery3} alt=""/></div>
										</div>
										<div className="items" data-image-bx="kitchenTow">
											<div className="media"><img src={gallery4} alt=""/></div>
										</div>
										<div className="items" data-image-bx="kitchenThree">
											<div className="media"><img src={gallery5} alt=""/></div>
										</div>
									</div>
								</div>
								<div className="gallery-category">
									<div className="category-box">
										<div className="media">
											<img src={gallery3} alt=""/>
										</div>
										<div className="info">
											<h3 className="title">Interior Finish</h3>
											<span><i className="las la-image"></i> 01</span>
										</div>
									</div>
									<div className="category-media">
										<div className="items" data-image-bx="interiorOne">
											<div className="media"><img src={gallery6} alt=""/></div>
										</div>
									</div>
								</div>
								<div className="gallery-category">
									<div className="category-box">
										<div className="media">
											<img src={gallery4} alt=""/>
										</div>
										<div className="info">
											<h3 className="title">bedroom interior</h3>
											<span><i className="las la-image"></i> 04</span>
										</div>
									</div>
									<div className="category-media">
										<div className="items" data-image-bx="interiorOne">
											<div className="media"><img src={gallery6} alt=""/></div>
										</div>
										<div className="items" data-image-bx="kitchenOne">
											<div className="media"><img src={gallery3} alt=""/></div>
										</div>
										<div className="items" data-image-bx="kitchenTow">
											<div className="media"><img src={gallery4} alt=""/></div>
										</div>
										<div className="items" data-image-bx="interiorOne">
											<div className="media"><img src={gallery6} alt=""/></div>
										</div>
									</div>
								</div>
								<div className="gallery-category">
									<div className="category-box">
										<div className="media">
											<img src={gallery5} alt=""/>
										</div>
										<div className="info">
											<h3 className="title">Window</h3>
											<span><i className="las la-image"></i> 02</span>
										</div>
									</div>
									<div className="category-media">
										<div className="items" data-image-bx="interiorOne">
											<div className="media"><img src={gallery6} alt=""/></div>
										</div>
										<div className="items" data-image-bx="kitchenTow">
											<div className="media"><img src={gallery4} alt=""/></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Section-5 End*/}
					{/* Section-6 Start*/}
					{/* <section className="content-inner-2" data-content="OUR SERVICES" id="sidenav_ourServices">				
						<div className="container">
							<div className="row align-items-end section-head" >
								<div className="col-md-6">
									<h2 className="title"> Products</h2>
									<div className="dlab-separator bg-primary"></div>
									<p className="mb-3 mb-md-0">
									We understand your flavour of design and suggest you the best suitable to accomplish the work as you want.
									</p>
								</div>
								{<div className="col-md-6 text-md-right">
									<Link to={"./blog-grid"} className="btn btn-primary">View All Products</Link>
	</div>}
							</div>
						</div>
						<div className="service-area" style={{backgroundImage:"url(" + main1 + ")"}}>
							<div className="row spno service-row">
								<div className="col ">
									<div className="service-box">
										<div className="media">
											<img src={services1} alt=""/>
										</div>
										<div className="info">
											<Link to={"./blog-details"}><h4 className="title">marbles</h4></Link>
											<p>The is a collection of grand proportioned.</p>
										</div>
									</div>
								</div>
								<div className="col" >
									<div className="service-box">
										<div className="media">
											<img src={services2} alt=""/>
										</div>
										<div className="info">
											<Link to={"./blog-details"}><h4 className="title">Tiles</h4></Link>
											<p>The is a collection of grand proportioned.</p>
										</div>
									</div>
								</div>
								<div className="col " >
									<div className="service-box">
										<div className="media">
											<img src={services3} alt=""/>
										</div>
										<div className="info">
											<Link to={"./blog-details"}><h4 className="title">Granite</h4></Link>
											<p>The is a collection of grand proportioned.</p>
										</div>
									</div>
								</div>
								<div className="col " >
									<div className="service-box">
										<div className="media">
											<img src={services4} alt=""/>
										</div>
										<div className="info">
											<Link to={"./blog-details"}><h4 className="title">Accessories</h4></Link>
											<p>The MakeNDesign is a collection of grand proportioned.</p>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="service-box">
										<div className="media">
											<img src={services5} alt=""/>
										</div>
										<div className="info">
											<Link to={"./blog-details"}><h4 className="title">Kitchen</h4></Link>
											<p>The MakeNDesign is a collection of grand proportioned.</p>
										</div>
									</div>
								</div>
								<div className="col" >
									<div className="service-box">
										<div className="media">
											<img src={services6} alt=""/>
										</div>
										<div className="info">
											<Link to={"./blog-details"}><h4 className="title">Mirrors</h4></Link>
											<p>The MakeNDesign is a collection of grand proportioned.</p>
										</div>
									</div>
								</div>
								<div className="col" >
									<div className="service-box">
										<div className="media">
											<img src={services7} alt=""/>
										</div>
										<div className="info">
											<Link to={"./blog-details"}><h4 className="title">Interior Finish</h4></Link>
											<p>The MakeNDesign is a collection of grand proportioned.</p>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="service-box">
										<div className="media">
											<img src={services8} alt=""/>
										</div>
										<div className="info">
											<Link to={"./blog-details"}><h4 className="title">Bathrooms & Plumning</h4></Link>
											<p>The MakeNDesign is a collection of grand proportioned.</p>
										</div>
									</div>
								</div>
								<div className="col" >
									<div className="service-box">
										<div className="media">
											<img src={services9} alt=""/>
										</div>
										<div className="info">
											<Link to={"./blog-details"}><h4 className="title">Basin Mixers & Taps</h4></Link>
											<p>The MakeNDesign is a collection of grand proportioned.</p>
										</div>
									</div>
								</div>
								<div className="col" >
									<div className="service-box">
										<div className="media">
											<img src={services10} alt=""/>
										</div>
										<div className="info">
											<Link to={"./blog-details"}><h4 className="title">Fals Celling</h4></Link>
											<p>The MakeNDesign is a collection of grand proportioned.</p>
										</div>
									</div>
								</div>
								<div className="col" >
									<div className="service-box">
										<div className="media">
											<img src={services11} alt=""/>
										</div>
										<div className="info">
											<Link to={"./blog-details"}><h4 className="title">Parking</h4></Link>
											<p>The MakeNDesign is a collection of grand proportioned.</p>
										</div>
									</div>
								</div>
								<div className="col" >
									<div className="service-box">
										<div className="media">
											<img src={services12} alt=""/>
										</div>
										<div className="info">
											<Link to={"./blog-details"}><h4 className="title">Landscaping</h4></Link>
											<p>The MakeNDesign is a collection of grand proportioned.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section> */}
					{/* Section-6 End*/}
					{/* Section-7 Start*/}
					{/* <section className="content-inner-1" data-content="NEWS & EVENT" id="sidenav_newsEvent">	
						<EventSection />
					</section>	 */}
					{/* Section-7 End*/}
					
					{/*<Mapview />*/}
				</div>
				<section id="sidenav_footer">
				<Footer2 />	
				</section>
			</Fragment>
		)
	}
}

export default Index1;