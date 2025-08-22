import React,{ Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Header2 from './../../Layout/Header2';
import Footer2 from './../../Layout/Footer2';

import post1 from './../../../images/trending-post/pic1.jpg';
import post2 from './../../../images/trending-post/pic2.jpg';
import post3 from './../../../images/trending-post/pic3.jpg';
import post4 from './../../../images/trending-post/pic4.jpg';
import blog1 from './../../../images/blog/blog-grid/pic1.jpg';
import blog2 from './../../../images/blog/blog-grid/pic2.jpg';
import blog3 from './../../../images/blog/blog-grid/pic3.jpg';
import blog4 from './../../../images/blog/blog-grid/pic4.jpg';
import blog5 from './../../../images/blog/blog-grid/pic5.jpg';
import blog6 from './../../../images/blog/blog-grid/pic6.jpg';
import bgimg from './../../../images/bg-view.png';

const MediaBlog =({postImage})=>{
	return(
		<>
			<div className="dlab-media">
				<img src={postImage} alt="" />
			</div>
			<div className="dlab-info">
				<div className="dlab-meta">
					<ul>
						<li className="post-date"><i className="las la-calendar-alt"></i><span>March 29, 2020</span></li>
						<li className="post-user"><i className="las la-user"></i>By <Link to={"#"}>Deo Admin</Link></li>
					</ul>
				</div>
				<h3 className="dlab-title">
					<Link to={"/blog-details"}>How Roofing Charge for Their Services Asking the Right Questions</Link>
				</h3>
			</div>	
		</>	
	)
}

const gridBlog=[
	{media: blog1 },
	{media: blog2 },
	{media: blog3 },
	{media: blog4 },
	{media: blog5 },
	{media: blog6 },
];

function Pagination(){
	return(
		<>
			<ul className="pagination justify-content-center">
				<li className="page-item disabled">
					<Link className="page-link" to={"#"} tabIndex="-1" aria-disabled="true">Previous</Link>
				</li>
				<li className="page-item active"><Link className="page-link" to={"#"}>1</Link></li>
				<li className="page-item"><Link className="page-link" to={"#"}>2</Link></li>
				<li className="page-item"><Link className="page-link" to={"#"}>3</Link></li>
				<li className="page-item">
					<Link className="page-link" to={"#"}>Next</Link>
				</li>
			</ul>
		</>
	)
}

class BlogGrid extends Component{
	render(){
		return(
			<Fragment>
				<Header2 />
					<div className="page-content bg-white">
					{/*  Main Slider */}
					<section className="section-full post-cobble bg-white">
						<div className="row sp4">
							<div className="col-md-12 col-lg-12 col-xl-6 col-sm-12">
								<div className="dlab-card blog-grid overlay-post large">
									<MediaBlog  postImage={post1} />
								</div>
							</div>
							<div className="col-md-12 col-lg-12 col-xl-6 col-sm-12">
								<div className="row sp4">
									<div className="col-lg-4 col-xl-6 col-md-4 col-sm-6">
										<div className="dlab-card blog-grid overlay-post">
											<MediaBlog  postImage={post2} />
										</div>
									</div>
									<div className="col-lg-4 col-xl-6 col-md-4 col-sm-6">
										<div className="dlab-card blog-grid overlay-post">
											<MediaBlog  postImage={post3} />
										</div>
									</div>
									<div className="col-lg-4 col-xl-12 col-md-4 col-sm-12">
										<div className="dlab-card blog-grid overlay-post">
											<MediaBlog  postImage={post4} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*  Main Slider */}
					<section className="content-inner">				
						<div className="container">
							<div className="row">
								{gridBlog.map((data,index)=>(
									<div className="col-md-6 col-lg-4 col-sm-6 mb-5" key={index}>
										<div className="dlab-card blog-grid">
											<div className="dlab-media">
												<img src={data.media} alt="" />
											</div>
											<div className="dlab-info">
												<div className="dlab-meta">
													<ul>
														<li className="post-date"><i className="las la-calendar-alt"></i><span>March 29, 2020</span></li>
														<li className="post-user"><i className="las la-user"></i>By <Link to={"#"}>Deo Admin</Link></li>
													</ul>
												</div>
												<h3 className="dlab-title">
													<Link to={"/blog-details"}> How Roofing Charge for Their Services Asking the Right Questions</Link>
												</h3>
												<p>The goal of this new editor is to make adding rich content to WordPress simple and enjoyable.</p>
												<div className="dlab-readmore">
													<Link to={"/blog-details"} className="readmore"><i className="las la-plus"></i> Read More</Link>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
							<nav aria-label="Page navigation example">
								<Pagination />
							</nav>
						</div>
					</section>
					<div>				
						<img src={bgimg} className="bg-view" alt=""/>
					</div>
				</div>
				<Footer2 />
			</Fragment>
		)	
	}
}
export {Pagination};
export default BlogGrid;