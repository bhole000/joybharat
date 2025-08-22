import React,{Fragment, Component} from 'react';
import Header from './../../Layout/Header';
import Footer2 from './../../Layout/Footer2';
import PageTitle from './../../Layout/PageTitle';
import bgimg from './../../../images/bg-view.png';
import img1 from './../../../images/img1.jpg';
import img2 from './../../../images/adv1.jpg';

/// modal
import { Modal } from "react-bootstrap";

class SubscriptionBox2 extends Component{
	
	/// model box
	state = {
		// initial state
		show: true,
	}

	handleClose = () => {
		this.setState({ show: false });
	};
	handleShow = () => {
		this.setState({ show: true });
	};
	render(){
		return(
			<Fragment>
				<Header />	
				<div className="page-content bg-white">
					{/*  banner  */}
					<PageTitle motherMenu="Subscription Modal Box 2" activeMenu="Subscription Modal Box 2" />
					<div className="content-inner" data-content="PORTFOLIO">				
						<div className="container">
							
							<button className="btn btn-primary" onClick={this.handleShow} type="button" data-toggle="modal" data-target="#exampleModal">Open Modal Box</button>
							{/*  InquiryModal  */}
								
							<Modal show={this.state.show} onHide={this.handleClose} className=" modal fade inquiry-modal-2" id="exampleModal" tabIndex="-1" >
								<div  role="document">
									<button type="button" className="close" onClick={this.handleClose} data-dismiss="modal"  aria-label="Close" >
									  <span aria-hidden="true">&times;</span>
									</button>
									<div className="inquiry-adv">
										<img src={img1} alt=""/>
										<img src={img2} alt=""/>
									</div>
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title" id="exampleModalLongTitle">Register now for a virtual project tour with our sales expert.</h5>
										</div>
										<div className="modal-body">
											<div className="dzFormMsg"></div>
											<form action="script/contact.php" className="dzForm row sp15" method="post">
												<input type="hidden" value="Appointment" name="dzToDo" />
												<input type="hidden" value="0" name="reCaptchaEnable" />
												<div className="form-group col-md-3">
													<input type="text" name="dzName" required className="form-control" placeholder="Enter Name" />
												</div>
												<div className="form-group col-md-3">
													<input type="text" name="dzOther[Phone]" className="form-control" placeholder="Enter Phone No." />
												</div>
												<div className="form-group col-md-3">
													<input type="email" name="dzEmail" className="form-control" placeholder="Enter Email Address" />
												</div>
												<div className="form-group col-md-3">
													<select className="form-control" name="dzOther[country]" required>
														<option>Select Location</option>
														<option>UK</option>
														<option>India</option>
														<option>Brazil</option>
														<option>Australia</option>
													</select>
												</div>
												<div className="col-md-12 text-center">
													<button name="submit" type="submit" value="Submit" className="btn btn-primary btn-block">SUBMIT</button>
												</div>	
											</form>
										</div>
									</div>
								</div>		
							</Modal>
						</div>
					</div>
					<div>				
						<img src={bgimg} className="bg-view" alt=""/>
					</div>
				</div>
				<Footer2 />	
			</Fragment>
		)
	}
}
export default SubscriptionBox2;
