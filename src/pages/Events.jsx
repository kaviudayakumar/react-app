import React, { Component } from 'react';
import Firebase from "firebase";
import config from './../config';


function ScheduledOn(props) {
    const from = props.from;
    const to = props.to;

    var schecdule = "";
    console.log(from);
    console.log(to);
    if (from === to) {

        schecdule = new Date(to).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    }
    else {
        if (new Date(from).getFullYear() ===
            new Date(to).getFullYear() || (new Date(from).getMonth() ===
                new Date(to).getMonth())) {



            schecdule = new Date(from).toLocaleDateString('en-IN', { day: 'numeric' }) + '-' + new Date(to).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });


        }
        else {
            schecdule = new Date(from).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) + '-' + new Date(to).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

        }

    }


    return (
        <span>{schecdule}</span>
    )

}


class Events extends Component {
    constructor(props) {
        super(props);
        if (!Firebase.apps.length) {
            Firebase.initializeApp(config);
            console.log("process.env.PUBLIC_URL");
            console.log(process.env.PUBLIC_URL);
        }
        this.state = {
            events: {
                past: [],
                future: [],
                next: []
            }
        }
    }

    componentDidMount() {
        this.getEvents();
    }

    getEvents = () => {
        let ref = Firebase.database().ref('/');
        ref.on('value', snapshot => {
            const state = snapshot.val();
            let event_arr = {
                past: [],
                future: [],
                next: []
            };
            console.log(state.events);
            state.events.sort(function (a, b) {
                return new Date(a.from) - new Date(b.from);
            });
            state.events.map((event, index) => {
                if (new Date(event.from) < new Date()) {
                    event_arr.past.push(event);
                } else {
                    event_arr.future.push(event);
                }
            });
            event_arr.next.push(event_arr.future[0]);
            event_arr.future.shift();
            this.setState({
                events: event_arr
            });
        });
    }

    render() {
        const { events } = this.state;

        return (
            <div id="Events">
                {
                    events.next.map((event, index) =>

                        //console.log(events.length)

                        (<div key={index} className="card float-left">
                            <div className="card-body"  >

                                <h3 className="card-title">Next Event</h3>
                                <hr></hr>
                                <h5 className="card-title">{event.name}</h5>
                                <img src={`${process.env.PUBLIC_URL}/img/${event.image}`} alt={event.image} style={{ width: 1150, height: 496 }}></img>



                                <p className="card-text"> <ScheduledOn from={event.from} to={event.to} /> {' ' + event.place.toUpperCase()}</p>
                                <p className="card-text">{event.description}</p>

                            </div>
                        </div>



                        )
                    )
                }
                <hr></hr>
                <h3 className="card-title">Future Events</h3>
                <div className="row">

                    {

                        events.future.map((event, index) => (
                            <div key={index} className="card-deck">
                                <div className="col-sm-6">
                                    <div className="card" >

                                        <div className="card-body">

                                            <h5 className="card-subtitle mb-2 text-muted">{event.name}</h5>

                                            <img src={`${process.env.PUBLIC_URL}/img/${event.image}`} alt={event.image} style={{ width: 550, height: 300 }}></img>
                                            <p className="card-text"><ScheduledOn from={event.from} to={event.to} /> {' ' + event.place}</p>
                                            <p className="card-text">{event.description}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>



                        )

                        )

                        //console.log(events.length)



                    }

                </div>
                <hr></hr>
                <h3 className="card-title">Past Events</h3>
                <div className="row">

                    {

                        events.past.map((event, index) => (
                            <div key={index} className="card-deck">
                                <div className="col-sm-6">
                                    <div className="card" >

                                        <div className="card-body">

                                            <h5 className="card-subtitle mb-2 text-muted">{event.name}</h5>

                                            <img src={`${process.env.PUBLIC_URL}/img/${event.image}`} alt={event.image} style={{ width: 550, height: 300 }}></img>
                                            <p className="card-text"><ScheduledOn from={event.from} to={event.to} /> {' ' + event.place}</p>
                                            <p className="card-text">{event.description}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>



                        )

                        )

                        //console.log(events.length)



                    }

                </div>

            </div >

        );
    }
}

export default Events