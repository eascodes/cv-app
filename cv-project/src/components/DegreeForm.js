import React, { Component } from 'react'

class DegreeForm extends Component {

    render() {
        const { handleChange, handleDelete, id, school, title, date } = this.props;

        return(
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Name of School"
                        onChange={handleChange}
                        name="school"
                        className={id}
                        value={school}
                    ></input>
                    <input
                        type="text"
                        placeholder="Title of Degree"
                        onChange={handleChange}
                        name="title"
                        className={id}
                        value={title}
                    ></input>
                    <input
                        type="text"
                        placeholder="Graduate Date MM/YY"
                        onChange={handleChange}
                        name="date"
                        className={id}
                        value={date}
                    ></input>
                </form>
                <button className={id} onClick={handleDelete}>Delete</button>
            </div>
        )
    }
}

export default DegreeForm;