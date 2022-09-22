import './styles/media_query.css';
import { useRef, useEffect } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export const CareBanner = () => {

    const tag = useRef(null);
    const match = gsap.matchMedia();

    useEffect(() => {
        const el = tag.current;

        match.add("(min-width: 1024px)", () => {
            gsap.fromTo(el, { rotation: 0 }, {
                duration: 100, scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: 'top 2%',
                    scrub: 4,
                    toggleActions: 'restart none none none',
                    pin: true,

                }
            })
        })


    }, []);

    return (
        <>
            <div className="carebanner-div">
                <div className="care-quote">
                    <h2 className="gradient font" style={{ color: '#ffffff' }}>We care.</h2>
                    <h2 className="gradient font" style={{ color: '#EF5350' }}>Caring is our superpower.</h2>
                    <h3 ref={tag} style={{ color: '#ffffff' }}>it drives us to deliver <br />
                        &nbsp;&nbsp;&nbsp;&nbsp; excellence to our clients</h3>
                </div>

                <div className="care-side-panel">
                    <img className="care-img" src='https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Green%20spiral.svg' />
                    <div className="care-div">
                        <div>
                            <h3 className="gradient" style={{ color: '#EF5350', fontSize: '40px' }}>industries</h3>
                            <p style={{ color: '#ffffff', fontSize: '14px' }}>We leverage our expertise across multiple business functions to drive
                                technology-led business breakthroughs.</p>
                            <Link to='/industries'><button className="view-btn" style={{ padding: '15px', borderRadius: '30px', fontSize: '12px',  fontWeight: 'bold' }}>View All Industries</button></Link>
                        </div>
                        <hr className="care-hr"></hr>
                        <div>
                            <h3 className="gradient" style={{ color: '#EF5350', fontSize: '40px' }}>services</h3>
                            <p style={{ color: '#ffffff', fontSize: '14px' }}>Call it what you want, innovation, disruption or transformation,
                                it touches every part of your business. We are your turnkey partner.</p>
                            <Link to='/services'><button className="view-btn" style={{ padding: '15px', borderRadius: '30px', fontSize: '12px', fontWeight: 'bold' }}>View All Services</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}