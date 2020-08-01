import React from 'react';


const Footer = () => {
    return (
        <footer>
			<div className="container">
				<h1>__COMPANY_NAME__</h1>
				<p className="copyright-line">© Copyright __YEAR__ - All rights reserved.</p>
				<ul className="social-list">
					<li><a href="#"><i className="fa fa-twitter"></i></a></li>
					<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
					<li><a href="#"><i className="fa fa-facebook"></i></a></li>
					<li><a href="#"><i className="fa fa-instagram"></i></a></li>
				</ul>
			</div>
		</footer>
    );
};

export default Footer;