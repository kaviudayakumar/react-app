import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import Header from "./Components/Header";
// import Footer from './Components/Footer';
import Body from './Components/Body.js';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (< div className="App" >
            <Router >

                <div className="container" >
                    <Body />
                </div>
            </Router >

            {/* <Footer / > */}

        </div>
        );
    }
}

export default App;