import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
class Header extends React.Component {
    render() {
        return (
            <div id="header">  <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">React JS Demo Website</Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse" aria-expanded="false" style={{ height: 1 }}>
                        <ul className="nav navbar-nav">
                            <li ><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/events">Events</Link></li>

                        </ul>

                    </div>
                </div>
            </nav> </div>
        );
    }
}
export default Header