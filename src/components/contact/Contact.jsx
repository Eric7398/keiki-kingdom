import React from 'react'
import Footer from '../footer/Footer'
import TransitionPage from '../TransitionPage'
import './ContactStyles.css'

const Contact = () => {
    return (
        <>
            <TransitionPage>

                <div className='contact'>
                    <h1>Contact</h1>
                    <h3>Reach out with any questions or comments!</h3>
                    <div className="container">
                        <div className="content-form content">
                            <form>
                                <label>Name:
                                    <input type="text" name="name" />
                                </label>
                                <label>Email:
                                    <input type="text" name="name" />
                                </label>
                                <label>Phone:
                                    <input type="text" name="name" />
                                </label>
                                <label>Message:
                                    <input type="text" name="name" />
                                </label>

                                <button value="Submit">Submit</button>
                            </form>

                        </div>
                        <div className="content-info content">
                            <div className="call">
                                <h2>Call Us</h2>
                                <h3>(808) 123 - 4567</h3>
                            </div>

                            <div className="find">
                                <h2>Find Us</h2>
                                <h3>123 Example Ave.<br /> Honolulu HI 90001</h3>
                            </div>


                            <div className="hours">
                                <h2>Our Hours</h2>
                                <h3>Mon-Thurs <br />10am-6pm <br /> <br />
                                    Fri-Sun <br />10am-7pm</h3>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </TransitionPage>
        </>
    )
}

export default Contact