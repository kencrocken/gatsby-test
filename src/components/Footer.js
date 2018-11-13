import React from 'react';
import PropTypes from 'prop-types';

const redHeart = {
  color: 'red'
};

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <p className="copyright">&copy; Kathy Jack, 2018.  Made with <span style={redHeart} className="icon fa-heart-o"></span> in Edgewater, MD</p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool
};

export default Footer;
