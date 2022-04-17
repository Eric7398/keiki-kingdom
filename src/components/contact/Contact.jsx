import React, { useRef, useState } from 'react';
import Footer from '../footer/Footer'
import TransitionPage from '../TransitionPage'
import './ContactStyles.css'
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import GoogleMap from './GoogleMap.jsx'

import { motion } from 'framer-motion'


const Contact = () => {
    const [success, setSuccess] = useState(false)
    const location = {
        lat: 21.299760,
        lng: -157.837200,
    }

    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f7qut05', 'Keiki', form.current, 'user_hWvLrmHqw4gG9NX2HMToy')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert('Something went wrong, please try again later')
            });
    }



    return (
        <>
            <TransitionPage>

                <div className='contact'>
                    <div className="container">
                        <h1>Contact</h1>
                        <h3>Reach out with any questions or comments!</h3>
                        <div className="main-content">

                            <motion.div className="content-form content"
                                initial={{ x: '-100vw' }}
                                animate={{ x: 0 }}
                                transition={{ type: 'spring', duration: 2 }}
                            >
                                {success ? <h2 className='success'>Thank you for your message!</h2> :
                                    <form ref={form} onSubmit={handleSubmit}>
                                        <p>Fields marked with an <span>*</span> are required</p>
                                        <label> What is this regarding? <span>*</span>
                                            <select name='reason'>
                                                <option defaultValue="general">General Question or Comment</option>
                                                <option value="party">Book a Private Party</option>
                                                <option value="employment">Employment</option>
                                            </select>
                                        </label>
                                        <label>Name <span>*</span>
                                            <input type="text" name="name" className='input' required placeholder='Name' />
                                        </label>
                                        {/* <label>Phone or Email<span>*</span>
                                            <input type="radio" className='input' value="Phone" /> Phone
                                            <input type="radio" className='input' value="Email" /> Email
                                        </label> */}

                                        <label>Email <span>*</span>
                                            <input type="email" name="email" className='input' required placeholder='Email' />
                                        </label>
                                        <label>Phone <span>*</span>
                                            <input type="tel" name="phone" className='input' required placeholder='Phone' />
                                        </label>
                                        <label>Message <span>*</span>
                                            <textarea type="text" name="message" className='input-message' required placeholder='Your Message Here...' />
                                        </label>
                                        <div className="recaptcha">

                                            <ReCAPTCHA
                                                sitekey="6LdHNjYfAAAAAF9g8-L8hkyTDWws-YCz3ux0G_DD"
                                            />
                                        </div>

                                        <button>Submit</button>
                                    </form>

                                }


                            </motion.div>
                            <motion.div className="content-info content"
                                initial={{ x: '100vw' }}
                                animate={{ x: 0 }}
                                transition={{ type: 'spring', duration: 2 }}
                            >
                                <div className="call">
                                    <h2>Call Us</h2>
                                    <h3 className='phone-number'>(808)123-4567</h3>
                                </div>

                                <div className="find">
                                    <h2>Find Us</h2>
                                    <h3>123 Example Ave.<br /> Honolulu HI 90001</h3>
                                </div>
                                {/* <div className="social">
                                <h2>Socials</h2>
                                <FaInstagram /><FaFacebookSquare />
                            </div> */}


                                <div className="hours">
                                    <h2>Our Hours</h2>
                                    <h3>Mon - Thurs <br />10am - 6pm <br /> <br />
                                        Fri - Sun <br />10am - 7pm</h3>
                                </div>

                            </motion.div>
                        </div>
                        <div className="googlemap">
                            <GoogleMap location={location} />

                        </div>



                    </div>

                </div>
                <Footer />
            </TransitionPage>
        </>
    )
}

export default Contact