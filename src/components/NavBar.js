import './css/NavBar.css';
import React from 'react';

class NavBar extends React.Component {
  render() {
    return(
      <nav>
        <div className="nav-wrapper container">
        <a className="brand-logo" href="index.html">{this.props.title}</a>
        </div>
      </nav>

    );
  }
}

export default NavBar;
