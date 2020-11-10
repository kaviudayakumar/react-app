import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
class About extends Component {
    render() {
        return (
            <div id="About">
                <div className="jumbotron">
                    <h1>About Us</h1>
                    <p>Demo System Inc. is a New York State certified MBE providing specialized technology platforms and services in Software Development & Consulting, Digital Media, Business Intelligence, Mobile Applications and Content Management.
Demo is ranked among the top 4 privately held companies in New York for Business Intelligence and Content Management solutions. Demo provides solutions and services to clients in multiple domains including Technology, Financial Services, Media, Fashion, Retail and the Public Sector. Amtex is based in New York with offices located across the world.</p>
                    <p>
                        <a className="btn btn-lg btn-primary" href="#" role="button" rel="noopener noreferrer" >View More details »</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default About