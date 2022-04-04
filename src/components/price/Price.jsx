import React from 'react'
import Footer from '../footer/Footer'
import TransitionPage from '../TransitionPage'
import { FaArrowDown } from "react-icons/fa";

import './PriceStyles.css'
import { Link } from 'react-router-dom';





const Price = () => {
    // const { ref, inView } = useInView({
    //     threshold: .5
    // });
    // const animation = useAnimation();


    // useEffect(() => {
    //     if (inView) {
    //         animation.start({
    //             opacity: 1,
    //             x: 0,
    //             transition: { type: 'spring', duration: 1, bounce: .3 }
    //         });
    //     }
    //     if (!inView) {
    //         animation.start({
    //             x: '-100vw',
    //             opacity: 0,
    //         });
    //     }
    // }, [inView])


    return (
        <div className='price'>
            <TransitionPage>

                <div id='price-header'>
                    <div className='price-desc'>
                        <h1 className='title'>Prices</h1>

                        <h2>If you have any questions please check out the <Link to="/rules"><span className='link-blue'>rules</span></Link> or <Link to="/contact"><span className='link-blue'>contact</span></Link> us!</h2>
                    </div>
                    <div className="container">
                        <h2><FaArrowDown className='arrow-down' /> Check Prices Below <FaArrowDown className='arrow-down' /></h2>
                        <div className='media-arrow'><FaArrowDown className='arrow-down' /> <FaArrowDown className='arrow-down' /></div>
                        <div className="content">
                            <button onClick={() => window.location.replace("/price#admission")}>Admission</button>
                            <button onClick={() => window.location.replace("/price#party")}>Party Rooms</button>

                        </div>
                    </div>
                </div>


                <div id="admission">
                    <div className="container">
                        <h1 className='title'>General Admissions</h1>
                        <p>Parents must accompany their children!</p>
                        <div className="content">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Children</th>
                                        <th>Adult</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='td1'><strong>2 Hours</strong></td>
                                        <td>$22</td>
                                        <td>$5</td>
                                    </tr>
                                    <tr>
                                        <td className='td1'><strong>3 Hours</strong></td>
                                        <td>$30</td>
                                        <td>$5</td>
                                    </tr>
                                    <tr>
                                        <td className='td1'><strong>4 Hours</strong></td>
                                        <td>$40</td>
                                        <td>$5</td>
                                    </tr>
                                    <tr>
                                        <td className='td1'><strong>5 Hours</strong></td>
                                        <td>$45</td>
                                        <td>$5</td>
                                    </tr>
                                    <tr>
                                        <td className='td1'><strong>Monthly Membership</strong><p className='note'><strong>Monday to Friday Only<br />No Holidays/Weekends</strong></p>
                                        </td>
                                        <td>$150</td>
                                        <td>$30</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p><strong>Please Note:</strong> </p>
                            <p>Children age: 10 months to 13 years old</p>
                            <p>Non-paid infant must be in car seat or carried</p>
                            <br />
                            <p>Children age 14 years and above are considered as an adult and are not allowed to jump or play</p>
                        </div>
                    </div>
                </div>
                <hr />


                <div id="party">
                    <div className="container">
                        <h1 className='title'>Reserve a Party Room!</h1>
                        <p>Come book a private party room! It's the perfect place to celebrate birthdays and event for your children!</p>
                        <div className="content">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Room</th>
                                        <th>Children</th>
                                        <th>Adult</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td className='td1'><strong>3 Hours</strong></td>
                                        <td>$400</td>
                                        <td>$30</td>
                                        <td>$5</td>
                                    </tr>
                                    <tr>
                                        <td className='td1'><strong>4 Hours</strong></td>
                                        <td>$500</td>
                                        <td>$40</td>
                                        <td>$5</td>
                                    </tr>
                                    <tr>
                                        <td className='td1'><strong>5 Hours</strong></td>
                                        <td>$600</td>
                                        <td>$45</td>
                                        <td>$5</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p><strong>Please Note:</strong> </p>
                            <p>Any cancellation must be made 24 hours before blah blah blah</p><br />
                            <p>List of things included and please contact us or check the rules page for futher information</p>
                        </div>
                    </div>
                </div>

                <Footer />
            </TransitionPage>
        </div>
    )
}

export default Price