import React, { Component } from "react";
import Slider from "react-slick";

import  pic1 from './../../../images/gallery/carousel/pic1.jpg';
import thumb1 from './../../../images/gallery/carousel/thumb1.jpg';

const galleryBlog = [
	{ image: pic1,	 },
	{ image: pic1,	 },
	{ image: pic1,	 },
	{ image: pic1,	 },
	{ image: pic1,	 },
	{ image: pic1,	 },
]


export default class SwiperSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
		var settings = {		
			arrows: false,
			centerMode: true,
			
        };
    return (
      <div>
       
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
		  className="owl-carousel owl-theme owl-none owl-dots-none gallery-top "
		  {...settings}
        >
			
			{galleryBlog.map((item, index) => (
				<div className="item" key={index}>
					<div className="gallery-media">
						<img src={item.image} alt=""  style={{width:"100%"}}  />
						<h4 className="title">40 X 70 East Side FF</h4>
					</div>
				</div>
			))}	
			
          
        </Slider>

        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
		  className="owl-carousel owl-theme owl-none owl-dots-none gallery-bottom container owl-btn-center-lr "
		  {...settings}
        >
          <div>
            
			<div className="item p-2" >
				<div className="gallery-box">
					<img src={thumb1} alt="" style={{width:"100%"}} / >
				</div>
			</div>
				
          </div>
          <div>
            <div className="item p-2" >
				<div className="gallery-box">
					<img src={thumb1} alt="" style={{width:"100%"}} / >
				</div>
			</div>
          </div>
          <div>
            <div className="item p-2" >
				<div className="gallery-box">
					<img src={thumb1} alt="" style={{width:"100%"}} / >
				</div>
			</div>
          </div>
          <div>
           <div className="item p-2" >
				<div className="gallery-box">
					<img src={thumb1} alt="" style={{width:"100%"}} / >
				</div>
			</div>
          </div>
          <div>
            <div className="item p-2" >
				<div className="gallery-box">
					<img src={thumb1} alt="" style={{width:"100%"}} / >
				</div>
			</div>
          </div>
          <div>
             <div className="item p-2" >
				<div className="gallery-box">
					<img src={thumb1} alt="" style={{width:"100%"}} / >
				</div>
			</div>
          </div>
        </Slider>
      </div>
    );
  }
}

