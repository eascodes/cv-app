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
        const editButton = <button onClick={this.handleEdit}>Edit</button>;
        const submitButton = <button onClick={this.handleSubmit}>Submit</button>;
        const addNewButton = <button onClick={this.handleAddNew}>Add New</button>;

        // Form to be shown in edit mode
        const editContent = (
            <div>
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
                {jobArr.map(item=> {
                    return (
                        <div key={item.id}>
                            <h5>{item.company}</h5>
                            <p>{item.title}</p>
                            <p>{item.tasks}</p>
                            <p>{item.start}</p>
                            <p>{item.end}</p>
                        </div>
                    )
                })}
            </div>
        )

        return(
            <div>
                <h4>Experience 
                    {editMode ? submitButton : editButton}
                </h4>
                {editMode ? editContent : submittedContent}
                {editMode && addNewButton}
            </div>
        )
    }
}

export default Experience;