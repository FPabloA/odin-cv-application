import { useState } from 'react'
import '../styles/Education.css'

function Education () {
    const [schoolName, setSchoolName] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [dateofStudy, setDateOfStudy] = useState('');
    const [submitted, setSubmit] = useState(false);

    const handleSchoolChange = (e) => {
        const newSchool = e.target.value;
        setSchoolName(newSchool);
    }

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitleOfStudy(newTitle);
    }

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDateOfStudy(newDate);
    }

    const handleSubmit = () => {
        const newSubmit = !submitted;
        setSubmit(newSubmit);
    }

    if(submitted) {
        return (
            <>
                <div className='education-wrapper'>
                    <div className='education-header'>Education</div>
                    <div className='education-input-wrapper'>
                        <div className='education-label'>School Name: {schoolName}</div>

                        <div className='education-label'>Title of Study: {titleOfStudy}</div>
                        
                        <div className='education-label'>Date of Study: {dateofStudy}</div>

                    </div>
                    <button onClick={handleSubmit} id='education-edit'>Edit</button>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className='education-wrapper'>
                    <div className='education-header'>Education</div>
                    <div className='education-input-wrapper'>
                        <label className='education-label' for='education-school'>School Name:</label>
                        <input className='education-input' id='education-school' type='text' placeholder='Enter school name' value={schoolName} onChange={handleSchoolChange}></input>

                        <label className='education-label' for='education-title'>Title of Study:</label>
                        <input className='education-input' id='education-title' type='text' placeholder='Enter title of study' value={titleOfStudy} onChange={handleTitleChange}></input>

                        <label className='education-label' for='education-date'>Date of Study:</label>
                        <input className='education-input' id='education-date' type='date' placeholder='Enter date of study' value={dateofStudy} onChange={handleDateChange}></input>
                    </div>
                    <button onClick={handleSubmit} id='education-submit'>Submit</button>
                </div>
            </>
        )
        
    }
}

export default Education;