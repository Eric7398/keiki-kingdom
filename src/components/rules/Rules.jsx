import React, { useState } from 'react'
import Footer from '../footer/Footer'
import TransitionPage from '../TransitionPage'
import './RulesStyles.css'
import useCollapse from 'react-collapsed';
import { FaPlus, FaMinus } from "react-icons/fa";
import Particles from 'react-tsparticles';

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


    const bubbleToggle = () => {
        setWebs(false)
        setBubble(!bubble)
    }
    const websToggle = () => {
        setBubble(false)
        setWebs(!webs)
    }


    return (
        <>
            <TransitionPage>

                <div className='rules'>
                    {bubble &&
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
                    }

                    {webs &&
                        <Particles
                            options={{
                                fps_limit: 60,
                                interactivity: {
                                    detect_on: "canvas",
                                    events: {
                                        onclick: { enable: true, mode: "push" },

                                        resize: true
                                    },
                                    modes: {
                                        bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40, speed: 3 },
                                        grab: { distance: 400, line_linked: { opacity: 1 } },
                                        push: { particles_nb: 4 },
                                        remove: { particles_nb: 2 },
                                        repulse: { distance: 200, duration: 0.4 }
                                    }
                                },
                                particles: {
                                    color: { value: "#ffffff" },
                                    line_linked: {
                                        color: "#ffffff",
                                        distance: 150,
                                        enable: true,
                                        opacity: 0.4,
                                        width: 1
                                    },
                                    move: {
                                        attract: { enable: false, rotateX: 600, rotateY: 1200 },
                                        bounce: false,
                                        direction: "none",
                                        enable: true,
                                        out_mode: "out",
                                        random: false,
                                        speed: 2,
                                        straight: false
                                    },
                                    number: { density: { enable: true, value_area: 800 }, value: 80 },
                                    opacity: {
                                        anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
                                        random: false,
                                        value: 0.5
                                    },
                                    shape: {
                                        character: {
                                            fill: false,
                                            font: "Verdana",
                                            style: "",
                                            value: "*",
                                            weight: "400"
                                        },
                                        image: {
                                            height: 100,
                                            replace_color: true,
                                            src: "images/github.svg",
                                            width: 100
                                        },
                                        polygon: { nb_sides: 5 },
                                        stroke: { color: "#000000", width: 0 },
                                        type: "circle"
                                    },
                                    size: {
                                        anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
                                        random: true,
                                        value: 5
                                    }
                                },
                                polygon: {
                                    draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
                                    move: { radius: 10 },
                                    scale: 1,
                                    type: "none",
                                    url: ""
                                },
                                retina_detect: true
                            }}
                        />

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
                                <p>Webs</p>
                                <label className='switch'>
                                    <input type="checkbox" onChange={websToggle} checked={webs} />
                                    <span className="slider" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='content'>

                        <Section title="What should we wear?">
                            <p>Everyone must purchase their Keiki Kingdom socks with us first. Everyone who is playing in our facility must wear these socks. Shoes, sneakers, and sandals are not permitted. This helps keep our facility clean for our patrons and ensures the longevity of our equipment.
                                Items like jewelry, watches and loose clothing should be removed from every adult and child prior to entering in the play area. Remember we don’t want anything getting caught, damaged or broken.</p>
                        </Section>

                        <Section title="Can we bring in food and beverages?">
                            <p>You cannot carry food or beverages into the facility unless it is for a booked birthday party or event. Only baby formula & water is permitted. Baby formula, water, and any purchased snacks from our cafe must be consumed in the cafe area only.

                                Pre-made meals, food, baby pouches, etc are not allowed to be brought in. This is not a peanut free facility. You can go in and out of our facility to your car, etc. during your purchased block of time.</p>
                        </Section>
                        <Section title="Can we bring our own toys to the playground?">
                            <p>Do NOT bring your own toys here. They can be left with the parents or the lockers.</p>
                        </Section>
                        <Section title="Do we need a waiver to enter?">
                            <p>Yes! All parents or guardians must sign a waiver before entry into our facility. Please see our waiver pages here PLACEHOLDER-LINK. Create an account with the guardian’s names and add the child participants. When arriving, you must have a legal form of identification. (drivers license or government issued I.D.)</p>
                        </Section>
                        {/* <Section title="Do you have a height requirement?">
                            <p>Our indoor playground is for children 51 inches and below. This is the national average for an 8 year old. If you have any older or taller children attending your group they WILL be permitted into the facility, however they will be treated as an adult.

                                Adults are ONLY permitted to play in the bounce house, go up & down the 4-person slide, and play in the first floor foam ball area. All other rides and play areas are strictly prohibited. Any adults or larger children not playing safely around our smaller children/guests will be asked to leave without any refund.

                                If you booked a birthday party and have relatives and guests with older children – these rules still apply. Any guests of your birthday party that do not abide by these rules will be immediately removed from the facility. The safety of our children/guests is our primary concern.</p>
                        </Section> */}
                        {/* <Section title="Do you have an area for toddlers?">
                            <p>Yes! We have a fully gated toddler area that is for children less than 3 years of age. If your child is 3 or older, they will not be permitted under any circumstance to play in this area; regardless of medical condition, handicap, etc. These age rules do not discriminate and apply to EVERYONE and protect the safety of the children.

                                Parents/guardians are required to accompany their toddler children in the play area at all times.</p>
                        </Section> */}
                        <Section title="Can we bring toys with us to different areas?">
                            <p>Please keep all toys in the designated play area. This includes the balls inside the ball pits.</p>
                        </Section>
                        <Section title="Do you have security policy in place to protect the children?">
                            <p>Parents/guardians are responsible for their children at all times. NO EXCEPTIONS.

                                Parents & children are given stickers that identify their children. Please do not remove them. They are to be worn at all times while in our facility. One of our staff members will remove these stickers before you leave and match each parent and child to ensure all children leave with the correct guardian.

                                Adults without children are not allowed to enter the facility or only under the direct supervision of a staff member. Adults without children are not allowed to take pictures of our facility. When taking pictures inside our facility with your child make sure if another child is in your picture frame; first ask the parent if it is okay with them to take the picture.</p>
                        </Section>
                        <Section title="Do I have to stay with my child(ren) at all times?">
                            <p>Parental supervision is required at ALL TIMES. This is not a daycare. No drop offs. There must be one legal guardian responsible for monitoring their children at all times while they play in our facility. Parents sitting on the side should routinely check on their children.</p>
                        </Section>
                        <Section title="What are your rules of conduct while playing?">
                            <p>Any rude, rough play, or inappropriate behavior will not be tolerated by any child or adult. In the event a child or adult violates this policy, they will be asked to leave with NO refund. Using inappropriate language will also result in your removal. Patrons are required to follow the requests of staff members at all times.</p>
                        </Section>
                        <Section title="What if we lose something?">
                            <p>Please understand, are are NOT responsible for any lost, damaged, or forgotten items. If you are missing something please email example@gmail.com regarding the item you are missing so we can check our lost & found for you. Items left longer than 10 days and are not claimed will be donated or thrown away.</p>
                        </Section>

                        <Section title="How long is our ticket good for?">
                            <p>The admission ticket is for 2 hours from the time of purchase and check-in. However, if it rains or is a holiday, your admission ticket could vary based on current offerings. We are open from Mon-Thurs: 10am-6pm and Fri-Sun: 10am-7pm. If you arrive an hour before close, the normal ticket rate price applies. There are no discounts or prorated tickets.</p>
                        </Section>
                        <Section title="What if my child isn't feeling well?">
                            <p>If your child is not feeling well, coughing, running a fever, or visibly sick they should not be brought into our facility. Any child visibly deemed to not be feeling well will not be allowed entry. Any child that vomits or has a bloody nose will be asked to leave immediately; no refunds granted.

                                Children with casts or recent medical conditions are not advised to play at our facility; however the guardian legally makes that decision on behalf of the child and accepts all responsibility. We take the safety and well-being of the children playing here very seriously and want to protect all our guests… please use common courtesy.</p>
                        </Section>
                    </div>

                </div>
                <Footer />
            </TransitionPage>
        </>
    )
}

export default Rules