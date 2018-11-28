import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { handleMouseEnter, handleMouseLeave, onOpenArticle } = props;
  const pages = ['what', 'how', 'who', 'contact'];
  const icons = {
    what: 'fa-cubes',
    how: 'fa-flash',
    who: 'fa-hand-spock-o',
    contact: 'fa-compress'
  };

  const navigation = (
    <ul>
      { pages.map((page, index) => {
        return (
          <li id={page} onMouseEnter={(event) => handleMouseEnter(event)} onMouseLeave={(e) => handleMouseLeave(e)} key={index} >
            <a onClick={() => {onOpenArticle(page);}}>
              {page}
            </a>
          </li>);
      })}
    </ul>
  );

  return (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
      <div className="logo">
        <div className="icon-wrap">
          <span className={props.icon ? `icon ${icons[props.icon]}` : 'icon fa-cog spin-it'}></span>
        </div>
      </div>
      <div className="content">
        <div className="inner">
          <h1>Ken Crocken</h1>
          <p>Developer</p>
        </div>
      </div>
      <nav>
        {navigation}
      </nav>
    </header>
  );
};

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  timeout: PropTypes.bool,
  icon: PropTypes.string
};

export default Header;
