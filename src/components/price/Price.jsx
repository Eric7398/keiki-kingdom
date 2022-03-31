import React from 'react'
import Footer from '../footer/Footer'
import TransitionPage from '../TransitionPage'
import useCollapse from 'react-collapsed';
import { FaPlus, FaMinus } from "react-icons/fa";

import './PriceStyles.css'

function Section(props) {
    const config = {
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
    return (
        <div className="collapsible">
            <div className="collapse-header"
                style={isExpanded
                    ? { backgroundColor: 'white' }
                    : { backgroundColor: 'rgb(200, 200, 200)' }
                }
                {...getToggleProps()}>
                <div className="collapse-icon">
                    {isExpanded ? <FaMinus /> : <FaPlus />}
                </div>
                <div className="collapse-title"><h3>{props.title}</h3></div>
            </div>
            <div {...getCollapseProps()}>
                <div className="collapse-content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

const Price = () => {
    return (
        <>
            <TransitionPage>

                <div id='price-header'>
                    <div className='price-desc'>

                        <h1 className='title'>Prices</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veritatis accusamus magni numquam maxime dolor totam eligendi accusantium. Rerum molestiae, perferendis iusto ab repellat iste vel saepe in id expedita.</p>
                    </div>
                    <div className="container">
                        <h2>Check out our prices below!</h2>
                        <div className="content">
                            <button><a href="#admission">Admission</a></button>
                            <button><a href="#passes">Passes</a></button>
                            <button><a href="#party">Party Rooms</a></button>
                        </div>
                    </div>
                </div>


                <div id="admission">
                    <h1 className='title'>General Admissions</h1>
                    <p>Please note due to covid restrictions blah blah blah</p>
                    <div className="container">
                        <div className="content">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>2 Hours</th>
                                        <th>Entire Day</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='td1'><strong>Adult and Children</strong></td>
                                        <td>$20.00</td>
                                        <td>$30.00</td>
                                    </tr>
                                    <tr>
                                        <td className='td1'><strong>Additional Children</strong></td>
                                        <td>$10.00</td>
                                        <td>$15.00</td>
                                    </tr>
                                    <tr>
                                        <td className='td1'><strong>Additional Adult</strong></td>
                                        <td>$10.00</td>
                                        <td>$15.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* EXPANDABLE MENU */}
                            <div className="expand-menu">

                                <Section title="What about infants?">
                                    <p>Toddlers age 1 and under may blah blah blah</p>
                                </Section>
                                <Section title="What about other caregivers/guardians?">
                                    <p>Adults must pay if blah blah</p>
                                </Section>

                            </div>

                        </div>
                        <img src="https://i.ytimg.com/vi/NYwkGWAEpG8/maxresdefault.jpg" alt="" />
                    </div>
                </div>
                <hr />

                <div id="passes">
                    <h1 className='title'>Monthly Passes</h1>
                    <div className="container">
                        <div className="content">

                        </div>
                    </div>
                </div>

                <div id="party">
                    <h1 className='title'>Reserve a Party Room!</h1>
                    <div className="container">
                        <div className="content">

                        </div>
                    </div>
                </div>

                <Footer />
            </TransitionPage>
        </>
    )
}

export default Price