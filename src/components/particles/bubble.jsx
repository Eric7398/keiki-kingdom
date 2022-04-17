import Particles from "react-tsparticles";


const bubble = () => {
    return (
        <Particles
            options={{
                fpsLimit: 60,
                emitters: {
                    direction: "top",
                    size: {
                        width: 100,
                        height: 0
                    },
                    position: {
                        x: 50,
                        y: 100
                    },
                    rate: {
                        delay: 0.1,
                        quantity: 5
                    }
                },
                particles: {
                    number: {
                        value: 0
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "image",
                        image: [
                            {
                                src: "https://cdn130.picsart.com/262323691001212.png?r1024x1024",
                                width: 202,
                                height: 200
                            },
                            {
                                src:
                                    "http://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG72.png",
                                width: 1153,
                                height: 1080
                            },
                            {
                                src:
                                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/54e847be-8444-4485-9d2f-0d51a9ab6b3f/dcruv7h-9c57c565-e380-4d20-9413-d743c35c83a4.png/v1/fill/w_894,h_894,strp/transparent_rainbow_bubble_prop_png_3_by_lxc808_dcruv7h-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzU0ZTg0N2JlLTg0NDQtNDQ4NS05ZDJmLTBkNTFhOWFiNmIzZlwvZGNydXY3aC05YzU3YzU2NS1lMzgwLTRkMjAtOTQxMy1kNzQzYzM1YzgzYTQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.laWMbla12KsLhf1aJHcWGzVyHxfciBK84P_uzOZSKTs",
                                width: 894,
                                height: 894
                            }
                        ]
                    },
                    opacity: {
                        value: 1
                    },
                    size: {
                        value: 20,
                        anim: {
                            enable: true,
                            speed: 5,
                            size_min: 5,
                            sync: true,
                            startValue: "min",
                            destroy: "max"
                        }
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "destroy",
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: false,
                            mode: "repulse"
                        },
                        onclick: {
                            enable: true,
                            mode: "push"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        repulse: {
                            distance: 100
                        },
                        push: {
                            quantity: 4
                        }
                    }
                },
                detectRetina: true
            }}
        />
    )
}

export default bubble