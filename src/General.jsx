import { useState } from 'react'
import './General.css'

function General() {
    //const[info, setInfo] = useState({name:"", email:"", phone:""});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmit] = useState(false);

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
    }

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    }

    const handlePhoneChange = (e) => {
        const newPhone = e.target.value;
        setPhone(newPhone);
    }

    const handleEdit = () => {
        console.log("edit being clicked");
        
    }

    const handleSubmit = () => {
        console.log("submit being clicked");
        const newSubmit = !submitted;
        setSubmit(newSubmit);
    }

    if (submitted) {
        return (
            <>
                <div className='general-wrapper'>
                <div className='general-header'>General Information</div>
                <div className='general-input-wrapper'>
                    <div className='general-label'>Name: {name}</div>
                    <div className='general-label'>Email: {email}</div>
                    <div className='general-label'>Phone #: {phone}</div>
                </div>
                <button onClick={handleSubmit} id='general-edit'>Edit</button>
                
            </div>
            </>
        )
    }
    else {
        return (
        <>
            <div className='general-wrapper'>
                <div className='general-header'>General Information</div>
                <div className='general-input-wrapper'>
                    <label for='general-name' className='general-label'>Name:</label>
                    <input type='text' placeholder='Type your name' id='general-name' className='general-input' value={name} onChange={handleNameChange}></input>

                    <label for='general-email' className='general-label'>Email:</label>
                    <input type='email' placeholder='Type your email' id='general-email' className='general-input' value={email} onChange={handleEmailChange}></input>

                    <label for='general-phone' className='general-label'>Phone #:</label>
                    <input type='tel' placeholder='Type your phone #' id='general-phone' className='general-input' value={phone} onChange={handlePhoneChange}></input>
                </div>
                <button onClick={handleSubmit} id='general-submit'>Submit</button>
                
            </div>
        </>
        )
    }

    
}

export default General;