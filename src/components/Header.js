import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <header id="header" style={props.timeout ? {display: 'none'} : {}}>
    <div className="logo">
      <span className="icon fa-gears"></span>
      <span className="icon fa-heartbeat"></span>
      <span className="icon fa-object-group"></span>
      <span className="icon fa-paint-brush"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Kathy Jack</h1>
        <p>The Creative Dept.</p>
      </div>
    </div>
    <nav>
      <ul>
        <li><a onClick={() => {props.onOpenArticle('intro');}}>What</a></li>
        <li><a onClick={() => {props.onOpenArticle('work');}}>How</a></li>
        <li><a onClick={() => {props.onOpenArticle('about');}}>Who</a></li>
        <li><a onClick={() => {props.onOpenArticle('contact');}}>Contact</a></li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Header;
