import React, { useState } from 'react'
import "./qualification.css"
function Qualification() {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className='qualification section'>
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My personel journey</span>
            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'}
                        onClick={() => toggleTab(1)}
                    >
                        <i className='uil uil-graduation-cap qualification__icon'

                        ></i>
                        Education
                    </div>
                    <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'}
                        onClick={() => toggleTab(2)}>
                        <i className='uil uil-briefcase-alt qualification__icon'></i>
                        Experience
                    </div>
                </div>
                <div className='qualification__sections'>
                    <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content '}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualificatio__title'>B.Tech in Information Technology</h3>
                                <span className='qualification__subtitle'>Axis institute of technology and management </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>
                                    2019-2023
                                </div>

                            </div>
                            <div >
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                        <div className='qualification__data'>
                            <div></div>
                            <div >
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualificatio__title'>12th</h3>
                                <span className='qualification__subtitle'>Doon Public School</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>
                                    2017-2018
                                </div>

                            </div>

                        </div>


                        {/* another  */}
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualificatio__title'>10th</h3>
                                <span className='qualification__subtitle'>St John Sr Sec School</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>
                                    2016-2017
                                </div>

                            </div>
                            <div >
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                        {/* <div className='qualification__data'>
                            <div></div>
                            <div >
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualificatio__title'>UX Expert</h3>
                                <span className='qualification__subtitle'>Axis institute of technology and management </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>
                                    2017-2028
                                </div>

                            </div>

                        </div> */}
                    </div>
                    {/* Another 0 */}


                    <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content '}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualificatio__title'>MERN Stack Intern</h3>
                                <span className='qualification__subtitle'>DevTown</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>
                                    2021-2022
                                </div>

                            </div>
                            <div >
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                        {/* <div className='qualification__data'>
                            <div></div>
                            <div >
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualificatio__title'>Art Director</h3>
                                <span className='qualification__subtitle'>Axis institute of technology and management </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>
                                    2020-2021
                                </div>

                            </div>

                        </div> */}


                        {/* another  */}
                        {/* <div className='qualification__data'>
                            <div>
                                <h3 className='qualificatio__title'>Web Development</h3>
                                <span className='qualification__subtitle'>Axis institute of technology and management </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>
                                    2019-2020
                                </div>

                            </div>
                            <div >
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
