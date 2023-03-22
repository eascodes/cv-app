import React, { Component } from 'react'
import "../styles/style.css"
import JobForm from './JobForm'
import uniqid from "uniqid";

class Experience extends Component {
    constructor() {
        super()
        
        this.state = {
            editMode: true,
            jobArr: [{
                company: "",
                title: "",
                tasks: "",
                start: "",
                end: "",
                id: uniqid(),
            }],
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            editMode: false,
        })
    }

    handleEdit = () => {
        this.setState({
            ...this.state,
            editMode: true,
        })
    }

    handleChange = (e) => {
        this.setState({
            editMode: true,
            jobArr: this.state.jobArr.map(job => {
                return job.id === e.target.className ? {
                    ...job,
                    [e.target.name]: e.target.value,
                } : job;
            })
        })
    }

    handleAddNew = () => {
        this.setState({
            editMode: true,
            jobArr: this.state.jobArr.concat({
                company: "",
                title: "",
                tasks: "",
                start: "",
                end: "",
                id: uniqid(),
            }),
        })
    }

    handleDelete = (e) => {
        this.setState({
            editMode: true,
            jobArr: this.state.jobArr.filter(job => {
                return job.id !== e.target.className ; 
            })
        })
    }

    render() {
        const { jobArr, editMode } = this.state;
        const editButton = <button onClick={this.handleEdit} className="edit-button">EDIT</button>;
        const submitButton = <button onClick={this.handleSubmit} className="submit-button">SUBMIT</button>;
        const addNewButton = <button onClick={this.handleAddNew} className="add-new-button">+ ADD NEW</button>;

        // Form to be shown in edit mode
        const editContent = (
            <div className="edit-experience-div">
                <h4 className="form-header">EXPERIENCE {submitButton}</h4>
                {jobArr.map(item => {
                    return <JobForm 
                                handleChange={this.handleChange}
                                handleDelete={this.handleDelete}
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
                {jobArr.map(item=> {
                    return (
                        <div key={item.id}>
                            <h5>{item.title}</h5>
                            <p>{item.company}</p>
                            <p>{item.start}-{item.end}</p>
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
}

export default Experience;