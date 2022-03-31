import React from 'react'
import Footer from '../footer/Footer'
import TransitionPage from '../TransitionPage'
import './RulesStyles.css'
import useCollapse from 'react-collapsed';
import { FaPlus, FaMinus } from "react-icons/fa";

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

const Rules = () => {
    return (
        <>
            <TransitionPage>

                <div className='rules'>
                    <div className="rules-desc">
                        <h1>Rules</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veritatis accusamus magni numquam maxime dolor totam eligendi accusantium. Rerum molestiae, perferendis iusto ab repellat iste vel saepe in id expedita.</p>
                        <div className='content'>

                            <Section title="What should we wear?">
                                <p>Everyone must bring their socks. Shoes, sneakers, and sandals are not permitted. If you forget socks, we have socks you can purchase. Everyone who is playing in our facility must wear socks. This helps keep our facility clean for our patrons and ensures the longevity of our equipment. Pantyhose & baby booties are not acceptable as socks; please bring only socks.
                                    Items like jewelry, watches and loose clothing should be removed from every adult and child prior to entering in the play area. Remember we don’t want anything getting caught, damaged or broken.</p>
                            </Section>
                            <Section title="If we forgot socks, can we buy them there?">
                                <p>Yes! Both adult and children socks cost $2. They are brand new, and you keep them.</p>
                            </Section>
                            <Section title="Can we bring in food and beverages?">
                                <p>You cannot carry food or beverages into the facility unless it is for a booked birthday party or event. Only baby formula & water is permitted. Baby formula, water, and any purchased snacks from our cafe must be consumed in the cafe area only.

                                    Pre-made meals, food, baby pouches, etc are not allowed to be brought in. This is not a peanut free facility. You can go in and out of our facility to your car, etc. during your purchased block of time.</p>
                            </Section>
                            <Section title="Do we need a waiver to enter?">
                                <p>Yes! All parents or guardians must sign a waiver before entry into our facility. Please see our waiver pages here: HUNTINGTON BEACH and LAKE FOREST. Create an account with the guardian’s names and add the child participants. When arriving, you must have a legal form of identification. (drivers license or government issued I.D.)</p>
                            </Section>
                            <Section title="Do you have a height requirement?">
                                <p>Our indoor playground is for children 51 inches and below. This is the national average for an 8 year old. If you have any older or taller children attending your group they WILL be permitted into the facility, however they will be treated as an adult.

                                    Adults are ONLY permitted to play in the bounce house, go up & down the 4-person slide, and play in the first floor foam ball area. All other rides and play areas are strictly prohibited. Any adults or larger children not playing safely around our smaller children/guests will be asked to leave without any refund.

                                    If you booked a birthday party and have relatives and guests with older children – these rules still apply. Any guests of your birthday party that do not abide by these rules will be immediately removed from the facility. The safety of our children/guests is our primary concern.</p>
                            </Section>
                            <Section title="Do you have an area for toddlers?">
                                <p>Yes! We have a fully gated toddler area that is for children less than 3 years of age.   If your child is 3 or older, they will not be permitted under any circumstance to play in this area; regardless of medical condition, handicap, etc. These age rules do not discriminate and apply to EVERYONE and protect the safety of the children.

                                    Parents/guardians are required to accompany their toddler children in the play area at all times.</p>
                            </Section>
                            <Section title="Do you have security policy in place to protect the children?">
                                <p>Parents/guardians are responsible for their children at all times. No exceptions and regardless to the fact that We Play Loud has staff monitoring the facility.

                                    Parents & children are given stickers that identify their children. Please do not remove them. They are to be worn at all times while in our facility. One of our staff members will remove these stickers before you leave and match each parent and child to ensure all children leave with the correct guardian.

                                    Adults without children are not allowed to enter the facility or only under the direct supervision of a We Play Loud staff member. Adults without children are not allowed to take pictures of our facility. When taking pictures inside our facility with your child make sure if another child is in your picture frame; first ask the parent if it is okay with them to take the picture.</p>
                            </Section>
                            <Section title="Do I have to stay with my child(ren) at all times?">
                                <p>Parental supervision is required at ALL TIMES. This is not a daycare. No drop offs. There must be one legal guardian responsible for monitoring their children at all times while they play in our facility. Parents sitting in the cafe should routinely check on their children.</p>
                            </Section>
                            <Section title="What are your rules of conduct while playing?">
                                <p>Any rude, rough play, or inappropriate behavior will not be tolerated by any child or adult. In the event a child or adult violates this policy, they will be asked to leave with NO refund. Using inappropriate language will also result in your removal. Patrons are required to follow the requests of We Play Loud staff members immediately and at all times.</p>
                            </Section>
                            <Section title="What if we lose something?">
                                <p>Please understand, We Play Loud is NOT responsible for any lost, damaged, or forgotten items. If you are missing something please email weplayloudcorp@gmail.com regarding the item you are missing so we can check our lost & found for you. Items left longer than 10 days and are not claimed will be donated or thrown away.</p>
                            </Section>
                            <Section title="How much are tickets?">
                                <p>Open Play: We charge $19.00 for the first child & 1 adult is FREE; each additional child/sibling is $10.00, and each additional adult/senior is $8.00 for ALL DAY PLAY per family.

                                    Rainy Days or Holidays: admission tickets are for 2 hours of consecutive play.
                                </p>
                                <ul>
                                    <li> Parent & 1 child: $19.00</li>
                                    <li> Parent & 2 children: $29.00</li>
                                    <li> Parents & 1 child: $27.00</li>
                                    <li> Parents & 2 children: $37.00</li>
                                </ul>
                            </Section>
                            <Section title="How long is our ticket good for?">
                                <p>The admission ticket is for 2 hours from the time of purchase and check-in. However, if it rains or is a holiday, your admission ticket could vary based on current offerings. We are open from Mon-Thurs: 10am-6pm and Fri-Sun: 10am-7pm. If you arrive an hour before close, the normal ticket rate price applies. There are no discounts or prorated tickets.</p>
                            </Section>
                            <Section title="What if my child isn't feeling well?">
                                <p>If your child is not feeling well, coughing, running a fever, or visibly sick they should not be brought into our facility. Any child visibly deemed to not be feeling well will not be allowed entry. Any child that vomits or has a bloody nose will be asked to leave immediately; no refunds granted.

                                    Children with casts or recent medical conditions are not advised to play at our facility; however the guardian legally makes that decision on behalf of the child and accepts all responsibility. We take the safety and well-being of the children playing here very seriously and want to protect all our guests…please use common courtesy.</p>
                            </Section>
                        </div>
                    </div>
                </div>
                <Footer />
            </TransitionPage>
        </>
    )
}

export default Rules