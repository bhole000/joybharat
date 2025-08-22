import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index1 from './Pages/Homepage/Index1';
import Index2 from './Pages/Homepage/Index2';
import Index3 from './Pages/Homepage/Index3';
import Aboutus from './Pages/Aboutus/Aboutus';
import Aboutus2 from './Pages/Aboutus/Aboutus2';
import CompanyExhibition from './Pages/CompanyExhibition';
import PriceTable from './Pages/PriceTable';
import CompanyHistory from './Pages/CompanyHistory';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ErrorPage from './Pages/ErrorPage';
import ComingSoon from './Pages/ComingSoon';

import SubscriptionBox1 from './Pages/SubscriptionBox/SubscriptionBox1';
import SubscriptionBox2 from './Pages/SubscriptionBox/SubscriptionBox2';
import Portfolio1 from './Pages/Portfolio/Portfolio1';
import Portfolio2 from './Pages/Portfolio/Portfolio2';
import ProjectDetail1 from './Pages/ProjectDetail/ProjectDetail1';
import ProjectDetail2 from './Pages/ProjectDetail/ProjectDetail2';
import ProjectDetail3 from './Pages/ProjectDetail/ProjectDetail3';
import ProjectDetail4 from './Pages/ProjectDetail/ProjectDetail4';
import BlogGrid from './Pages/Blog/BlogGrid';
import BlogList from './Pages/Blog/BlogList';
import BlogMasonry from './Pages/Blog/BlogMasonry';
import BlogDetails from './Pages/Blog/BlogDetails';
import ContactUs1 from './Pages/Contact/ContactUs1';
import ContactUs2 from './Pages/Contact/ContactUs2';
import Admin from './Pages/Admin';

//ScrollToTop
import ScrollToTop from './Element/ScrollToTop';

class Markup extends Component{
	render(){
		return(
			<BrowserRouter>
                <div className="page-wraper">
                    <Switch>
                        <Route path='/' exact component={Index1} />
                        <Route path='/index-2' exact component={Index2} />
                        <Route path='/login' exact component={Index3} />
						<Route path='/about-us-1' exact component={Aboutus} />
						<Route path='/about-us-2' exact component={Aboutus2} />
						<Route path='/company-exhibition' exact component={CompanyExhibition} />
						<Route path='/price-table' exact component={PriceTable} />
						<Route path='/company-history' exact component={CompanyHistory} />
						<Route path='/privacy-policy' exact component={PrivacyPolicy} />
						<Route path='/404-page' exact component={ErrorPage} />
						<Route path='/coming-soon' exact component={ComingSoon} />
						<Route path='/subscription-box-1' exact component={SubscriptionBox1} />
						<Route path='/subscription-box-2' exact component={SubscriptionBox2} />
						<Route path='/portfolio-1' exact component={Portfolio1} />
						<Route path='/portfolio-2' exact component={Portfolio2} />
						<Route path='/project-detail-1' exact component={ProjectDetail1} />
						<Route path='/project-detail-2' exact component={ProjectDetail2} />
						<Route path='/project-detail-3' exact component={ProjectDetail3} />
						<Route path='/project-detail-4' exact component={ProjectDetail4} />
						<Route path='/blog-grid' exact component={BlogGrid} />
						<Route path='/blog-list' exact component={BlogList} />
						<Route path='/blog-masonry' exact component={BlogMasonry} />
						<Route path='/blog-details' exact component={ComingSoon} />
						<Route path='/blog-details/:id' exact component={BlogDetails} />
						<Route path='/contact-us-1' exact component={ContactUs1} />
						<Route path='/contact-us-2' exact component={ContactUs2} />
                        <Route path='/admin' component={Admin} />
						<Route path='*' exact component={ErrorPage} />
					</Switch>
                </div>
				<ScrollToTop />
            </BrowserRouter>	
		)
	}
	
}

export default Markup;