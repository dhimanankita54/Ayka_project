
import video from './videobg.mp4';
import './styles/style.css';
import { useRef, useEffect } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export const Videobg = () => {

    const video_text = useRef(null);
    const match = gsap.matchMedia();

    useEffect(() => {
        const el = video_text.current;

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
        <div style={{ position: 'relative' }}>
            <video src={video} autoPlay muted loop />
            <h1 ref={video_text} className='video-text'>it makes us better<br /> &nbsp;&nbsp;&nbsp; colleagues</h1>

            <div className='career-link-div'>
                <div className='career-div-head'>
                    <h1 >We are a Nation</h1>
                    <p>We are not trying to emulate the companies of yesterday,
                        we are the company of tomorrow. We are the future, logistically apart, together always.</p>
                </div>

                <div>
                    <div>
                        <h1 className='think'>Think you have what it takes <br />to be in Ayka?</h1>
                    </div>

                    <div className='career-form'>
                        <p >Discover the opportunities <br /> waiting for you</p>
                        <svg class="bt-colg-curved-line" width="408" height="11" viewbox="0 0 528 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 10C275.009 -1.57174 527 1.32143 527 1.32143" stroke="white" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <Link to='/careers'><button>Make the Jump</button></Link>
                    </div>

                </div>

            </div>
        </div>
    )
}