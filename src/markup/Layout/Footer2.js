import React,{Component, Fragment} from 'react';
import  {Footercol1, Footercol2, Footercol3 , Footerbottom } from './Footer'; 

class Footer2 extends Component{
	render(){
		return(
			<Fragment>
				<footer className="site-footer" id="footer">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<Footercol1 />
							</div>
							<div className="col-md-4">
								<Footercol2 />
							</div>
							<div className="col-md-4">
								<Footercol3 />
							</div>
						</div>
					</div>
				</div>
				{/*  footer bottom part */}
				<div className="footer-bottom">
					<Footerbottom />
				</div>
			</footer>
			</Fragment>
		)
	}
}



export default Footer2;