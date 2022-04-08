import React from 'react'
import { useForm } from '../../hooks/useForms';
import "./addLinkForm.scss"
import Button from '..//button/';

const AddLinkForm = () => {
    const { handleSubmit, handleChange, data, errors } = useForm({
        validations: {
            name: {
                pattern: {
                    value: '/^[a-zA-Z]{4,60}/',
                    message: "Name should be at least 4 and maxiumum 60 characters. Only letters are allowed.",
                },
            },
            country: {
                pattern: {
                    value: '/^[a-zA-Z]{2,60}/',
                    message: "Country should be at least 2 and maxiumum 60 characters. Only letters are allowed.",
                },
            },
            city: {
                pattern: {
                    value: '/^[a-zA-Z]{2,60}/',
                    message: "City should be at least 2 and maxiumum 60 characters. Only letters are allowed.",
                },
                // custom: {
                //     isValid: (value) => value ? true:false,
                //     message: "City cannot be empty",
                // },
            },
            email: {
                pattern: {
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: "Mail address is not valid.",
                },
            },
        },
        onSubmit: () => alert('User submitted!'),
    });
    debugger;
    return (
        <form className="form-wrapper" onSubmit={handleSubmit}>
            <label style={errors.name && { color: "#FF0000B2" }}>Name Surname</label>
            <input
                style={errors.name && { borderColor: "#FF0000" }}
                placeholder="Enter name and surname"
                value={data.name}
                onChange={handleChange('name')}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <label style={errors.country && { color: "#FF0000B2" }}>Country</label>
            <input
                style={errors.country && { borderColor: "#FF0000" }}
                placeholder="Enter a country"
                value={data.country}
                onChange={handleChange('country')}
            />
            {errors.country && <p className="error">{errors.country}</p>}

            <label style={errors.city && { color: "#FF0000B2" }}>City</label>
            <input
                style={errors.city && { borderColor: "#FF0000" }}
                placeholder="Enter a city"
                value={data.city}
                onChange={handleChange('city')}
            />
            {errors.city && <p className="error">{errors.city}</p>}

            <label style={errors.email && { color: "#FF0000B2" }}>Email</label>
            <input
                style={errors.email && { borderColor: "#FF0000" }}
                placeholder="Enter a e-mail (abc@xyz.com)"
                value={data.email}
                onChange={handleChange('email')}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <div className="submit-wrapper">
                <Button type="submit" style={{ width: "138px" }}>Add</Button>
            </div>
        </form>
    );
};

export default AddLinkForm