import React, { useEffect, useState } from 'react'
import './HomeStyles.css'
import character from '../../assets/character/character.png'
import { Link } from 'react-router-dom'
import TransitionPage from '../TransitionPage'
import Particles from "react-tsparticles";


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

                    {stars && <Particles
                        options={{
                            "autoPlay": true,
                            "backgroundMask": {
                                "composite": "destination-out",
                                "cover": {
                                    "color": {
                                        "value": "#fff"
                                    },
                                    "opacity": 1
                                },
                                "enable": false
                            },
                            "fullScreen": {
                                "enable": true,
                                "zIndex": 0
                            },
                            "detectRetina": true,
                            "duration": 0,
                            "fpsLimit": 120,
                            "interactivity": {
                                "detectsOn": "window",
                                "events": {
                                    "onClick": {
                                        "enable": true,
                                        "mode": "push"
                                    },
                                    "onDiv": {
                                        "selectors": [],
                                        "enable": false,
                                        "mode": [],
                                        "type": "circle"
                                    },
                                    "onHover": {
                                        "enable": false,
                                        "mode": "repulse",
                                        "parallax": {
                                            "enable": false,
                                            "force": 1,
                                            "smooth": 10
                                        }
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "attract": {
                                        "distance": 200,
                                        "duration": 0.4,
                                        "easing": "ease-out-quad",
                                        "factor": 1,
                                        "maxSpeed": 50,
                                        "speed": 1
                                    },
                                    "bounce": {
                                        "distance": 200
                                    },
                                    "bubble": {
                                        "distance": 400,
                                        "duration": 2,
                                        "mix": false,
                                        "opacity": 0.8,
                                        "size": 40
                                    },
                                    "connect": {
                                        "distance": 80,
                                        "links": {
                                            "opacity": 0.5
                                        },
                                        "radius": 60
                                    },
                                    "grab": {
                                        "distance": 400,
                                        "links": {
                                            "blink": false,
                                            "consent": false,
                                            "opacity": 1
                                        }
                                    },
                                    "light": {
                                        "area": {
                                            "gradient": {
                                                "start": {
                                                    "value": "#ffffff"
                                                },
                                                "stop": {
                                                    "value": "#000000"
                                                }
                                            },
                                            "radius": 1000
                                        },
                                        "shadow": {
                                            "color": {
                                                "value": "#000000"
                                            },
                                            "length": 2000
                                        }
                                    },
                                    "push": {
                                        "default": true,
                                        "groups": [
                                            "z5000",
                                            "z7500",
                                            "z2500",
                                            "z1000"
                                        ],
                                        "quantity": 2
                                    },
                                    "remove": {
                                        "quantity": 2
                                    },
                                    "repulse": {
                                        "distance": 200,
                                        "duration": 0.4,
                                        "factor": 100,
                                        "speed": 1,
                                        "maxSpeed": 50,
                                        "easing": "ease-out-quad"
                                    },
                                    "slow": {
                                        "factor": 3,
                                        "radius": 200
                                    },
                                    "trail": {
                                        "delay": 1,
                                        "pauseOnStop": false,
                                        "quantity": 1
                                    }
                                }
                            },
                            "manualParticles": [],
                            "motion": {
                                "disable": false,
                                "reduce": {
                                    "factor": 4,
                                    "value": true
                                }
                            },
                            "particles": {
                                "bounce": {
                                    "horizontal": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0.1
                                        },
                                        "value": 1
                                    },
                                    "vertical": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0.1
                                        },
                                        "value": 1
                                    }
                                },
                                "collisions": {
                                    "bounce": {
                                        "horizontal": {
                                            "random": {
                                                "enable": false,
                                                "minimumValue": 0.1
                                            },
                                            "value": 1
                                        },
                                        "vertical": {
                                            "random": {
                                                "enable": false,
                                                "minimumValue": 0.1
                                            },
                                            "value": 1
                                        }
                                    },
                                    "enable": false,
                                    "mode": "bounce",
                                    "overlap": {
                                        "enable": true,
                                        "retries": 0
                                    }
                                },
                                "color": {
                                    "value": "#fff",
                                    "animation": {
                                        "h": {
                                            "count": 0,
                                            "enable": false,
                                            "offset": 0,
                                            "speed": 20,
                                            "sync": true
                                        },
                                        "s": {
                                            "count": 0,
                                            "enable": false,
                                            "offset": 0,
                                            "speed": 1,
                                            "sync": true
                                        },
                                        "l": {
                                            "count": 0,
                                            "enable": false,
                                            "offset": 0,
                                            "speed": 1,
                                            "sync": true
                                        }
                                    }
                                },
                                "destroy": {
                                    "mode": "none",
                                    "split": {
                                        "count": 1,
                                        "factor": {
                                            "random": {
                                                "enable": false,
                                                "minimumValue": 0
                                            },
                                            "value": 3
                                        },
                                        "rate": {
                                            "random": {
                                                "enable": false,
                                                "minimumValue": 0
                                            },
                                            "value": {
                                                "min": 4,
                                                "max": 9
                                            }
                                        },
                                        "sizeOffset": true
                                    }
                                },
                                "gradient": [],
                                "groups": {
                                    "z5000": {
                                        "number": {
                                            "value": 70
                                        },
                                        "zIndex": {
                                            "value": 50
                                        }
                                    },
                                    "z7500": {
                                        "number": {
                                            "value": 30
                                        },
                                        "zIndex": {
                                            "value": 75
                                        }
                                    },
                                    "z2500": {
                                        "number": {
                                            "value": 50
                                        },
                                        "zIndex": {
                                            "value": 25
                                        }
                                    },
                                    "z1000": {
                                        "number": {
                                            "value": 40
                                        },
                                        "zIndex": {
                                            "value": 10
                                        }
                                    }
                                },
                                "life": {
                                    "count": 0,
                                    "delay": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0
                                        },
                                        "value": 0,
                                        "sync": false
                                    },
                                    "duration": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0.0001
                                        },
                                        "value": 0,
                                        "sync": false
                                    }
                                },
                                "links": {
                                    "blink": false,
                                    "color": {
                                        "value": "#ffffff"
                                    },
                                    "consent": false,
                                    "distance": 100,
                                    "enable": false,
                                    "frequency": 1,
                                    "opacity": 0.4,
                                    "shadow": {
                                        "blur": 5,
                                        "color": {
                                            "value": "#00ff00"
                                        },
                                        "enable": false
                                    },
                                    "triangles": {
                                        "enable": false,
                                        "frequency": 1
                                    },
                                    "width": 1,
                                    "warp": false
                                },
                                "move": {
                                    "angle": {
                                        "offset": 0,
                                        "value": 10
                                    },
                                    "attract": {
                                        "distance": 200,
                                        "enable": false,
                                        "rotate": {
                                            "x": 600,
                                            "y": 1200
                                        }
                                    },
                                    "decay": 0,
                                    "distance": {},
                                    "direction": "right",
                                    "drift": 0,
                                    "enable": true,
                                    "gravity": {
                                        "acceleration": 9.81,
                                        "enable": false,
                                        "inverse": false,
                                        "maxSpeed": 50
                                    },
                                    "path": {
                                        "clamp": true,
                                        "delay": {
                                            "random": {
                                                "enable": false,
                                                "minimumValue": 0
                                            },
                                            "value": 0
                                        },
                                        "enable": false,
                                        "options": {}
                                    },
                                    "outModes": {
                                        "default": "out",
                                        "bottom": "out",
                                        "left": "out",
                                        "right": "out",
                                        "top": "out"
                                    },
                                    "random": false,
                                    "size": false,
                                    "speed": 5,
                                    "spin": {
                                        "acceleration": 0,
                                        "enable": false
                                    },
                                    "straight": false,
                                    "trail": {
                                        "enable": false,
                                        "length": 10,
                                        "fillColor": {
                                            "value": "#000000"
                                        }
                                    },
                                    "vibrate": false,
                                    "warp": false
                                },
                                "number": {
                                    "density": {
                                        "enable": false,
                                        "area": 800,
                                        "factor": 1000
                                    },
                                    "limit": 0,
                                    "value": 200
                                },
                                "opacity": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.1
                                    },
                                    "value": 1,
                                    "animation": {
                                        "count": 0,
                                        "enable": false,
                                        "speed": 3,
                                        "sync": false,
                                        "destroy": "none",
                                        "startValue": "random",
                                        "minimumValue": 0.1
                                    }
                                },
                                "orbit": {
                                    "animation": {
                                        "count": 0,
                                        "enable": false,
                                        "speed": 1,
                                        "sync": false
                                    },
                                    "enable": false,
                                    "opacity": 1,
                                    "rotation": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0
                                        },
                                        "value": 45
                                    },
                                    "width": 1
                                },
                                "reduceDuplicates": false,
                                "repulse": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": 0,
                                    "enabled": false,
                                    "distance": 1,
                                    "duration": 1,
                                    "factor": 1,
                                    "speed": 1
                                },
                                "roll": {
                                    "darken": {
                                        "enable": false,
                                        "value": 0
                                    },
                                    "enable": false,
                                    "enlighten": {
                                        "enable": false,
                                        "value": 0
                                    },
                                    "mode": "vertical",
                                    "speed": 25
                                },
                                "rotate": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": 0,
                                    "animation": {
                                        "enable": false,
                                        "speed": 0,
                                        "sync": false
                                    },
                                    "direction": "clockwise",
                                    "path": false
                                },
                                "shadow": {
                                    "blur": 0,
                                    "color": {
                                        "value": "#000000"
                                    },
                                    "enable": false,
                                    "offset": {
                                        "x": 0,
                                        "y": 0
                                    }
                                },
                                "shape": {
                                    "options": {},
                                    "type": "circle"
                                },
                                "size": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 1
                                    },
                                    "value": 3,
                                    "animation": {
                                        "count": 0,
                                        "enable": false,
                                        "speed": 5,
                                        "sync": false,
                                        "destroy": "none",
                                        "startValue": "random"
                                    }
                                },
                                "stroke": {
                                    "width": 0
                                },
                                "tilt": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": 0,
                                    "animation": {
                                        "enable": false,
                                        "speed": 0,
                                        "sync": false
                                    },
                                    "direction": "clockwise",
                                    "enable": false
                                },
                                "twinkle": {
                                    "lines": {
                                        "enable": false,
                                        "frequency": 0.05,
                                        "opacity": 1
                                    },
                                    "particles": {
                                        "enable": false,
                                        "frequency": 0.05,
                                        "opacity": 1
                                    }
                                },
                                "wobble": {
                                    "distance": 5,
                                    "enable": false,
                                    "speed": 50
                                },
                                "zIndex": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": 5,
                                    "opacityRate": 0.5,
                                    "sizeRate": 1,
                                    "velocityRate": 1
                                }
                            },
                            "pauseOnBlur": true,
                            "pauseOnOutsideViewport": true,
                            "responsive": [],
                            "style": {},
                            "themes": [],
                            "zLayers": 100,
                            "emitters": {
                                "autoPlay": true,
                                "fill": true,
                                "life": {
                                    "wait": false
                                },
                                "rate": {
                                    "quantity": 1,
                                    "delay": 7
                                },
                                "shape": "square",
                                "startCount": 0,
                                "size": {
                                    "mode": "percent",
                                    "height": 0,
                                    "width": 0
                                },
                                "particles": {
                                    "shape": {
                                        "type": "images",
                                        "options": {
                                            "images": {
                                                "src": character,
                                                "width": 500,
                                                "height": 734
                                            }
                                        }
                                    },
                                    "size": {
                                        "value": 90
                                    },
                                    "move": {
                                        "speed": 10,
                                        "outModes": {
                                            "default": "none",
                                            "right": "destroy"
                                        },
                                        "straight": true
                                    },
                                    "zIndex": {
                                        "value": 0
                                    },
                                    "rotate": {
                                        "value": {
                                            "min": 0,
                                            "max": 360
                                        },
                                        "animation": {
                                            "enable": true,
                                            "speed": 10,
                                            "sync": true
                                        }
                                    }
                                },
                                "position": {
                                    "x": -5,
                                    "y": 55
                                }
                            }
                        }}
                    />}

                    {snow && <Particles
                        options={{
                            fpsLimit: 60,
                            interactivity: {
                                detectsOn: "canvas",
                                events: {
                                    onClick: { enable: true, mode: "repulse" },
                                    onHover: {
                                        enable: true,
                                        mode: "bubble",
                                        parallax: { enable: false, force: 2, smooth: 10 }
                                    },
                                    resize: true
                                },
                                modes: {
                                    bubble: {
                                        distance: 400,
                                        duration: 0.3,
                                        opacity: 1,
                                        size: 4,
                                        speed: 3
                                    },
                                    grab: { distance: 400, line_linked: { opacity: 0.5 } },
                                    push: { particles_nb: 4 },
                                    remove: { particles_nb: 2 },
                                    repulse: { distance: 200, duration: 0.4 }
                                }
                            },
                            particles: {
                                color: { value: "#fff" },
                                links: {
                                    color: "#ffffff",
                                    distance: 500,
                                    enable: false,
                                    opacity: 0.4,
                                    width: 2
                                },
                                move: {
                                    attract: { enable: false, rotateX: 600, rotateY: 1200 },
                                    direction: "bottom",
                                    enable: true,
                                    outMode: "out",
                                    random: false,
                                    size: true,
                                    speed: 4,
                                    straight: false
                                },
                                number: { density: { enable: true, area: 800 }, value: 88 },
                                opacity: {
                                    random: true,
                                    value: 0.5
                                },
                                shape: {
                                    type: "circle"
                                },
                                size: {
                                    random: true,
                                    value: 10
                                }
                            },
                            detectRetina: true
                        }}
                    />}

                    {confetti && <Particles
                        options={{
                            fullScreen: {
                                enable: true
                            },
                            particles: {
                                number: {
                                    value: 0
                                },
                                color: {
                                    value: ["#FFD401", "#FF9C1A", "#FF76D2", "#5BC6F6"]
                                },
                                shape: {
                                    type: ["circle", "square"]
                                },
                                opacity: {
                                    value: {
                                        max: 1,
                                        min: 0
                                    },
                                    animation: {
                                        enable: true,
                                        speed: 2,
                                        startValue: "max",
                                        destroy: "min"
                                    }
                                },
                                size: {
                                    value: { min: 5, max: 10 }
                                },
                                life: {
                                    duration: {
                                        sync: true,
                                        value: 5
                                    },
                                    count: 1
                                },
                                move: {
                                    enable: true,
                                    gravity: {
                                        enable: true,
                                        acceleration: 20
                                    },
                                    speed: { min: 50, max: 100 },
                                    drift: {
                                        min: -2,
                                        max: 2
                                    },
                                    decay: 0.05,
                                    direction: "none",
                                    outModes: {
                                        default: "destroy",
                                        top: "none"
                                    }
                                },
                                rotate: {
                                    value: {
                                        min: 0,
                                        max: 360
                                    },
                                    direction: "random",
                                    move: true,
                                    animation: {
                                        enable: true,
                                        speed: 60
                                    }
                                },
                                tilt: {
                                    direction: "random",
                                    enable: true,
                                    move: true,
                                    value: {
                                        min: 0,
                                        max: 360
                                    },
                                    animation: {
                                        enable: true,
                                        speed: 60
                                    }
                                },
                                roll: {
                                    darken: {
                                        enable: true,
                                        value: 25
                                    },
                                    enable: true,
                                    speed: {
                                        min: 15,
                                        max: 25
                                    }
                                },
                                wobble: {
                                    distance: 30,
                                    enable: true,
                                    move: true,
                                    speed: {
                                        min: -15,
                                        max: 15
                                    }
                                }
                            },
                            interactivity: {
                                detectsOn: "canvas",
                                events: {
                                    onHover: {
                                        enable: false,
                                        mode: "connect"
                                    },
                                    onClick: {
                                        enable: true,
                                        mode: "repulse"
                                    },

                                    resize: true
                                },
                            },
                            detectRetina: true,

                            responsive: [
                                {
                                    maxWidth: 700,
                                    options: {
                                        particles: {
                                            move: {
                                                speed: 30,
                                                decay: 0.05
                                            }
                                        }
                                    }
                                }
                            ],
                            emitters: [
                                {
                                    direction: "top-right",
                                    rate: {
                                        delay: 0.1,
                                        quantity: 10
                                    },
                                    position: {
                                        x: 0,
                                        y: 50
                                    },
                                    size: {
                                        width: 0,
                                        height: 0
                                    }
                                },
                                {
                                    direction: "top-left",
                                    rate: {
                                        delay: 0.1,
                                        quantity: 10
                                    },
                                    position: {
                                        x: 100,
                                        y: 50
                                    },
                                    size: {
                                        width: 0,
                                        height: 0
                                    }
                                },

                            ]
                        }}
                    />}

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

                        <p>Time spent playing with your children are never wasted</p>
                        <Link to='about'>
                            <button className='btn'>Learn More</button>
                        </Link>

                        <h2 >COMING SOON!</h2>
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
                    <div className="image">
                        <img src={character} alt="" />

                    </div>
                </div>
            </TransitionPage>
        </>
    )
}

export default Home