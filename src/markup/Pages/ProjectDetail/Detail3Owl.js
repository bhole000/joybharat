import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 

import img1 from './../../../images/projects/project-slide/img1.jpg';
import img2 from './../../../images/projects/project-slide/img2.jpg';
import img3 from './../../../images/projects/project-slide/img3.jpg';

const latestBlog = [
	{  image: img1,  },
    {  image: img2,  },
    {  image: img3,  },  
    {  image: img2,  },  
]
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next la la-angle-right"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
		<div className=" owl-prev la la-angle-left" onClick={onClick} style={{zIndex:1 }}/>
	</div>
  );
}

//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()

  return (
    <Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="lightimg " >
      <i className="ti-zoom-in icon-bx-xs"></i>
    </Link>
  )
}

class Slider1 extends Component{
	render(){
		var settings = {		
			arrows: false,
			centerMode: true,
			centerPadding: "500px",
            slidesToShow: 1,			
            infinite: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1600,
				  settings: {
					slidesToShow: 1,
					centerPadding: "230px",
				  }
				},
				{
				  breakpoint: 1400,
				  settings: {
					slidesToShow: 1,
					centerPadding: "200px",
				  }
				},
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 1,
					centerPadding: "150px",
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 1,
					centerPadding: "150px",
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
					centerPadding: "0px",
				  }
				}
			]
        };
		return(
			<SimpleReactLightbox>
				<SRLWrapper >
					<Slider className="amenities-carousel owl-btn-center-lr owl-carousel mfp-gallery " {...settings}>
						{latestBlog.map((item, index) => (
							<div className="item p-3" key={index}>
								<div className="dlab-box gallery-box-2">
									<div className="dlab-media dlab-img-overlay1 dlab-img-effect"> 
										<img src={item.image} alt="" />
										<div className="overlay-bx">
											<span data-exthumbimage="images/projects/project-slide/img1.jpg" data-src="images/projects/project-slide/img1.jpg" className="lightimg" title="Title Come Here"> <Iconimage/> </span>
										</div>
									</div>
								</div>
							</div>
						))}	
					</Slider>
				</SRLWrapper>
			</SimpleReactLightbox>						
		)
		
	}
	
}

export default Slider1;