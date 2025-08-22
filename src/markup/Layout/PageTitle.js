import React from "react";
import {Link} from 'react-router-dom';

const PageTitle = ({ motherMenu, activeMenu }) => {
   return (
	
		<div className="dlab-bnr-inr">
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>{motherMenu}</h1>
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link to={"/"}><i className="las fa-home mr-2"></i>Home</Link></li>
							<li className="breadcrumb-item active" aria-current="page">{activeMenu}</li>
						</ul>
					</nav>
					
				</div>
			</div>
		</div>
		
   );
};

export default PageTitle;


			