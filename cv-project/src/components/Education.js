import React, { useState } from 'react'
import "../styles/style.css"
import "../styles/components.css"
import DegreeForm from './DegreeForm'
import uniqid from 'uniqid'
import { format, parseISO } from 'date-fns'

const Education = () => {
    const [formData, setFormData] = useState(
        [{
            school: "",
            title: "",
            date: "",
            id: uniqid(),
        }]
    )

    const [editMode, setEditMode] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
    }

    const handleEdit = () => {
        setEditMode(true);

    }

    const handleChange = (e) => {
        setFormData(formData.map(degree => {
            return degree.id === e.target.className ? {
                ...degree,
                [e.target.name]: e.target.value,
            } : degree;
        }

        ))
    }

    // Check this one 
    const handleAddNew = () => {
        setFormData(prevFormData => {
            return prevFormData.concat({
                school: "",
                title: "",
                date: "",
                id: uniqid(),
            })
        })
    }

    const handleDelete = (e) => {
        setFormData(prevFormData => {
            return prevFormData.filter(degree => {
                return degree.id !== e.target.className; 
            })
        })
    }

    const editButton = <button onClick={handleEdit} className="edit-button">EDIT</button>;
    const submitButton = <button onClick={handleSubmit} className="submit-button">SUBMIT</button>;
    const addNewButton = <button onClick={handleAddNew} className="add-new-button">+ ADD NEW</button>;

    // Form to be shown in edit mode
    const editContent = (
        <div className="edit-education-div">
            <h4 className="form-header">EDUCATION {submitButton}</h4>
            {formData.map(item => {
                return <DegreeForm 
                            handleChange={handleChange}
                            handleDelete={handleDelete}
                            key={item.id} 
                            id={item.id}
                            school={item.school}
                            title={item.title}
                            date={item.date}
                        />
            })}
        </div>
    )
    
    // Text to be shown upon submission
    const submittedContent = (
        <div>
            <h4 className="submitted-header">EDUCATION</h4>
            <hr></hr>
            {formData.map(item=> {
                return (
                    <div key={item.id}>
                        <h5>{item.school}</h5>
                        <p>{item.title}</p>
                        {item.date !== "" && <p>Graduated {format(parseISO(item.date), "MM/yy")}</p>}
                    </div>
                )
            })}
        </div>
    )

    return(
        <div className="education-div content">
            {!editMode && editButton}
            {editMode ? editContent : submittedContent}
            {editMode && addNewButton}
        </div>
    )
    
}

export default Education;