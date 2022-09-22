import { useRef, useEffect } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/style.css';
import DemoCarousel from './Swipe-Carousel'
import { CareBanner } from "./Carebanner";

gsap.registerPlugin(ScrollTrigger);

export const Quote = () => {

    const text = useRef(null);

    const match = gsap.matchMedia();

    useEffect(() => {
        const el = text.current;

        match.add("(min-width: 1024px)", () => {
            gsap.fromTo(el, { rotation: 0 }, {
                duration: 80, scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: 4,
                    toggleActions: 'restart none none none',
                    pin: true,

                }
            })
        })

    }, []);

    return (
        <>
            <div className="bannerQuote" style={{ backgroundColor: '#13294b', padding: '200px 84px' }}>

                <div className="quote-div">
                    <h1 className="fixed-text">We excel at digital product engineering.
                        We solve complex business challenges through agility and innovation. We call it </h1>
                    <h1 className="gradient movable font" ref={text} >thinking breakthroughs.</h1>
                    <div className="sub-quote">
                        <p>see how we have helped industry leaders embrace digitalization and accelerate technology-led innovation.</p>
                    </div>
                </div>
            </div>




        </>
    )

}