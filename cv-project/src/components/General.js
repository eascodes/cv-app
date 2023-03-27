import React, { useState } from 'react'
import "../styles/style.css"
import "../styles/components.css"

const General = () => {
    
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            location: "",
            about: "",
        }
    );

    const [editMode, setEditMode] = useState(true);
    
    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
    }

    const handleEdit = () => {
        setEditMode(true);
    }

    const editButton = <button onClick={handleEdit} className="edit-button">EDIT</button>;
    const submitButton = <button type="submit" className="submit-button">SUBMIT</button>;

    // Form to be shown in edit mode
    const editContent = (
        <div>
            <form className="general-form" onSubmit={handleSubmit}>
                <h4 className="form-header">CONTACT INFO {submitButton}</h4>
                <div className="name-field">
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    ></input>
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    ></input>
                </div>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                ></input>
                <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                ></input>
                <input
                    type="text"
                    placeholder="City, State"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                ></input>
                <textarea
                    placeholder="Personal Summary"
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    rows={4}
                    cols={42}
                    required
                />
            </form>
        </div>
    )

    // Text to be shown after submission
    const submittedContent = (
        <div className="general-div">
            {editButton}
            <div className="name-div">
                <h1>{formData.firstName.toUpperCase()}</h1><h1>{formData.lastName.toUpperCase()}</h1>
            </div>
            <hr></hr>
            <div className="contact-div">
                <p>{formData.email}</p>
                <p>|</p>
                <p>{formData.phone}</p>
                <p>|</p>
                <p>{formData.location}</p>
            </div>
            <div className="about">
                <h4>ABOUT ME</h4>
                <p>{formData.about}</p>
            </div>
        </div>
    )

    return(
        <div>
            {editMode ? editContent : submittedContent}
        </div>
    )
    
}

export default General;