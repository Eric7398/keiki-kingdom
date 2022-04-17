import React, { useState } from 'react'
import Footer from '../footer/Footer'
import TransitionPage from '../TransitionPage'
import './RulesStyles.css'
import useCollapse from 'react-collapsed';
import { FaPlus, FaMinus } from "react-icons/fa";
import { rule } from '../../data/rule'
import BallParticle from '../particles/ball'
import WebParticle from '../particles/web'
import BubbleParticle from '../particles/bubble'

function Section(props) {
    const config = {
        // defaultExpanded: props.defaultExpanded || false,
        // collapsedHeight: props.collapsedHeight || 0
        duration: 200,

    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
    return (
        <div className="collapsible">
            <div className="collapse-header"
                style={isExpanded
                    ? { backgroundColor: 'var(--primary-color)' }
                    : { backgroundColor: 'white' }
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

const Rules = () => {

    const [bubble, setBubble] = useState(false)
    const [webs, setWebs] = useState(false)
    const [ball, setBall] = useState(false)

    const bubbleToggle = () => {
        setWebs(false)
        setBall(false)

        setBubble(!bubble)
    }
    const websToggle = () => {
        setBubble(false)
        setBall(false)

        setWebs(!webs)
    }
    const ballToggle = () => {
        setWebs(false)
        setBubble(false)

        setBall(!ball)
    }


    return (
        <>
            <TransitionPage>

                <div className='rules'>
                    {bubble &&
                        <BubbleParticle />
                    }

                    {webs &&
                        <WebParticle />
                    }

                    {ball &&
                        <BallParticle />
                    }

                    <div className="w wave"></div>
                    <div className="w wave2"></div>
                    <div className="w wave3"></div>
                    <div className="w wave4"></div>
                    <div className="rules-desc">

                        <h1>Rules</h1>
                        <div className="toggle">
                            <div className='toggle-group'>
                                <p>Bubbles</p>
                                <label className='switch'>
                                    <input type="checkbox" onChange={bubbleToggle} checked={bubble} />
                                    <span className="slider" />
                                </label>
                            </div>
                            <div className='toggle-group'>
                                <p>Balls</p>
                                <label className='switch'>
                                    <input type="checkbox" onChange={ballToggle} checked={ball} />
                                    <span className="slider" />
                                </label>
                            </div>
                            <div className='toggle-group'>
                                <p>Webs</p>
                                <label className='switch'>
                                    <input type="checkbox" onChange={websToggle} checked={webs} />
                                    <span className="slider" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='content'>

                        {rule.map((item, idx) =>
                            <Section key={idx} title={item.title}>
                                <p>{item.description}</p>
                            </Section>
                        )}

                    </div>

                </div>
                <Footer />
            </TransitionPage>
        </>
    )
}

export default Rules