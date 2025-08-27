import { useState } from 'react'
import './Education.css'

function Education () {
    const [schoolName, setSchoolName] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [dateofStudy, setDateOfStudy] = useState('');
    const [submitted, setSubmit] = useState(false);

    const handleSchoolChange = () => {
        //TODO
    }

    const handleTitleChange = () => {
        //TODO
    }

    const handleDateChange = () => {
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

export default Education;