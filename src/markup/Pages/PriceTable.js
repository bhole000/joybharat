import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';
import Header from './../Layout/Header';
import Footer2 from './../Layout/Footer2';
import PageTitle from './../Layout/PageTitle';
import SponsorOwl from './Aboutus/SponsorOwl';

//images 
import Img1 from './../../images/projects/project-slide/img1.jpg';

const PriceBox = ({ tableTitle, priceNum, }) => {
   return (
		<div className="pricingtable-inner">
			<div className="pricingtable-title">
				<h2>{tableTitle}</h2>
			</div>
			<div className="pricingtable-price">
				<span className="pricingtable-bx"><sup>$</sup>{priceNum}<strong>.00</strong></span>
			</div>
			<ul className="pricingtable-features">
				<li>Interior Design</li>
				<li>Space Planning</li>
				<li>Decorating Service</li>
				<li>Project Management</li>
			</ul>
			<div className="pricingtable-footer"> 
				<Link to={"/project-detail-1"} className="btn btn-primary">View Project<span></span></Link> 
			</div>
		</div>
   );
};

class PriceTable extends Component{
	componentDidMount(){
		new WOW.WOW().init();	
	}
	render(){
		return(
			<Fragment>
				<Header />	
				<div className="page-content bg-white">
					{/*  banner  */}
					<PageTitle motherMenu="Price Table" activeMenu="Price Table" />
					{/*  Our Gallery  */}
					<section className="content-inner-2" data-content="PRICE TABLE">
						<div className="container">
							<div className="section-head text-center">
								<h2 className="title">Provide Meaninful <span className="font-weight-400">Architecture</span> <br/>is not to parody history</h2>
							</div>
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
									<Link to={"#"}><img className="full-img" src={Img1} alt="" /></Link>
								</div>
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="max-w800 m-auto text-center">
										<p className="m-b30">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia Meh synth Schlitz, tempor duis single-</p>
										<Link to={"/portfolio-1"} className="btn btn-primary">View Portfolio</Link>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*  Our Gallery  End */}
					{/*  Pricing Table Start */}
					<section className="content-inner-2">
						<div className="container">
							<div className="pricingtable-row">
								<div className="row">
									<div className="col-sm-12 col-md-4 col-lg-4" >
										<div className="pricingtable-wrapper table-option m-md-b30">
											<PriceBox tableTitle="Silver" priceNum="29" />
										</div>
									</div>
									<div className="col-sm-12 col-md-4 col-lg-4" >
										<div className="pricingtable-wrapper table-option active m-md-b30">
											<PriceBox tableTitle="Gold" priceNum="39" />
										</div>
									</div>
									<div className="col-sm-12 col-md-4 col-lg-4 ">
										<div className="pricingtable-wrapper table-option">
											<PriceBox tableTitle="Platinum" priceNum="49" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*  Pricing Table End */}
					{/*  Client Logo start */}
					<div className="content-inner-1">
						<div className="container">
							<SponsorOwl />
						</div>	
					</div>	
					{/*  Contact Area END */}
				</div>	
				<Footer2 />	
			</Fragment>
		)
	}
}
export default PriceTable;