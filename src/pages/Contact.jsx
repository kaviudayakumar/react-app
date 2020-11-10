import React, { Component } from 'react';
// import Section from '../Components/Section';
class Contact extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     fields: {},
        //     errors: {}
        // }
        this.state = {
            name: '', email: '', phone: '', org: '', msg: '', formIsValid: true, errors: {}
        }

        // this.handleChange = this.handleChange.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeOrgn = this.handleChangeOrgn.bind(this);
        this.handleChangeMsg = this.handleChangeMsg.bind(this);
        // console.log("Desire")
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div id="Contact">
                {/* <Section date={new Date()}/> */}
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-4"> <h1>Contact Us</h1>
                            <p>To contact us , just send us a message.</p></div>

                        <div className="col-md-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Send us message</h3>
                                </div>
                                <div className="panel-body">
                                    {/* Panel Body Content */}
                                    <form name="form" onSubmit={this.handleSubmit}>
                                        <div className="form-group form-group-sm">
                                            <label htmlFor="name">Your Name</label>
                                            <input className="form-control" name="name" required={true} type="text" onChange={this.handleChangeName} value={this.state.name} />
                                            {this.state.errors["name"] ? (
                                                <div className="alert alert-danger" role="alert">

                                                    {this.state.errors["name"]}
                                                </div>
                                            ) : (<span></span>

                                                )}
                                        </div>
                                        <div className="form-group form-group-sm">
                                            <label htmlFor="email">eMail ID</label>
                                            <input className="form-control" name="email" required={true} type="text" onChange={this.handleChangeEmail} value={this.state.email} />

                                            {this.state.errors["email"] ? (
                                                <div className="alert alert-danger" role="alert">

                                                    {this.state.errors["email"]}
                                                </div>
                                            ) : (<span></span>

                                                )}
                                        </div>
                                        <div className="form-group form-group-sm">
                                            <label htmlFor="phone">Phone</label>
                                            <input className="form-control" name="phone" required={true}  type="text" onChange={this.handleChangePhone} value={this.state.phone} />
                                            {this.state.errors["phone"] ? (
                                                <div className="alert alert-danger" role="alert">

                                                    {this.state.errors["phone"]}
                                                </div>
                                            ) : (<span></span>

                                                )}
                                        </div>
                                        <div className="form-group form-group-sm">
                                            <label htmlFor="organisation">Organisation</label>
                                            <input className="form-control" name="org" type="text" onChange={this.handleChangeOrgn} value={this.state.org} />
                                        </div>
                                        <div className="form-group form-group-sm">
                                            <label htmlFor="message">Message</label>
                                            <textarea name="msg" className="form-control" onChange={this.handleChangeMsg} value={this.state.msg} />
                                        </div>
                                        <div className="form-group form-group-sm">
                                            <button className="btn btn-primary" type="submit" >Send</button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
    handleChangeField(e) {
       // let fields = this.state.fields;
        console.log("Name of the variable from target");
        console.log(e.target.name);
      //  fields[field] = e.target.value;
     //   this.setState({ fields });
     //   console.log("fields update from change fun:" + this.state.fields);
    }
    handleChangeName(e) {
        console.log("Name of the variable from target");
        console.log(e.target.name);
        
        this.setState({ name: e.target.value });
        if (!this.state.formIsValid) {
            this.handleValidation(e);

        }
    }
    handleChangeEmail(e) {
        console.log("Name of the variable from target");
        console.log(e.target.name);
        this.setState({ email: e.target.value });
        if (!this.state.formIsValid) {
            this.handleValidation(e);

        }
    }
    handleChangePhone(e) {
        console.log("Name of the variable from target");
        console.log(e.target.name);
        this.setState({ phone: e.target.value });
        if (!this.state.formIsValid) {
            this.handleValidation(e);

        }
    }
    handleChangeOrgn(e) {
        console.log("Name of the variable from target");
        console.log(e.target.name);
        this.setState({ org: e.target.value });
        if (!this.state.formIsValid) {
            this.handleValidation(e);

        }
    }
    handleChangeMsg(e) {
        this.setState({ msg: e.target.value });
        if (!this.state.formIsValid) {
            this.handleValidation(e);

        }
        console.log(this.state)
    }
    handleSubmit(e) {
       // e.preventDefault();

        if (this.handleValidation(e)) {
            alert("Message sent.");
            this.setState({ name: '', email: '', phone: '', org: '', msg: '' });
        } else {
            
            alert("Please provide valid details.");

        }
    }
    handleValidation(e) {
        // let fields = this.state.fields;
        e.preventDefault();
        let errors = {};
        let formIsValid = true;

        //Name
        if (!this.state.name) {
            formIsValid = false;
            this.setState({ formIsValid: formIsValid });
            errors["name"] = "Cannot be empty";
            console.log("Error details ! :" + errors["name"]);
            // this.state.errors["name"]="Cannot be empty";
        }

        if (typeof this.state.name !== "undefined") {
            console.log(typeof this.state.name + " Type of name")
            // /^[a-zA-Z]+$/ another :/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/ another: /^[a-z][a-z\s]*$/
            if (!this.state.name.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
                formIsValid = false;
                this.setState({ formIsValid: formIsValid });
                errors["name"] = "Name must have only letters";
                // this.state.errors["name"]="Only letters";
            }
        }

        //Email
        if (!this.state.email) {
            formIsValid = false;
            this.setState({ formIsValid: formIsValid });
            errors["email"] = "Cannot be empty";
        }

        if (typeof this.state.email !== "undefined") {
            let lastAtPos = this.state.email.lastIndexOf('@');
            let lastDotPos = this.state.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') === -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
                formIsValid = false;
                this.setState({ formIsValid: formIsValid });
                errors["email"] = "Email is not valid one.";
            }
        }
        if (!this.state.phone) {
            formIsValid = false;
            this.setState({ formIsValid: formIsValid });
            errors["phone"] = "Phone number cannot be empty";
        }
        if (typeof this.state.phone !== "undefined") {
console.log(this.state.phone,typeof this.state.phone)
            if (!this.state.phone.match(/^\d{10}$/) || isNaN(this.state.phone)) {
                formIsValid = false;
                this.setState({ formIsValid: formIsValid });
                errors["phone"] = "Phone number must be a 10 digit number.";
            }
            else {
                errors["phone"] = "";
            }
        }
        // if (typeof this.state.phone !== "undefined") {

        //     if (this.state.length!==10) {
        //         formIsValid = false;
        //         this.setState({ formIsValid: formIsValid });
        //         errors["phone"] = "Phone number must be a 10 digit number.";
        //     }
        //     else {
        //         errors["phone"] = "";
        //     }
        // }

        this.setState({ errors: errors, formIsValid: formIsValid });
        return formIsValid;
    }
}

export default Contact