import React from 'react'
import './AboutStyles.css'
import Footer from '../footer/Footer'
import Tilt from 'react-tilt'
import TransitionPage from '../TransitionPage'
import lego from '../../assets/image/facility.jpg'
import mission from '../../assets/image/mission.jpg'
import allkids from '../../assets/image/allkids.jpg'
import { activity } from '../../data/activity'

const About = () => {
    return (
        <>
            <TransitionPage>
                <div className='about'>


                    <h1 className='title'>About Us</h1>
                    <div className="container">
                        <div className="content img missionImg">
                            <img src={mission} alt="" />
                        </div>
                        <div className="content mission">
                            <h4>Our Mission</h4>
                            <h3>We Play to Remember</h3>
                            <p>We believe that Play is a way for children to use their creativity while developing their imagination, dexterity, and physical strength. Building a brighter and fun future for the children of tomorrow is why we set out to construct exciting playgrounds that will impress even you.</p>
                        </div>
                    </div>


                    <div className="container container-facility">
                        <div className="content facility">
                            <h4>Our Facility</h4>
                            <h3>What We Offer</h3>
                            <p>Our playground is a large indoor playground designed specifically to keep your children happy for hours with tons of activies to do such as: large ball pits, sandbox playground, carousels, trampolines, slides, rock climbing and much more!</p>

                        </div>
                        <div className="content img facilityImg">
                            <img src={lego} alt="" />
                        </div>
                    </div>


                    <div className="container">
                        <div className="content img missionImg">
                            <img src={allkids} alt="" />
                        </div>
                        <div className="content mission">
                            <h4>Fun For All</h4>
                            <h3>Play Areas For All Kids</h3>
                            <p>Our main indoor playground is for children 51 inches and below. However, we have a special gated toddler section with soft play rides specifically designed for them. The toddler area is isolated quite nicely so older kids aren’t in the way of your small infant/toddler as they crawl and explore.</p>
                        </div>
                    </div>

                </div>





                <div id='team' className="team">
                    <div className="container">
                        <h1 className='title'>Activities</h1>
                        <div className="main-content">

                            {activity.map((activity, idx) =>

                                <Tilt
                                    options={{
                                        max: 25,
                                        // speed: 0,
                                        reverse: true,
                                        perspective: 1000,
                                    }}
                                    key={idx}
                                >
                                    <div className="card-container">
                                        <div className="card">
                                            <div className="content">
                                                <div className="imgBox">
                                                    <img src={activity.image} alt="" />
                                                </div>

                                                <div className="contentBox">
                                                    <h2>{activity.title}</h2>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>

                            )}

                        </div>

                    </div>

                </div>
                <Footer />
            </TransitionPage>
        </>
    )
}

export default About