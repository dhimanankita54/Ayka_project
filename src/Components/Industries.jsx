import './styles/industries.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';

export const Industries = () => {

    return (
        <div>
            <div className='industries-header'>
                <Fade left>
                    <h1 className='gradient ind-heading' >industries</h1>
                    <h1 className='ind-heading2'>Industries we revolutionize</h1>
                </Fade>
                <img className='head-img' src='https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Caring/Top%20Banner.png' />
            </div>

            <div className='ind-quote'>
                <p style={{ marginTop: '20px' }}>We leverage our expertise across multiple industries and business functions to drive technology-led
                    business breakthroughs. We are known for our agile entrepreneurship
                    , our client centricity, the value we generate, and even how fun it is to work with us!</p>
            </div>

            <div className='main-sec'>
                <h1 style={{ fontSize: '32px', marginBottom: '40px' }}>how we help you</h1>

                <div className='industries'>
                        <div className='sec'>
                            <h1 className='ind-h1'>Public Sector</h1>
                            <p>We enable public sector organizations to make smarter decisions,
                                drive citizen-centric innovation, improve engagement and accelerate  transformation.</p>
                        </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Tours & Travels</h1>
                        <p> We make you more efficient and agile. We partner with you to co-innovate and create new areas of value.
                            We help you succeed in an uncertain environment.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Logistics</h1>
                        <p>We make you more efficient and agile. We partner with you to co-innovate and create new areas of value.
                            We help you succeed in an uncertain environment.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Media & <br /> Publishing</h1>
                        <p>We help you build new delivery and experience platforms.
                            We enable you to embrace agility and reinvent business models to manage disruption and stay ahead.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Life Sciences & HealthCare</h1>
                        <p>From wearables collecting health data to next-gen sequencing, tech is transforming everything.
                            Learn how we can help you drive innovation and deliver superior patient outcomes.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Industry & <br /> Automation</h1>
                        <p>We help you on your Industry 4.0 digital transformation
                            journey to create a connected and intelligent enterprise.</p>
                    </div>
                </div>
            </div>

        </div >
    )
}