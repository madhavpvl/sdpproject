import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Appointments from './components/Appointments/Appointments'
import Consultancy from './components/Consultancy/Consultancy'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import "./App.css"
import Loginpage from './components/user/Loginpage'
import Sighnuppages from './components/user/Sighnuppages'

function App() {
    const profiles = [
        {
            name: 'Dr.Sudhakar Rao',
            gender: 'm',
            contact: 87904602356,
            specialisation: 'cardiologist'
        },
        {
            name: 'Dr.Prbhakar Rao',
            gender: 'm',
            contact: 87904602356,
            specialisation: 'cardiologist'
        },
        {
            name: 'Dr. Ram',
            gender: 'm',
            contact: 9826277322,
            specialisation: 'dentist'
        },
        {
            name: 'Dr. Sri Devi',
            gender: 'f',
            contact: 4560928382,
            specialisation: 'neurologist'
        },
        {
            name: 'Dr. Lalitha',
            gender: 'f',
            contact: 92883738492,
            specialisation: 'ent'
        },
        {
            name: 'Dr. Raj Sekhar',
            gender: 'm',
            contact: 829837461,
            specialisation: 'general'
        }
    ]
    return ( 
        <div>
           
            <Router>
                <div>
                    <Switch>
                  
                
                        <Route path='/appointments'>
                            <Header />
                            <Appointments />
                        </Route>
                        <Route path='/Login' >
                            <Header/>
                            <Loginpage/>
                     
                            </Route>
                            <Route path='/sighnup' >
                            <Header/>
                            <Sighnuppages/>
                     
                            </Route>
                        <Route path='/onlineconsultancy'>
                            <Header />
                            <Consultancy />
                        </Route>
                        <Route path='/cardio/profiles'>
                            <Header />
                            <Appointments />
                            <div className = "parent__card">
                            <div className="cards__profile">
                            {profiles.filter((value)=>{
                                return value.specialisation === 'cardiologist'
                            }).map(profile =><Profile name={profile.name} gender={profile.gender} specialisation={profile.specialisation} contact={profile.contact} />)}
                            </div>
                            </div>
                        </Route>
                        <Route path='/dentist/profiles'>
                            <Header />
                            <Appointments />
                            {profiles.filter((value)=>{
                                return value.specialisation === 'dentist'
                            }).map(profile => <Profile name={profile.name} gender={profile.gender} specialisation={profile.specialisation} contact={profile.contact} />)}
                        </Route>
                        <Route path='/ent/profiles'>
                            <Header />
                            <Appointments />
                            {profiles.filter((value)=>{
                                return value.specialisation === 'ent'
                            }).map(profile => <Profile name={profile.name} gender={profile.gender} specialisation={profile.specialisation} contact={profile.contact} />)}
                        </Route>
                        <Route path='/general/profiles'>
                            <Header />
                            <Appointments />
                            {profiles.filter((value)=>{
                                return value.specialisation === 'general'
                            }).map(profile => <Profile name={profile.name} gender={profile.gender} specialisation={profile.specialisation} contact={profile.contact} />)}
                        </Route>
                        <Route path='/neuro/profiles'>
                            <Header />
                            <Appointments />
                            {profiles.filter((value)=>{
                                return value.specialisation === 'neurologist'
                            }).map(profile => <Profile name={profile.name} gender={profile.gender} specialisation={profile.specialisation} contact={profile.contact} />)}
                        </Route>
                        <Route path='/'>
                            <Header />
                            <Home />
                        </Route>
                       
                        
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App