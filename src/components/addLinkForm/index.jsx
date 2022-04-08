import React, { useEffect, useRef } from 'react'
import { useForm } from '../../hooks/useForms';
import "./addLinkForm.scss"
import Button from '..//button/';

const AddLinkForm = () => {
    const { handleSubmit, handleChange, data, errors } = useForm({
        validations: {
            fullName: {
                pattern: {
                    value: /^[a-zA-ZğüşöçİĞÜŞÖÇ]{4,60}/,
                    message: "Name should be minumum 4 and maximum 60 characters. Only letters are allowed.",
                },
            },
            country: {
                pattern: {
                    value: /^[a-zA-ZğüşöçİĞÜŞÖÇ]{2,60}/,
                    message: "Country should be minumum 2 and maximum 60 characters. Only letters are allowed.",
                },
            },
            city: {
                pattern: {
                    value: /^[a-zA-ZğüşöçİĞÜŞÖÇ]{2,60}/,
                    message: "City should be minumum 2 and maximum 60 characters. Only letters are allowed.",
                },
                // custom: {
                //     isValid: (value) => value ? true:false,
                //     message: "City cannot be empty",
                // },
            },
            email: {
                pattern: {
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: "Email address is not valid.",
                },
            },
        },
        onSubmit: () => { //add to local storage.
            var receivedStorageData = localStorage.getItem('searchData');
            receivedStorageData = receivedStorageData ? JSON.parse(receivedStorageData) : {};
            const date = new Date();
            const dateString = date.getDate().toString().padStart(2, "0") + "/" + (date.getMonth() + 1).toString().padStart(2, "0") + "/" + date.getFullYear().toString();
            const newData = {
                "Name Surname": data.fullName,
                "Company": "Tesodev",
                "Email": data.email,
                "Date": dateString,
                "Country": data.country,
                "City": data.city
            };
            receivedStorageData.push(newData);
            localStorage.setItem("searchData", JSON.stringify(receivedStorageData))
        },
    });

    useEffect(()=>{
        const a = !isFilled();
        document.getElementById("add-btn").disabled = !isFilled();
    },[data])

    const isFilled = () => {
        return data.fullName && data.country && data.city && data.email ? true : false;
    }


    return (
        <form className="form-wrapper" onSubmit={handleSubmit}>
            <label style={errors.fullName && { color: "#FF0000B2" }}>Name Surname</label>
            <input
                style={errors.fullName && { borderColor: "#FF0000"}}
                placeholder="Enter name and surname"
                value={data.fullName}
                onChange={handleChange('fullName')}
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}

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
                <Button id="add-btn" type="submit" style={{ width: "138px" }} >Add</Button>
            </div>
        </form>
    );
};

export default AddLinkForm