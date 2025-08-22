import React,{ Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';
import Header from './../../Layout/Header';
import Footer2 from './../../Layout/Footer2';
import PageTitle from './../../Layout/PageTitle';
import {Pagination} from './BlogGrid';
import thum1 from './../../../images/blog/default/thum1.jpg';
import thum2 from './../../../images/blog/default/thum2.jpg';

const  MediaBlog=({thumImage})=>{
	return(
		<>
			<div className="dlab-media wow fadeIn" data-wow-delay="0.2s"  data-wow-duration="2s">
				<img src={thumImage} alt="" />
			</div>
			<div className="dlab-info">
				<div className="dlab-meta">
					<ul>
						<li className="post-date"><i className="las la-calendar-alt"></i><span>March 29, 2020</span></li>
						<li className="post-user"><i className="las la-user"></i>By <Link to={"#"}>Deo Admin</Link></li>
					</ul>
				</div>
				<h3 className="dlab-title">
					<Link to={"/blog-details"}>Inspiring Presence of Design Thanks to Indoor Plants</Link>
				</h3>
				<p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia</p>
				<div className="dlab-readmore">
					<Link to={"/blog-details"} className="readmore"><i className="las la-plus"></i> Read More</Link>
				</div>
			</div>
		</>
	)
}

class BlogList extends Component{
	componentDidMount(){
		new WOW.WOW().init();	
	}
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content bg-white">
					<PageTitle motherMenu="Blog List" activeMenu="Blog List" />
					{/*  Inner Page Banner */}
					<section className="content-inner-1">				
						<div className="container">
							<div className="row">
								<div className="col-md-6 col-lg-12 m-b50">
									<div className="dlab-card blog-half">
										<MediaBlog thumImage={thum1} />
									</div>
								</div>
								<div className="col-md-6 col-lg-12 m-b50">
									<div className="dlab-card blog-half reverse">
										<MediaBlog thumImage={thum2} />
									</div>
								</div>
								<div className="col-md-6 col-lg-12 m-b50">
									<div className="dlab-card blog-half">
										<MediaBlog thumImage={thum1} />
									</div>
								</div>
								<div className="col-md-6 col-lg-12 m-b50">
									<div className="dlab-card blog-half reverse">
										<MediaBlog thumImage={thum2} />
									</div>
								</div>
							</div>
							<nav aria-label="Page navigation example">
								<Pagination />
							</nav>
						</div>
					</section>
				</div>
				<Footer2 />
			</Fragment>
		)	
	}
}
export default BlogList;