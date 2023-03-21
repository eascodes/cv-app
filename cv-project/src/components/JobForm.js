import React, { Component } from 'react'

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
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Company Name"
                        onChange={handleChange}
                        name="company"
                        className={id}
                        value={company}
                    ></input>
                    <input
                        type="text"
                        placeholder="Job Title"
                        onChange={handleChange}
                        name="title"
                        className={id}
                        value={title}
                    ></input>
                    <input
                        type="text"
                        placeholder="Main Job Tasks"
                        onChange={handleChange}
                        name="tasks"
                        className={id}
                        value={tasks}
                    ></input>
                    <input
                        type="text"
                        placeholder="Start Date"
                        onChange={handleChange}
                        name="start"
                        className={id}
                        value={start}
                    ></input>
                    <input
                        type="text"
                        placeholder="End Date"
                        onChange={handleChange}
                        name="end"
                        className={id}
                        value={end}
                    ></input>
                </form>
                <button className={id} onClick={handleDelete}>Delete</button>
            </div>
        )
    }
}

export default JobForm;