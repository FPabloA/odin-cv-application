import { useState } from 'react'
import '../styles/Practical.css'

function Practical () {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [submitted, setSubmit] = useState(false);

    const handleCompanyChange = (e) => {
        const newCompany = e.target.value;
        setCompanyName(newCompany);
    }

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setPositionTitle(newTitle);
    }

    const handleStartChange = (e) => {
        const newStart = e.target.value;
        setStartDate(newStart);
    }

    const handleEndChange = (e) => {
        const newEnd = e.target.value;
        setEndDate(newEnd)
    }

    const handleSubmit = () => {
        const newSubmit = !submitted;
        setSubmit(newSubmit);
    }

    if(submitted) {
        return (
            <>
                <div className='practical-wrapper'>
                    <div className='practical-header'>Practical</div>
                    <div className='practical-input-wrapper'>
                        <div for='practical-company' className='practical-label'>Company Name: {companyName}</div>

                        <div for='practical-title' className='practical-label'>Position Title: {positionTitle}</div>
                        

                        <div className='practical-date-row'>
                            <div className='practical-date-item'>
                                <div for='practical-start' className='practical-label'>Start Date: {startDate}</div>
                            </div>
                            
                            <div className='practical-date-item'>
                                <div for='practical-end' className='practical-label'>End Date: {endDate}</div>
                            </div>
                            
                        </div>
                    </div>
                    <button onClick={handleSubmit}>Edit</button>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className='practical-wrapper'>
                    <div className='practical-header'>Practical</div>
                    <div className='practical-input-wrapper'>
                        <label for='practical-company' className='practical-label'>Company Name:</label>
                        <input type='text' id='practical-company' className='practical-input' placeholder='Enter the company name' onChange={handleCompanyChange} value={companyName}></input>

                        <label for='practical-title' className='practical-label'>Position Title:</label>
                        <input type='text' id='practical-title' className='practical-input' placeholder='Enter the position title' onChange={handleTitleChange} value={positionTitle}></input>

                        <div className='practical-date-row'>
                            <div className='practical-date-item'>
                                <label for='practical-start' className='practical-label'>Start Date:</label>
                                <input type='date' id='practical-start' className='practical-input' placeholder='Enter start date' onChange={handleStartChange} value={startDate}></input>
                            </div>
                            
                            <div className='practical-date-item'>
                                <label for='practical-end' className='practical-label'>End Date:</label>
                                <input type='date' id='practical-end' className='practical-input' placeholder='Enter end date' onChange={handleEndChange} value={endDate}></input>
                            </div>
                            
                        </div>
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </>
        )
    }
}

export default Practical;