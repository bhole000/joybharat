import React,{Fragment, Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import WOW from 'wowjs';
import Masonry from 'react-masonry-component';
import Header from './../../Layout/Header';
import Footer2 from './../../Layout/Footer2';
import PageTitle from './../../Layout/PageTitle';

//images
import box1 from './../../../images/portfolio/portfolio-box1/pic1.jpg';
import box2 from './../../../images/portfolio/portfolio-box1/pic2.jpg';
import box3 from './../../../images/portfolio/portfolio-box1/pic3.jpg';
import box4 from './../../../images/portfolio/portfolio-box1/pic4.jpg';
import box5 from './../../../images/portfolio/portfolio-box1/pic5.jpg';
import box6 from './../../../images/portfolio/portfolio-box1/pic6.jpg';
import box7 from './../../../images/portfolio/portfolio-box1/pic7.jpg';
import box8 from './../../../images/portfolio/portfolio-box1/pic8.jpg';
import box9 from './../../../images/portfolio/portfolio-box1/pic9.jpg';
import box10 from './../../../images/portfolio/portfolio-box1/pic10.jpg';
import box11 from './../../../images/portfolio/portfolio-box1/pic11.jpg';
import box12 from './../../../images/portfolio/portfolio-box1/pic12.jpg';



const imageBlog = [
	{  Large_img: box1 , tag: ['Designing',	 'Technology',] , },
	{  Large_img: box2 , tag: ['Abstract', 'Mockup', 'Technology'] , }, 
	{  Large_img: box3 , tag: ['Technology', 'Mockup' ] , }, 
	{  Large_img: box4 , tag: ['Food', 'Abstract', 'Technology' ], },
	{  Large_img: box5 , tag: ['Food', 'Designing','Technology'], }, 
	{  Large_img: box6 , tag: ['Food' , 'Abstract'],  }, 
	{  Large_img: box7 , tag: ['Technology', 'Food'	] , }, 
	{  Large_img: box8 , tag: ['Abstract', 	 'Mockup','Technology'	] , }, 
	{  Large_img: box9 , tag: ['Abstract',	] , }, 
	{  Large_img: box10, tag: ['Technology', 'Mockup'	] , }, 
	{  Large_img: box11, tag: ['Abstract',] , }, 
	{  Large_img: box12, tag: ['Mockup', ] , }, 
]

// Masonry section
const masonryOptions = {                                          
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
// Masonry section end





const TagLi = ({name, handlesettag, tagActive}) => {                                                               
	return ( 
			
		<li className={` tag ${tagActive ? 'btn active' : 'btn'}` } onClick={() => handlesettag(name)} >
			<input type="radio" />
			<Link to={"#"} className="site-button-secondry button-skew" >	<span>{name} {''}</span> </Link>
		</li> 
	);
};

class Portfolio2 extends Component{
	componentDidMount(){
		new WOW.WOW().init();	
	}
	render(){
		return(
			<Fragment>	
			<Header />
			<div className="page-content bg-white">
				{/*  banner  */}
				<PageTitle motherMenu="Portfolio 2" activeMenu="Portfolio 2" />
				{/*  Section-1 Start  */}
				<PortfolioItem />
				
			</div>	
			<Footer2 />
			</Fragment>			
		)
	}
} 

function PortfolioItem(){
	const [tag, setTag] = useState('All');
	const [filteredImages, setFilterdImages] = useState([]);
	
	useEffect( () => {
		tag === 'All' ? setFilterdImages(imageBlog) : setFilterdImages(imageBlog.filter( image => image.tag.find(element => element === tag)))
	}, [tag])	
	
	return(
		<>
			<section className="content-inner-2" data-content="PORTFOLIO">				
				<div className="container">
					<div className="section-head text-center">
						<p>VIEW PORTFOLLO</p>
						<h2 className="title m-b10">Our Best Projects</h2>
					</div>
					<div className="row">
						<div className="col-lg-12 text-center">
							<div className="site-filters filter-style1 clearfix m-b20">
								<ul className="filters" data-toggle="buttons">
									<TagLi name="All"  handlesettag={setTag} tagActive={ tag === 'All' ? true : false }	/>
									<TagLi name="Abstract"  handlesettag={setTag} tagActive={ tag === 'Abstract' ? true : false }	/>
									<TagLi name="Food" handlesettag={setTag} tagActive={ tag === 'Food' ? true : false }	 />
									<TagLi name="Mockup"  handlesettag={setTag} tagActive={ tag === 'Mockup' ? true : false }	/>
									<TagLi name="Technology"  handlesettag={setTag} tagActive={ tag === 'Technology' ? true : false }	/>
								</ul>
							</div>
						</div>
					</div>	
				</div>
				<div className="clearfix">
					<ul className="gallery mfp-gallery text-center portfolio-bx p-l0 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<Masonry
							className={'my-gallery-class'} // default ''
							options={masonryOptions} // default {}
							disableImagesLoaded={false} // default false
							updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
							imagesLoadedOptions={imagesLoadedOptions} // default {}
						>
							{filteredImages.map((item, index)=>(	
								
								<li data-category="abstract" className="card-container col-lg-3 col-md-4 col-sm-6 p-lr0 abstract" key={index}>
									<div className="dlab-media dlab-img-overlay1 dlab-img-effect portbox1">
										<img src={item.Large_img} alt=""/>
										<div className="overlay-bx">
											<div className="portinner">
												<span>July 3, 2016 in Travelling</span>
												<h3 className="port-title"><Link to={"project-detail-1"}>Design is where science</Link></h3>
												<Link to={"/project-detail-1"} className="btn btn-primary m-t15">View Project</Link>
											</div>
										</div>
									</div>
								</li>
							))}	
						</Masonry>	
					</ul>
				</div>	
			</section>
		</>
	);
}

export default Portfolio2;