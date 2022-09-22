import './styles/style.css';
import { useRef, useEffect } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Slide from 'react-reveal/Slide';

gsap.registerPlugin(ScrollTrigger);

export const ResponsibilityBanner = () => {

    const res = useRef(null);
    const match = gsap.matchMedia();

    useEffect(() => {
        const el = res.current;

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
            <div className="res-div">
                <div className='res-left'>
                    <h1 ref={res} className='res-h1' style={{ color: '#ffffff', fontSize: '40px' }}>it makes us <br /> &nbsp;&nbsp;&nbsp; responsible</h1>
                    <img src='https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Caring_responsible_background.svg' />
                </div>

                <div className='res-right'>
                    <Slide right>
                        <h3 style={{ color: '#ffffff', marginTop: '20px' }}>At Ayka, we care about sustainability,
                            about inclusion & diversity, about our social responsibility.</h3>
                    </Slide>
                    <div className='res-right-subdiv'>
                        <Slide right>
                            <div>
                                <p style={{ color: '#EF5350', fontWeight: 'bold' }}>#GenderNeutrality</p>

                                <div>
                                    <img className='div-img' src='https://www.nagarro.com/hs-fs/hubfs/Nagarro-March2018-Theme/Insights-Homepage-images/Be-you-be-yourself-Tile-Homepage.png?width=842&height=853&name=Be-you-be-yourself-Tile-Homepage.png' />
                                    <p className='div-text'>CARING for Gender neutrality at the workplace</p>
                                    <img className='arrow' src='https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Icons/white%20arrow.svg' />
                                </div>
                            </div>
                        </Slide>
                        <Slide right>
                            <div>
                                <p style={{ color: '#EF5350', fontWeight: 'bold' }}>#InclusionandDiversity</p>

                                <div>
                                    <img className='div-img' src='https://www.nagarro.com/hs-fs/hubfs/Albatross-Homepage-min.jpg?width=3129&height=3129&name=Albatross-Homepage-min.jpg' />
                                    <p className='div-text'>High - performance through neurodiversity</p>
                                    <img className='arrow' src='https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Icons/white%20arrow.svg' />
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <p className='res-text'>discover how we are creating a better world</p>
                </div>

            </div>
        </>
    )
}