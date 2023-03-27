import React from 'react'
import "../styles/forms.css"

const DegreeForm = (props) => {

    const { handleChange, handleDelete, id, school, title, date } = props;

    return(
        <div className="degree-div">
            <form>
                <input
                    type="text"
                    placeholder="Name of School"
                    onChange={handleChange}
                    name="school"
                    className={id}
                    value={school}
                    required
                ></input>
                <input
                    type="text"
                    placeholder="Title of Degree"
                    onChange={handleChange}
                    name="title"
                    className={id}
                    value={title}
                    required
                ></input>
                <p className="form-labels">Graduation Date</p>
                <input
                    type="date"
                    onChange={handleChange}
                    name="date"
                    className={id}
                    value={date}
                    required
                ></input>
            </form>
            <button className={id} onClick={handleDelete}>− DELETE</button>
        </div>
    )
    
}

export default DegreeForm;