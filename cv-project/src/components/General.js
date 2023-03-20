import React, { Component } from 'react'
import "../styles/style.css"

class General extends Component {
    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            editMode: true,
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            editMode: false
        })
    }

    handleEdit = () => {
        this.setState({
            editMode: true
        })
    }

    render() {
        const { firstName, lastName, email, phone, editMode } = this.state;
        
        if (editMode) {
            return(
                <div>
                    <form className="general-form" onSubmit={this.handleSubmit}>
                        <h4>Contact Info <button type="submit">Submit</button></h4>
                        <div className="name-field">
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={firstName}
                                onChange={this.handleChange}
                            ></input>
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        ></input>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            name="phone"
                            value={phone}
                            onChange={this.handleChange}
                        ></input>
                    </form>
                </div>
            )
        } else {
            return(
                <div>
                    <h4>Contact Info <button onClick={this.handleEdit}>Edit</button></h4>
                    <h3>{firstName} {lastName}</h3>
                    <h4>{email}</h4>
                    <h4>{phone}</h4>
                </div>
            )
        }
    }
}

export default General;