import React, { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({});
    const [skills, setSkills] = useState([]);

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: [event.target.value] });
        //formData is spreaded so that the existing elemets in the object does not get deleted.
        console.log(event.target.value);
    }
    function handleCheckboxChange(event) {
        let updatedSkills;
        if (event.target.checked) {
            /*if checked add the event.target.name to the updatedSkills and then to skills.
            if unchecked delete the event.target.name from updatedSkills and skills*/
            updatedSkills = [...skills, event.target.value];
        } else {
            updatedSkills = skills.filter((skills) => skills !== event.target.value);
            /*skills array is filtered to create a new array with all the elemets in skill except the event.target.name
            to eleminate the event.target.name since it is unchecked.*/
        }
        setSkills(updatedSkills);
        setFormData({ ...formData, skills: updatedSkills });
    }
    console.log(formData, "===formData");
    console.log(skills, "===skills");

    function handleSubmit(event) {
        preventDefault();
        console.log(event.target.value);
        setFormData({});
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Registration Form</h2>
                <div className="input-section">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" onChange={handleChange} />
                </div>
                <div className="input-section">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange} />
                </div>
                <div className="radio-main">
                    <label htmlFor="gender">Gender</label>
                    <div className="radio-content">
                        <div className="radio-container">
                            <input type="radio" name="gender" id="male" value="male" onChange={handleChange} />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="radio-container">
                            <input type="radio" name="gender" id="female" value="female" onChange={handleChange} />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>
                <div className="checkbox-container">
                    <label htmlFor="skills">Skills</label>

                    <div className="checkbox-content">
                        <div className="checkbox-inner-container">
                            <input
                                type="checkbox"
                                name="skills"
                                id="javaScript"
                                value="JavaScript"
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="javaScript">JavaScript</label>
                        </div>
                        <div className="checkbox-inner-container">
                            <input type="checkbox" name="skills" id="css" value="css" onChange={handleCheckboxChange} />
                            <label htmlFor="css">CSS</label>
                        </div>
                        <div className="checkbox-inner-container">
                            <input type="checkbox" name="skills" id="php" value="PHP" onChange={handleCheckboxChange} />
                            <label htmlFor="php">PHP</label>
                        </div>
                        <div className="checkbox-inner-container">
                            <input type="checkbox" name="skills" id="html" value="HTML" onChange={handleCheckboxChange} />
                            <label htmlFor="html">HTML</label>
                        </div>
                    </div>
                </div>
                <div className="country-container">
                    <label htmlFor="country">Country</label>
                    <div className="select-container">
                        <select name="country" id="country" onChange={handleChange}>
                            <option value="select">SELECT</option>
                            <option value="INDIA">INDIA</option>
                            <option value="UAE">UAE</option>
                            <option value="CANADA">CANADA</option>
                            <option value="USA">USA</option>
                        </select>
                    </div>
                </div>
                <button id="submit" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
