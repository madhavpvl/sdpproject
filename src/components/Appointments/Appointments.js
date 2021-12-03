import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Profile from '../Profile/Profile'
import "./Appointments.css"
function Appointments() {
    return ( 
        <div className ='appointments'>
            <h1>Services</h1>
            <div className = 'appoint'>
            <ButtonGroup orientation={'vertical'}>
                <Button className='cardio' href='/cardio/profiles'>
                    Cardiologist
                </Button>
                <Button href='/dentist/profiles'>
                    Dentist
                </Button>
                <Button href='/ortho/profiles'>
                    Orthologist
                </Button>
                <Button href='/neuro/profiles'>
                    Neurologoist
                </Button>
                <Button href='/ent/profiles'>
                    ENT Specialist
                </Button>
                <Button href='/general/profiles'>
                    General Physician
                </Button>
            </ButtonGroup>
            </div>
        </div>
    )
}

export default Appointments