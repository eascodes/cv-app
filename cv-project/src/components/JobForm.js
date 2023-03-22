import React, { Component } from 'react'
import "../styles/forms.css"

class JobForm extends Component {

    render() {
        const { 
            handleChange, 
            handleDelete,
            company,
            title,
            tasks,
            start,
            end,
            id, 
        } = this.props;

        return(
            <div className="job-div">
                <form>
                    <input
                        type="text"
                        placeholder="Company Name"
                        onChange={handleChange}
                        name="company"
                        className={id}
                        value={company}
                        required
                    ></input>
                    <input
                        type="text"
                        placeholder="Job Title"
                        onChange={handleChange}
                        name="title"
                        className={id}
                        value={title}
                        required
                    ></input>
                    <textarea
                        placeholder="Main Job Tasks"
                        onChange={handleChange}
                        name="tasks"
                        className={id}
                        value={tasks}
                        rows={4}
                        cols={42}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Start Date"
                        onChange={handleChange}
                        name="start"
                        className={id}
                        value={start}
                        required
                    ></input>
                    <input
                        type="text"
                        placeholder="End Date"
                        onChange={handleChange}
                        name="end"
                        className={id}
                        value={end}
                        required
                    ></input>
                </form>
                <button className={id} onClick={handleDelete}>− DELETE</button>
            </div>
        )
    }
}

export default JobForm;