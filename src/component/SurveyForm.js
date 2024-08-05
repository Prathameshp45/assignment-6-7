import React, { useState } from 'react';

function SurveyForm() {
    const [responses, setResponses] = useState({ name: '', age: '', gender: '', problem: '', feedback: '', });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setResponses((prevResponses) => ({
            ...prevResponses,
            [name]: value,
        }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(responses);
        alert('Thank you for your submission!');

    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>SURVEY FORM</h1>
            <label>
                Name:
                <input type="text" name="name" value={responses.name} onChange={handleChange} />
            </label>
            <br />
            <label>
                age:
                <input type='number' name='age' value={responses.age} onChange={handleChange} />
            </label>
            <br></br>
            {/* <label>
                Gender:
                <input type='text' name='gender' value={responses.gender} onChange={handleChange} />
            </label> */}
            <label>
                Gender:
                <select name='gender' value={responses.gender} onChange={handleChange}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
            </label>
            <br></br>
            <label>
            problem:
            <input type='text ' name='problem' value={responses.problem} onChange={handleChange} />
            <br></br>
            <label />
                Feedback:
                <textarea name='feedback' value={responses.feedback} onChange={handleChange} />
                
            </label>
            <br></br>
            <button type='submit' >SUBMIT</button>
        </form>
    );


}

export default SurveyForm;