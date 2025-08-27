import { useState } from 'react'
import './Practical.css'

function Practical () {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [submitted, setSubmit] = useState(false);

    const handleCompanyChange = () => {
        //TODO
    }

    const handleTitleChange = () => {
        //TODO
    }

    const handleStartChange = () => {
        //TODO
    }

    const handleEndChange = () => {
        //TODO
    }

    const handleSubmit = () => {
        const newSubmit = !submitted;
        setSubmit(newSubmit);
    }

    if(submitted) {
        //TODO
    }
    else {
        //TODO
    }
}

export default Practical;