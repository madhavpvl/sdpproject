import React from 'react'
import Footer from '../Footer'
import ImgSlider from '../imgSlider/ImgSlider'
import "./Home.css"
function Home() {
    return (
        <div>
            <ImgSlider />
            {/* <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1856&q=80" /> */}
            <section className="left-right-section">
                <div className="text">
                    <h1>Health Care and Well-being System</h1>
                    <h3>Health care is one of the topmost prioritized business systems in this whole world. Growth in this field is too high if we work on it properly. Health care is nothing but taking care of the patient before the operation/surgery or after the operation/surgery.</h3><br/>
                    <h3>It plays a major role in the hospital because along with the doctor the facilities of the hospital need to be perfectly all right so that it attracts more people to join this particular hospital.</h3>
                </div>
                <div className="image">
                        <img src="/images/hospital1.png" alt=""/>
                </div>
            
            </section>
            <section className="left-right-section">
            <div className="image">
                        <img src="/images/hospital2.png" alt=""/>
                </div>
                <div className="text">
                    <h1>The study of the target users</h1>
                    <h3>Our business system's main target group is the patients who come to that hospital.Our main aim is to reduce the waiting time of the patient in any hospital.</h3><br/>
                    <h3>We are thinking of an idea like even in the hospital itself they need to use our website to give the appointment so that from next time the people who stay at the reception will just say to the patient to book an appointment through this website and come to the hospital. By Applying the Design Thinking Techniques we can easily complete our research and also find the errors in our case study.</h3>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Home
