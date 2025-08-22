import React,{Fragment, Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Mediavideo from './../../../media/video-1.mp4';
import logo from './../../../images/logo-white.png';
import bnr from './../../../images/background/bg2.jpg';
import { logInWithEmailAndPassword, registerWithEmailAndPassword } from '../../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Index3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.handleAdminAuth = this.handleAdminAuth.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  componentDidMount() {
    //sidebar icon Heart blast
    var socicalIcon = document.querySelector(
      ".contact-button, .contact-button-2"
    );

    function heartBlast() {
      return socicalIcon.classList.toggle("active");
    }

    socicalIcon.addEventListener("click", heartBlast);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleLogin(e) {
    try {
      e.preventDefault();
      this.setState({ loading: true });
      const res = await logInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      if (res && !res.error) {
        this.setState({ loading: false });
        toast.success("Login Sucessfully");
        this.props.history.push("/admin");
      } else {
        this.setState({ loading: false });
        toast.error(res.error || "Something went wrong!");
      }
    } catch (error) {
      this.setState({ loading: false });
      toast.error("Something went wrong!");
    }
  }

  async handleAdminAuth(e) {
    try {
      e.preventDefault();
      // const data = await registerWithEmailAndPassword(this.state.email, this.state.password)
    } catch (error) {}
  }

  render() {
    return (
      <Fragment>
        <ToastContainer />
        <div className="page-wraper">
          <div className="page-content">
            <section
              className="welcome-screen"
              style={{
                backgroundImage: "url(" + bnr + ")",
                backgroundSize: "cover",
              }}
            >
              <video autoPlay loop muted id="video-background">
                <source src={Mediavideo} type="video/mp4" />
              </video>
              <div className="container-fluid">
                <div className="welcome-header">
                  <div className="wlcm-logo">
                    <img src={logo} alt="" />
                  </div>
                </div>
                <div className="wlcm-form">
                  <div className="enter-form">
                    <form onSubmit={this.handleLogin}>
                      <h2 className="wlcm-form-title">
                        Enter Your Credentials
                      </h2>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span className="las la-user"></span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Email"
                          aria-label="Your Email"
                          name="email"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span className="las las la-lock"></span>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          aria-label="Password"
                          name="password"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="custom-control custom-checkbox form-group">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customControlAutosizing"
                        />
                        <label
                          className="custom-control-label"
                          for="customControlAutosizing"
                        >
                          Remember me
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                  <div className="enter-button">
                    <Link to={"./"} className="btn btn-primary">
                      Enter
                      <div className="enter-animate">
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <ul className="contact-button-2">
                <li className="contact-btn">
                  <Link to={"#"}>
                    {" "}
                    <i className="fa fa-phone"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"#"}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    className="phone"
                    title="Call Me Back"
                  >
                    <i className="fa fa-phone"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"#"}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    className="whatsapp"
                    title="Whats App"
                  >
                    <i className="fa fa-whatsapp"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"#"}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    className="enquire"
                    title="Enquire Now"
                  >
                    <i className="fa fa-commenting"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"#"}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    className="facebook"
                    title="Facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Index3);