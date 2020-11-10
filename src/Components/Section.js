import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Section(props) {
    function sampleFunction(e) {
        e.preventDefault();
        console.log('The button was clicked.');
      }
    
    return (
        <div id="section">
            <div className="jumbotron">
                <div className="container">
                    <h1>Hello, world!</h1>
                    <p>This is a section to say hello world ! at {props.date.toLocaleTimeString()}</p>
                    <p><button className="btn btn-primary btn-lg" onClick={sampleFunction} role="button">Learn more »</button></p>
                </div>
            </div>
        </div>
    );
}
// Link :https://reactjs.org/docs/components-and-props.html#function-and-class-components
export default Section