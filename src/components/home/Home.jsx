import React from 'react'
import './HomeStyles.css'
import character from '../../assets/character/character.png'
import { Link } from 'react-router-dom'
import TransitionPage from '../TransitionPage'


const Home = () => {

    let date = ('july 3, 2022 00:00:00')

    let countDate = new Date(date).getTime();

    function countDown() {
        let now = new Date().getTime();
        let distance = countDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }

    setInterval(() => {
        countDown();
    }, 1000)



    return (
        <>
            <TransitionPage>

                <div className='home'>
                    <div className="container">
                        <div className="content">
                            <h1 className='bouncing-text title'>
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
                            <p>Time spent playing with your children are never wasted</p>
                            <Link to='about'>
                                <button className='btn'>Learn More</button>
                            </Link>
                            <h2 >COMING SOON!</h2>
                            <div className="countdown">
                                <div className="box">
                                    <h3 id="days">00</h3>
                                    <span className='days'>DAYS</span>
                                </div>
                                <div className="box">
                                    <h3 id="hours">00</h3>
                                    <span className='hours'>HOURS</span>
                                </div>
                                <div className="box">
                                    <h3 id="minutes">00</h3>
                                    <span className='minutes'>MINUTES</span>
                                </div>
                                <div className="box">
                                    <h3 id="seconds">00</h3>
                                    <span className='seconds'>SECONDS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src={character} alt="" />
                    </div>

                </div>
            </TransitionPage>
        </>
    )
}

export default Home