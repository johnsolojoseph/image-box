import './NavBar.css';
import React from 'react';

class NavBar extends React.Component {
  render() {
    return(
      <nav>
        <div className="nav-wrapper container">
        <a href="#" className="brand-logo">{this.props.title}</a>
        </div>
      </nav>

    );
  }
}

export default NavBar;