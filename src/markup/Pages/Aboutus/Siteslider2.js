import React, {Component} from 'react';
import Slider from "react-slick";
import  pic1 from './../../../images/gallery/carousel/thumb1.jpg';

const galleryBlog = [
	{ image: pic1,	 },
	{ image: pic1,	 },
	{ image: pic1,	 },
	{ image: pic1,	 },
]
class Siteslider2 extends Component{
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 3,			
            infinite: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
			<Slider className="owl-carousel owl-theme owl-none owl-dots-none gallery-bottom container owl-btn-center-lr " {...settings}>
				{galleryBlog.map((item, index) => (
					<div className="item" key={index}>
						<div className="gallery-box">
							<img src={item.image} alt="" style={{width:"100%"}} / >
						</div>
					</div>
				))}	
			</Slider>	
		)
	}
}
export default Siteslider2;