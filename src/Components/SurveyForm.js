import React, { useState } from "react";

const SurveyForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.agree) {
            alert(`Name: ${formData.name}, Gender: ${formData.gender}, Agreement: Yes`);
        } else {
            alert("Please agree to the terms.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label>Gender:</label>
                <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
                <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
            </div>
            <div>
                <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
                <label>I agree to the terms and conditions</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default SurveyForm;
