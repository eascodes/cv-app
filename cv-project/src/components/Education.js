import React, { Component } from 'react'
import "../styles/style.css"
import DegreeForm from './DegreeForm'
import uniqid from "uniqid";

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
        const editButton = <button onClick={this.handleEdit}>Edit</button>;
        const submitButton = <button onClick={this.handleSubmit}>Submit</button>;
        const addNewButton = <button onClick={this.handleAddNew}>Add New</button>;

        const editContent = (
            <div>
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

        const submittedContent = (
            <div>
                {degreeArr.map(item=> {
                    return (
                        <div key={item.id}>
                            <h5>{item.school}</h5>
                            <p>{item.title}</p>
                            <p>{item.date}</p>
                        </div>
                    )
                })}
            </div>
        )

        return(
            <div>
                <h4>Education 
                    {editMode ? submitButton : editButton}
                </h4>
                {editMode ? editContent : submittedContent}
                {editMode && addNewButton}
            </div>
        )
    }
}

export default Education;