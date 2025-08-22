import React, { Fragment, Component, useRef } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import Header from "./../../Layout/Header";
import Footer2 from "./../../Layout/Footer2";
import PageTitle from "./../../Layout/PageTitle";

//images/

import bgimg from "./../../../images/bg-view.png";

class ContactUs2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactDetails: {}
    }
  }

  componentDidMount() {
    new WOW.WOW().init();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        Host : "smtp.elasticemail.com",
        Username : "support@makendisplay.in",
        Password : "4AF83B067E32AC3AAE399F3E31B00BD236A6",
        To: 'support@makendisplay.in',
        From: 'support@makendisplay.in',
        Subject: `${this.state.contactDetails['name']} wanted to connect with you.`,
        Body: ` phone No :${this.state.contactDetails['phoneNo']}
                Email : ${this.state.contactDetails['email']}
                Message : ${this.state.contactDetails['message']}`,
      }).then(
        message => console.log(message)
      );
    }
  }

  handleChange(key, value) {
    this.setState({
      contactDetails: { ...this.state.contactDetails, [key]: value }
    })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="page-content bg-white">
          <PageTitle motherMenu="Contact Us" activeMenu="Contact Us" />
          {/*  Inner Page Banner */}
          <section className="content-inner-2" data-content="CONTACT US">
            <div className="container">
              <div className="section-head text-center">
                <span>Contact us</span>
                <h2 className="title">Always Help You</h2>
              </div>
              <div className="banner-map">
                <iframe title="google_map" allowfullscreen style={{ border: "0", width: "100%", minHeight: "500px" }} className="border-0 align-self-stretch rounded-sm" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&height=800&hl=en&q=Chandannagar+West+Bengal SBD BRICKFIELD&t=&z=14&ie=UTF8&iwloc=B&output=embed"></iframe>
                {/*<iframe
                  title="google_map"
                  src="https://www.google.com/maps/place/Chandannagar,+West+Bengal/@22.8630194,88.3410242,17.72z/data=!4m5!3m4!1s0x39f891c05d059fa9:0x516c5f246932de74!8m2!3d22.867114!4d88.3674381"
                  className="border-0 align-self-stretch rounded-sm"
                  style={{ border: "0", width: "100%", minHeight: "500px" }}
                  allowfullscreen
                />*/}
              </div>
            </div>
          </section>
          <section className="content-inner-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper m-sm-b30 left">
                    <div className="icon-md m-b20 m-t5">
                      <Link to={"#"} className="icon-cell text-primary">
                        <i className="las la-phone-volume"></i>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h3 className="dlab-tilte m-b5">Phone</h3>
                      <p>(+91)9830266108 / (+91)9330275831</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper m-sm-b30 left">
                    <div className="icon-md m-b20 m-t5">
                      <Link to={"#"} className="icon-cell text-primary">
                        <i className="las la-map"></i>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h3 className="dlab-tilte m-b5">Address</h3>
                      <p>Gopinagar More Haripal, Hooghly</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="icon-bx-wraper left">
                    <div className="icon-md m-b20 m-t5">
                      <Link to={"#"} className="icon-cell text-primary">
                        <i className="las la-envelope-open"></i>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h3 className="dlab-tilte m-b5">Email</h3>
                      <p>contact@makendisplay.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content-inner contact-box">
            <div className="container">
              <div className="section-head text-center">
                <span>Get in touch with us</span>
                <h2 className="title">Contact us</h2>
              </div>
              <div className="dzFormMsg"></div>
              <form className="dzForm" onSubmit={(e) => { this.handleSubmit(e) }}>
                <input type="hidden" value="Contact" name="dzToDo" />
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="form-group">
                      <input
                        name="dzName"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Enter your name"
                        onChange={(e) => { this.handleChange('name', e.target.value) }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="form-group">
                      <input
                        name="dzEmail"
                        type="email"
                        className="form-control"
                        required
                        placeholder="Your Email Address"
                        onChange={(e) => { this.handleChange('email', e.target.value) }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="form-group">
                      <input
                        name="dzOther[Phone]"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Phone"
                        onChange={(e) => { this.handleChange('phoneNo', e.target.value) }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <textarea
                        name="dzMessage"
                        rows="4"
                        className="form-control"
                        required
                        placeholder="Your message here"
                        onChange={(e) => { this.handleChange('message', e.target.value) }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 text-center">
                    <button
                      onClick={(e) => { this.handleSubmit(e) }}
                      className="btn btn-primary btn-lg"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <div>
            <img src={bgimg} className="bg-view" alt="" />
          </div>
        </div>
        <Footer2 />
      </Fragment>
    );
  }
}
export default ContactUs2;
