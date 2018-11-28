import React from 'react';
import PropTypes from 'prop-types';

const paleUmbrella = {
  color: 'white',
  opacity: '0.03'
};

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    {/* <p className="copyright">&copy; Kathy Jack, 2018.  Made with <span style={redHeart} className="icon fa-heart-o"></span> in Edgewater, MD</p> */}
    <span style={paleUmbrella} className="icon fa-umbrella"></span>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool
};

export default Footer;
