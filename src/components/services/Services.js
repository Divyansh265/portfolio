import React, { useState } from 'react'
import "./services.css"
function Services() {
    const [toggleState, setToggleState] = useState(0)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className='services section' id='services'>
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>May i offer</span>
            <div className='services__container container grid'>
                <div className='services__content'>
                    <div>
                        <i className='uil uil-web-grid services__icon'></i>
                        <h3 className='services__title'>Frontend <br /> Developer</h3>
                    </div>
                    <span className='services__button' onClick={() => toggleTab(1)}>View More <i className='uil uil-arrow-right services__button-icon'></i></span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                            <h3 className='services__modal-title'>Frontend Developer</h3>
                            <p className='services__modal-description'>
                                Possessing a 6-month MERN stack internship, I offer robust frontend skills fused with innovative development prowess.</p>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I develop the user interface .
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Expertise in HTML, CSS, and JavaScript
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Proficiency in popular frameworks (e.g., React, Angular)
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Ensures seamless cross-browser functionality
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Strong problem-solving & collaboration skills
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className='services__content'>
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className='services__title'>Ui/Ux <br /> Designer</h3>
                    </div>
                    <span className='services__button' onClick={() => toggleTab(2)}>View More <i className='uil uil-arrow-right services__button-icon'></i></span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                            <h3 className='services__modal-title'>Ui/Ux  Designer</h3>
                            <p className='services__modal-description'>Services with more than 3 year of experience. Providing quality work to clients and companies</p>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I develop the user interface .
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Web Page development
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I create ux element interaction
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I position your company brand
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Design and mockup of products for companies.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div> */}
                <div className='services__content'>
                    <div>
                        <i className='uil uil-edit services__icon'></i>
                        <h3 className='services__title'>Fullstack <br /> Developer</h3>
                    </div>
                    <span className='services__button' onClick={() => toggleTab(3)}>View More <i className='uil uil-arrow-right services__button-icon'></i></span>
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                            <h3 className='services__modal-title'>Fullstack Developer</h3>
                            <p className='services__modal-description'>With a 6-month MERN stack internship, I bring dynamic full-stack expertise, blending frontend finesse and backend proficiency.</p>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Expertise in MongoDB for NoSQL database management
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Proficiency in Express.js for backend web development
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Mastery of React for building dynamic user interfaces
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Nodejs expertise:Executes server-side JavaScript proficiently.
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Proficient in full-stack MERN app development.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
