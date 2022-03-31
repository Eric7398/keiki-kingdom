import React from 'react'
import './AboutStyles.css'
import Footer from '../footer/Footer'
import eric_wang from '../../assets/team/eric_wang.jpg'
import Tilt from 'react-tilt'
import TransitionPage from '../TransitionPage'
import lego from '../../assets/image/facility.jpg'
import mission from '../../assets/image/mission.jpg'
import allkids from '../../assets/image/allkids.jpg'

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
                            <h3>We Play Loud</h3>
                            <p>We believe that Play is a way for children to use their creativity while developing their imagination, dexterity, and physical strength. Building a brighter and fun future for the children of tomorrow is why we set out to construct exciting playgrounds that will make you say WOW.</p>
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
                    <h1 className='title'>Activities</h1>
                    <div className="container">
                        <Tilt
                            options={{
                                max: 25,
                                speed: 0,
                                reverse: true,
                                perspective: 800,
                            }}
                        >
                            <div className="card-container">
                                <div className="card">
                                    <div className="content">
                                        <div className="imgBox">
                                            <img src="https://media.istockphoto.com/photos/baby-girl-in-ball-pool-picture-id488474835?k=20&m=488474835&s=612x612&w=0&h=FSr-R1aNc1zssbqhXaLgH7qbVAbXK97mMMJnx-8iU0Y=" alt="" />
                                        </div>

                                        <div className="contentBox">
                                            <h3>Ball Pit</h3>

                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aut ab iure voluptatem ut dolorem?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tilt>

                        <Tilt
                            options={{
                                max: 25,
                                speed: 0,
                                reverse: true,
                                perspective: 800,
                            }}
                        >


                            <div className="card-container">
                                <div className="card">
                                    <div className="content">
                                        <div className="imgBox">
                                            <img src="https://discountplaygroundsupply.com/product_images/uploaded_images/discountplaygroundsupply-seotool-16741-abriefhistory-blogbanner1.jpg" alt="" />
                                        </div>

                                        <div className="contentBox">
                                            <h3>SandBox</h3>

                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis mollitia alias ab?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tilt>

                        <Tilt

                            options={{
                                max: 25,
                                speed: 0,
                                reverse: true,
                                perspective: 800,
                            }}
                        >
                            <div className="card-container">
                                <div className="card">
                                    <div className="content">
                                        <div className="imgBox">
                                            <img src="https://i.ytimg.com/vi/PtqcYYktXHk/maxresdefault.jpg" alt="" />
                                        </div>

                                        <div className="contentBox">
                                            <h3>Carousel</h3>

                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima distinctio reprehenderit autem!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tilt>

                        <Tilt

                            options={{
                                max: 25,
                                speed: 0,
                                reverse: true,
                                perspective: 800,
                            }}
                        >
                            <div className="card-container">
                                <div className="card">
                                    <div className="content">
                                        <div className="imgBox">
                                            <img src="https://static.wixstatic.com/media/f7111f_3dd6d35819b847a78e23831d2bf3946d~mv2.jpg/v1/fill/w_652,h_539,al_c,q_90/f7111f_3dd6d35819b847a78e23831d2bf3946d~mv2.jpg" alt="" />
                                        </div>

                                        <div className="contentBox">
                                            <h3>trampoline</h3>

                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sunt harum voluptate.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tilt>

                        <Tilt

                            options={{
                                max: 25,
                                speed: 0,
                                reverse: true,
                                perspective: 800,
                            }}
                        >
                            <div className="card-container">
                                <div className="card">
                                    <div className="content">
                                        <div className="imgBox">
                                            <img src="https://www.softplay.com/wp-content/uploads/2015/03/triple-wave-slide-1.jpg" alt="" />
                                        </div>

                                        <div className="contentBox">
                                            <h3>Slides</h3>

                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam minima similique velit!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tilt>

                        <Tilt
                            className="test"
                            options={{
                                max: 25,
                                speed: 0,
                                reverse: true,
                                perspective: 800,
                            }}
                        >
                            <div className="card-container">
                                <div className="card">
                                    <div className="content">
                                        <div className="imgBox">
                                            <img src="https://senderoneclimbing.com/wp-content/uploads/2019/09/Youth-Program-LAX.jpg" alt="" />
                                        </div>

                                        <div className="contentBox">
                                            <h3>Rock Climbing</h3>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, repudiandae voluptatum! Perspiciatis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tilt>

                    </div>

                </div>
                <Footer />
            </TransitionPage>
        </>
    )
}

export default About