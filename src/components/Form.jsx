import React, { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        gender: "",
        skills: [],
        country: "",
    });
    const [skills, setSkills] = useState([]);

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        if (type === "checkbox") {
            let updatedSkills;
            if (checked) {
                /*if checked add the event.target.name to the updatedSkills and then to skills.
            if unchecked delete the event.target.name from updatedSkills and skills*/
                updatedSkills = [...skills, value];
            } else {
                updatedSkills = skills.filter((skills) => skills !== value);
                /*skills array is filtered to create a new array with all the elemets in skill except the event.target.name
            to eleminate the event.target.name since it is unchecked.*/
            }
            setSkills(updatedSkills);
            setFormData({ ...formData, skills: updatedSkills });
        } else {
            setFormData({ ...formData, [name]: value });
            //formData is spreaded so that the existing elemets in the object does not get deleted.
        }
    }

    console.log(formData, "===formData");
    // console.log(skills, "===skills");

    const [errorFields, setErrorFields] = useState({
        firstName: false,
        email: false,
        gender: false,
        skills: false,
        country: false,
    });

    //!blur function to be completed
    // function handleBlur(event) {
    //     const { name, value } = event.target;
    //     let error = {
    //         firstName: false,
    //         email: false,
    //         gender: false,
    //         skills: false,
    //         country: false,
    //     };
    //     if (value === "") {
    //         error={...errorFields,[name]: true};
    //         console.log(error);
      
    //     setErrorFields(error);
    // }

    function isFormValid() {
        let error = {
            firstName: false,
            email: false,
            gender: false,
            skills: false,
            country: false,
        };
        if (formData.firstName === "") {
            error.firstName = true;
        }
        if (formData.email === "") {
            error.email = true;
        }
        if (formData.gender === "") {
            error.gender = true;
        }
        if (formData.skills.length === 0) {
            error.skills = true;
        }
        if (formData.country === "" || formData.country === "select") {
            error.country = true;
        }

        setErrorFields(error);

        if (Object.values(error).some((prev) => prev != true)) {
            return true;
        }
        return false;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (isFormValid()) {
            console.log("Form successfully submitted");
        } else {
            console.log("Form not Submitted");
        }
        // alert(formData.json);
    }

    return (
        <div className="form-container">
            <form id="form" onSubmit={handleSubmit} noValidate>
                <h2>Registration Form</h2>
                <div className="input-section">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" onChange={handleChange} onBlur={handleBlur} />
                    {errorFields.firstName && <p className="danger">First Name is required</p>}
                </div>
                <div className="input-section">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange} onBlur={handleBlur} />
                    {errorFields.email && <p className="danger">Email is required</p>}
                </div>
                <div className="radio-main">
                    <label htmlFor="gender">Gender</label>
                    {errorFields.gender && <p className="danger">Gender is required</p>}
                    <div className="radio-content">
                        <div className="radio-container">
                            <input
                                type="radio"
                                name="gender"
                                id="male"
                                value="male"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="radio-container">
                            <input
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>
                <div className="checkbox-container">
                    <label htmlFor="skills">Skills</label>
                    {errorFields.skills && <p className="danger">Skills is required</p>}

                    <div className="checkbox-content">
                        <div className="checkbox-inner-container">
                            <input
                                type="checkbox"
                                name="skills"
                                id="javaScript"
                                value="JavaScript"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <label htmlFor="javaScript">JavaScript</label>
                        </div>
                        <div className="checkbox-inner-container">
                            <input
                                type="checkbox"
                                name="skills"
                                id="css"
                                value="css"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <label htmlFor="css">CSS</label>
                        </div>
                        <div className="checkbox-inner-container">
                            <input
                                type="checkbox"
                                name="skills"
                                id="php"
                                value="PHP"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <label htmlFor="php">PHP</label>
                        </div>
                        <div className="checkbox-inner-container">
                            <input
                                type="checkbox"
                                name="skills"
                                id="html"
                                value="HTML"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <label htmlFor="html">HTML</label>
                        </div>
                    </div>
                </div>
                <div className="country-container">
                    <label htmlFor="country">Country</label>
                    {errorFields.country && <p className="danger">Country is required</p>}
                    <div className="select-container">
                        <select name="country" id="country" onChange={handleChange} onBlur={handleBlur}>
                            <option value="select">SELECT</option>
                            <option value="INDIA">INDIA</option>
                            <option value="UAE">UAE</option>
                            <option value="CANADA">CANADA</option>
                            <option value="USA">USA</option>
                        </select>
                    </div>
                </div>
                <button id="submit" form="form" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
