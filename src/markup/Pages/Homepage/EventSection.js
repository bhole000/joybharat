import React,{Fragment ,Component} from 'react';
import {Link} from 'react-router-dom';
import EventSlider from './../../Element/EventSlider';

import bgimg from './../../../images/bg-view.png';

class EventSection extends Component{
	render(){
		return(
			<Fragment>
				{/* Section-7 Start*/}				
				<div className="container">
					<div className="row align-items-end section-head">
						<div className="col-md-6">
							<h2 className="title">News & Reviews</h2>
							<div className="dlab-separator bg-primary"></div>
							<p className="mb-3 mb-md-0"></p>
						</div>
						<div className="col-md-6 text-md-right">
							<Link to={"/blog-masonry"} className="btn btn-primary">View All Post</Link>
						</div>
					</div>
					{/* Blog Carousel Start*/ }	
						<EventSlider />
					{/*Blog Carousel End*/ }	
				</div>
				<img src={bgimg} className="bg-view"  alt=""/>	
				{/* Section-7 End*/}
			</Fragment>
		)
	}
}
export default EventSection;