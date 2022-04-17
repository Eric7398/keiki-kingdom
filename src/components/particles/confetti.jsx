import Particles from "react-tsparticles";


const confetti = () => {
    return (
        <Particles
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
        />
    )
}

export default confetti