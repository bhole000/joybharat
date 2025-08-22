import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer2 from './../Layout/Footer2';
import PageTitle from './../Layout/PageTitle';

//images 
import icon1 from './../../images/icons/search-icon.png';


class ErrorPage extends Component{
	
	render(){
		return(
			<Fragment>
				<Header />	
				<div className="page-content bg-white">
					{/*  banner  */}
					<PageTitle motherMenu="Error 404" activeMenu="Error 404" />
					<section className="content-inner-1" data-content="ERROR 404">				
						<div className="container">
							<div className="error-page text-center">
								<div className="dz_error">404</div>
								<h2 className="error-head">The Link You Folowed Probably Broken, or the page has been removed...</h2>
								<div className="m-b30">
									<div className="subscribe-form p-a0">
										<form>
											<div className="input-group">
												<input name="text" className="form-control radius-no bg-black" placeholder="Type and hit Enter..." type="text" />
												<span className="input-group-btn">
													<button type="submit" className="btn radius-no white"><img src={icon1} alt="" /></button>
												</span> 
											</div>
										</form>
									</div>
								</div>
								<Link to={"./"} className="btn btn-primary btn-lg">Return to Home</Link>
							</div>
						</div>
					</section>
				</div>
				<Footer2 />	
			</Fragment>
		)
	}
}
export default ErrorPage;
