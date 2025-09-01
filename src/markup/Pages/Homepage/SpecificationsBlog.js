import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';
import { Accordion,Card} from 'react-bootstrap';


class SpecificationsBlog extends Component{
	componentDidMount(){
		new WOW.WOW().init();	
		
		  //SPECIFICATIONS Left Side hover 
		var faqCardHeader = document.querySelectorAll('.faqSpecifications .card-header a');
        var faqMedia = document.querySelectorAll('.faq-media img');
       
		var fch = [].slice.call(faqCardHeader);
		var fcMedia = [].slice.call(faqMedia);
		
		
        for (var y = 0; y < fch.length; y++) {
            fch[y].addEventListener('mouseenter', function () { 
				galleryActive(this);
			});
        }
        
		function galleryActive(current) 
		{
            fcMedia.forEach(el => el.classList.remove('active'));
			
			setTimeout(() => {
				var dataImageBx = current.getAttribute('data-image-bx'); 
				document.querySelector('#'+dataImageBx).classList.add('active');
			}, 100);
		}
	}
	render(){
		return(
			<Fragment>
				<div className="col-md-4 col-lg-4 col-xl-3 col-xxxl-2 faq-list">
					<div className="text-right mb-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<Link to={"./blog-grid"} className="btn btn-primary">View All Products</Link>
					</div>
					<Accordion defaultActiveKey="0" className="faqSpecifications">
						<Card >
							<Card.Header >
								<Accordion.Toggle as={Link} className="collapsed" variant="link" eventKey="0" data-image-bx="Capmap1">
									marbles
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="0" className="collapse faq-content">
								<Card.Body >earthquake resistant r.c.c frame structure for safety aspects</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card >
							<Card.Header >
								<Accordion.Toggle as={Link} className="collapsed" variant="link" eventKey="1" data-image-bx="Capmap2">
									Tiles
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="1" className="collapse faq-content">
								<Card.Body>earthquake resistant r.c.c frame structure for safety aspects</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card >
							<Card.Header >
								<Accordion.Toggle as={Link} className="collapsed" variant="link" eventKey="2" data-image-bx="Capmap3">
								Granite
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="2" className="collapse faq-content">
								<Card.Body>earthquake resistant r.c.c frame structure for safety aspects</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card >
							<Card.Header >
								<Accordion.Toggle as={Link} className="collapsed" variant="link" eventKey="3" data-image-bx="Capmap4">
								Accessories
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="3" className="collapse faq-content">
								<Card.Body>earthquake resistant r.c.c frame structure for safety aspects</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card >
							<Card.Header >
								<Accordion.Toggle as={Link} className="collapsed" variant="link" eventKey="4" data-image-bx="Capmap5">
									Kitchen
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="4" className="collapse faq-content">
								<Card.Body>earthquake resistant r.c.c frame structure for safety aspects</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card >
							<Card.Header >
								<Accordion.Toggle as={Link} className="collapsed" variant="link" eventKey="5" data-image-bx="Capmap6">
								Mirrors
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="5" className="collapse faq-content">
								<Card.Body>earthquake resistant r.c.c frame structure for safety aspects</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card >
							<Card.Header >
								<Accordion.Toggle as={Link} className="collapsed" variant="link" eventKey="6" data-image-bx="Capmap7">
									Interior Finish
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="6" className="collapse faq-content">
								<Card.Body>earthquake resistant r.c.c frame structure for safety aspects</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card >
							<Card.Header >
								<Accordion.Toggle as={Link} className="collapsed" variant="link" eventKey="7" data-image-bx="Capmap8">
									Bathrooms & Plumning
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="7" className="collapse faq-content">
								<Card.Body>earthquake resistant r.c.c frame structure for safety aspects</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card >
							<Card.Header >
								<Accordion.Toggle as={Link} className="collapsed" variant="link" eventKey="8" data-image-bx="Capmap9">
								Basin Mixers & Taps
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="8" className="collapse faq-content">
								<Card.Body>earthquake resistant r.c.c frame structure for safety aspects</Card.Body>
							</Accordion.Collapse>
						</Card>
						
						{/* <Card>
							<Card.Header >
								<Accordion.Toggle as={Link} className="collapsed" variant="link" eventKey="9" data-image-bx="Capmap2">
									Window
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="9" className="collapse faq-content">
								<Card.Body>earthquake resistant r.c.c frame structure for safety aspects</Card.Body>
							</Accordion.Collapse>
						</Card> */}
						
					</Accordion>	
				</div>
			</Fragment>
		)
	}
}

export default SpecificationsBlog;
