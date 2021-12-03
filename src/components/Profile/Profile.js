import React from 'react'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import "./Profile.css"

function Profile({name, gender, contact, specialisation, hospital}) {
    return (
        <div className = 'profiles'>
            <div className='name'>
                    <span>Name: {name}</span>
                    <span>Gender: {gender}</span>
            </div>
            <div className='otherDetails'>
                    <p>Contact No: {contact}</p>
                    <p>Specialisation: {specialisation}</p>
            </div>
            <div className = 'submit'>
                        Book Appointment
             </div>
        </div>
    )
}

export default Profile
