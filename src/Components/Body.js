import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ReactDemo from '../pages/ReactJs';

import Events from "../pages/Events";
class Body extends Component {
    render(

    ) {
        return (
            <div id="bodyContainer">

                <Header />
                <div className="container" style={{ paddingTop: 60 }}>


                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/reactJSdemo" component={ReactDemo} />
                    <Route path="/events" component={Events} />



                </div>
            </div>



        );
    };
}

export default Body