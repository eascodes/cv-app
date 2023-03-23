import React, { Component } from 'react'
import "../styles/style.css"
import "../styles/components.css"
import DegreeForm from './DegreeForm'
import uniqid from 'uniqid'
import { format, parseISO } from 'date-fns'

class Education extends Component {
    constructor() {
        super()
        
        this.state = {
            editMode: true,
            degreeArr: [{
                school: "",
                title: "",
                date: "",
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
            degreeArr: this.state.degreeArr.map(degree => {
                return degree.id === e.target.className ? {
                    ...degree,
                    [e.target.name]: e.target.value,
                } : degree;
            })
        })
    }

    handleAddNew = () => {
        this.setState({
            editMode: true,
            degreeArr: this.state.degreeArr.concat({
                school: "",
                title: "",
                date: "",
                id: uniqid(),
            })
        })
    }

    handleDelete = (e) => {
        this.setState({
            editMode: true,
            degreeArr: this.state.degreeArr.filter(degree => {
                return degree.id !== e.target.className ; 
            })
        })
    }

    render() {
        const { degreeArr, editMode } = this.state;
        const editButton = <button onClick={this.handleEdit} className="edit-button">EDIT</button>;
        const submitButton = <button onClick={this.handleSubmit} className="submit-button">SUBMIT</button>;
        const addNewButton = <button onClick={this.handleAddNew} className="add-new-button">+ ADD NEW</button>;

        // Form to be shown in edit mode
        const editContent = (
            <div className="edit-education-div">
                <h4 className="form-header">EDUCATION {submitButton}</h4>
                {degreeArr.map(item => {
                    return <DegreeForm 
                                handleChange={this.handleChange}
                                handleDelete={this.handleDelete}
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
                {degreeArr.map(item=> {
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
}

export default Education;