import React,{Fragment, Component} from 'react';
import Header from './../../Layout/Header';
import Footer2 from './../../Layout/Footer2';
import PageTitle from './../../Layout/PageTitle';
import bgimg from './../../../images/bg-view.png';

/// modal
import { Modal } from "react-bootstrap";

class SubscriptionBox1 extends Component{
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
					<PageTitle motherMenu="Subscription Modal Box 1" activeMenu="Subscription Modal Box 1" />
					<div className="content-inner" data-content="PORTFOLIO">				
						<div className="container">
							
							<button className="btn btn-primary" onClick={this.handleShow} type="button" data-toggle="modal" data-target="#exampleModal">Open Modal Box</button>
							{/*  InquiryModal  */}
								
								<Modal show={this.state.show} onHide={this.handleClose} className=" fade inquiry-modal " id="exampleModal" tabIndex="-1" >
									<div className="modal-header">
										<h5 className="modal-title" id="exampleModalLongTitle">Register now for a virtual project tour with our sales expert.</h5>
										<button type="button" className="close" onClick={this.handleClose} data-dismiss="modal" aria-label="Close">
										  <span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">
										<div className="dzFormMsg"></div>
										<form action="script/contact.php" className="dzForm" method="post">
											<input type="hidden" value="Appointment" name="dzToDo" />
											<input type="hidden" value="0" name="reCaptchaEnable" />
											<div className="form-group">
												<input type="text" name="dzName" required className="form-control" placeholder="Enter Name" />
											</div>
											<div className="form-group">
												<input type="text" name="dzOther[Phone]" required className="form-control" placeholder="Enter Phone No." />
											</div>
											<div className="form-group">
												<input type="email" name="dzEmail" className="form-control" required placeholder="Enter Email Address" />
											</div>
											<div className="form-group">
												<select className="form-control" name="dzOther[country]" required>
													<option>Select Location</option>
													<option>UK</option>
													<option>India</option>
													<option>Brazil</option>
													<option>Australia</option>
												</select>
											</div>
											<button name="submit" type="submit" value="Submit" className="btn btn-primary btn-block">SUBMIT</button>
										</form>
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
export default SubscriptionBox1;
