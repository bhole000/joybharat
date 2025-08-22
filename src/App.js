import React from "react";

/// Components
import Markup from './markup/Markup';

/// Style
import "./vendor/bootstrap-select/bootstrap-select.min.css";
import "./vendor/animate/animate.css";
import "./css/style.css";
import './vendor/slick/slick.min.css';
import './vendor/slick/slick-theme.min.css';
import 'react-modal-video/css/modal-video.min.css';
import "react-dropzone-uploader/dist/styles.css";


import { withResizeDetector } from "react-resize-detector";
function App() {
	return (
		<div className="App">
		  <Markup />
		</div>
	);
}

export default withResizeDetector(App);
