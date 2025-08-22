import React,{Fragment , Component} from 'react';
import {HeaderContent} from './Header';

class Header2 extends Component{
	componentDidMount() {

        // sidebar open/close

        var Navicon = document.querySelector('.navicon');
        var sidebarmenu = document.querySelector('.myNavbar ');

        function toggleFunc() {
            sidebarmenu.classList.toggle('show');
            Navicon.classList.toggle('open');
        }
        Navicon.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }
		
		
        function checkLi(current) {
            navUl.forEach(el => (current !== el) ? el.classList.remove('open') : '');
            
			setTimeout(() => {
			current.classList.toggle('open');
						
			}, 100);			
        }
	}
	render(){
		return(
			<Fragment>
				<header className="site-header ">
					<HeaderContent />
				</header>
			</Fragment>
		)
	}
}
export default Header2;