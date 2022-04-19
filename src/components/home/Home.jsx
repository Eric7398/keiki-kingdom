import React, { useEffect, useState } from 'react'
import './HomeStyles.css'
import character from '../../assets/character/character.png'
import { Link } from 'react-router-dom'
import TransitionPage from '../TransitionPage'
import StarsParticle from '../particles/star'
import SnowParticle from '../particles/snow'
import ConfettiParticle from '../particles/confetti'


const Home = () => {
    const [stars, setStars] = useState(false)
    const [snow, setSnow] = useState(false)
    const [confetti, setConfetti] = useState(false)

    const [hours, setHours] = useState(0)
    const [days, setDays] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const starsToggle = () => {
        setSnow(false)
        setConfetti(false)
        setStars(!stars)
    }
    const snowToggle = () => {
        setStars(false)
        setConfetti(false)
        setSnow(!snow)
    }
    const confettiToggle = () => {
        setStars(false)
        setSnow(false)
        setConfetti(!confetti)
    }


    useEffect(() => {
        let date = ('july 3, 2022 00:00:00')
        let countDate = new Date(date).getTime();
        let interval = setInterval(() => {
            let now = new Date().getTime();
            let distance = countDate - now;
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, [])


    return (

        <>
            <TransitionPage>
                <div className='home'>
                    <div className="image">
                        <img src={character} alt="" />

                    </div>
                    {stars && <StarsParticle />}

                    {snow && <SnowParticle />}

                    {confetti && <ConfettiParticle />}

                    <div className="toggle">
                        <div className='toggle-group'>
                            <p>Stars</p>
                            <label className='switch'>
                                <input type="checkbox" onChange={starsToggle} checked={stars} />
                                <span className="slider" />
                            </label>
                        </div>
                        <div className='toggle-group'>
                            <p>Snow</p>
                            <label className='switch'>
                                <input type="checkbox" onChange={snowToggle} checked={snow} />
                                <span className="slider" />
                            </label>
                        </div>
                        <div className='toggle-group'>
                            <p>Party</p>
                            <label className='switch'>
                                <input type="checkbox" onChange={confettiToggle} checked={confetti} />
                                <span className="slider" />
                            </label>
                        </div>
                    </div>

                    <div className="content">

                        <h1 className='bouncing-text'>
                            <span className='orange one'>K</span>
                            <span className='blue two'>E</span>
                            <span className='green three'>I</span>
                            <span className='orange four'>K</span>
                            <span className='green five'>I</span>
                            {' '}
                            <span className='orange six'>K</span>
                            <span className='green seven'>I</span>
                            <span className='yellow eight'>N</span>
                            <span className='pink nine'>G</span>
                            <span className='teal ten'>D</span>
                            <span className='lightpink eleven'>O</span>
                            <span className='hotpink twelve'>M</span>
                        </h1>
                        <h1 className='static-text'>
                            <span className='orange'>K</span>
                            <span className='blue'>E</span>
                            <span className='green'>I</span>
                            <span className='orange'>K</span>
                            <span className='green'>I</span>
                            {' '}
                            <span className='orange'>K</span>
                            <span className='green'>I</span>
                            <span className='yellow'>N</span>
                            <span className='pink'>G</span>
                            <span className='teal'>D</span>
                            <span className='lightpink'>O</span>
                            <span className='hotpink'>M</span></h1>

                        <p>Time spent playing with your children is never wasted</p>
                        <Link to='about'>
                            <button className='btn'>Learn More</button>
                        </Link>

                        <h2>COMING SOON!</h2>
                        <div className="countdown">
                            <div className="box">
                                <h3 id="days">{days}</h3>
                                <span className='days'>DAYS</span>
                            </div>
                            <div className="box">
                                <h3 id="hours">{hours}</h3>
                                <span className='hours'>HOURS</span>
                            </div>
                            <div className="box">
                                <h3 id="minutes">{minutes}</h3>
                                <span className='minutes'>MINUTES</span>
                            </div>
                            <div className="box">
                                <h3 id="seconds">{seconds}</h3>
                                <span className='seconds'>SECONDS</span>
                            </div>

                        </div>

                    </div>
                </div>
            </TransitionPage>
        </>
    )
}

export default Home