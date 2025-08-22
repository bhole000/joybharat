import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import  pic1 from './../../images/amenities/pic1.jpg';
import  pic2 from './../../images/banner/bnr2.jpg';
import  pic3 from './../../images/services/pic1.jpg';
import  pic4 from './../../images/services/pic2.jpg';
import  pic5 from './../../images/services/pic3.jpg';

const latestBlog = [
	{ image: pic1,	 },
	{ image: pic2,	 },
	{ image: pic3,	 },
	{ image: pic4,	 },
	{ image: pic5,	 },
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

class Slider1 extends Component{
	render(){
		var settings = {		
			arrows: true,
			centerMode: false,
			centerPadding: "500px",
            slidesToShow: 1,
			speed: 3000,
			navSpeed: 3000,		
            infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1920,
				  settings: {
					slidesToShow: 3,
					centerPadding: "400px",
				  }
				},
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 2,
					centerPadding: "250px",
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
					centerPadding: "250px",
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 1,
					centerPadding: "200px",
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 1,
					centerPadding: "90px",
				  }
				}
			]
        };
		return(
			
				<Slider className="amenities-carousel owl-carousel owl-btn-center-lr " {...settings}>
					{latestBlog.map((item, index) => (
						<div className="items" key={index}>
							<div className="amenit-box" style={{opacity: 1.0}}>
								<div className="media">
									<Link to={"#"} style={{width:"100%",height:"250px" }}><img src={item.image} alt="" style={{width:"100%",height:"250px","object-fit":"cover" }}/></Link>
								</div>
								{/*<div className="info">
									<h5 className="title">
										<i className="ti-home"></i>
										<span><Link to={"./project-detail-1"}>Club House</Link></span>
									</h5>
					</div>*/}
							</div>
						</div>
					))}	
				</Slider>
			
				
		)
		
	}
	
}

export default Slider1;
						
						