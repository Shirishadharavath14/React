import React, { useState } from "react";

const ValidatedForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = "Name is required!";
        if (!formData.email) errors.email = "Email is required!";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert(`Submitted: ${formData.name}, ${formData.email}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ValidatedForm;
