import React, { useState } from 'react'
import "../styles/style.css"
import JobForm from './JobForm'
import uniqid from 'uniqid'
import { format, parseISO } from 'date-fns'

const Experience = () => {
    
    const [formData, setFormData] = useState(
        [{
            company: "",
            title: "",
            tasks: "",
            start: "",
            end: "",
            id: uniqid(),
        }]
    );

    const [editMode, setEditMode] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
    }

    const handleEdit = () => {
        setEditMode(true);
    }

    const handleChange = (e) => {
        setFormData(prevFormData => {
            return prevFormData.map(job => {
                return job.id === e.target.className ? {
                    ...job,
                    [e.target.name]: e.target.value,
                } : job;
            })
        })
    }

    const handleAddNew = () => {
        setFormData(prevFormData => {
            return prevFormData.concat({
                company: "",
                title: "",
                tasks: "",
                start: "",
                end: "",
                id: uniqid(),
            })
        })
    }

    const handleDelete = (e) => {
        setFormData(prevFormData => {
            return prevFormData.filter(job => {
                return job.id !== e.target.className ; 
            })
        })
    }

        const editButton = <button onClick={handleEdit} className="edit-button">EDIT</button>;
        const submitButton = <button onClick={handleSubmit} className="submit-button">SUBMIT</button>;
        const addNewButton = <button onClick={handleAddNew} className="add-new-button">+ ADD NEW</button>;

        // Form to be shown in edit mode
        const editContent = (
            <div className="edit-experience-div">
                <h4 className="form-header">EXPERIENCE {submitButton}</h4>
                {formData.map(item => {
                    return <JobForm 
                                handleChange={handleChange}
                                handleDelete={handleDelete}
                                key={item.id} 
                                id={item.id}
                                company={item.company}
                                title={item.title}
                                tasks={item.tasks}
                                start={item.start}
                                end={item.end}
                            />
                })}
            </div>
        )

        // Text to be shown upon submission
        const submittedContent = (
            <div>
                <h4 className="submitted-header">EXPERIENCE</h4>
                <hr></hr>
                {formData.map(item=> {
                    return (
                        <div key={item.id}>
                            <h5>{item.title}</h5>
                            <p>{item.company}</p>
                            {(item.start !== "" && item.end !== "") && <p>{format(parseISO(item.start), "MM/yy")}-{format(parseISO(item.end), "MM/yy")}</p>}
                            <p>{item.tasks}</p>
                        </div>
                    )
                })}
            </div>
        )

        return(
            <div className="experience-div content">
                {!editMode && editButton}
                {editMode ? editContent : submittedContent}
                {editMode && addNewButton}
            </div>
        )
}

export default Experience;