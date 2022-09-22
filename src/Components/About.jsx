
import './styles/about.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export const About = () => {
    return (
        <div>
            <div className='about-header'>
                <div className='about-header-sec1'>
                    <div className='about-header-quote'>
                        <Fade left>
                            <h1 className='gradient about-page-heading'>about us</h1>
                            <h1 className='about-heading2' >Not about our management,<br />
                                or beanbags, about<br />
                                who we really are</h1>
                        </Fade>
                    </div>
                    <div className='about-header-img'>
                        <img src='https://blog.hubspot.com/hubfs/Team-Collaboration-1.jpg' />
                    </div>
                    <img className='about-head-img' src='https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/aboutus_spiral.png' />
                </div>

                <Slide bottom>
                    <div className='header-section'>
                        <h1>In a quickly changing and evolving world, the challenges you face are ever more unique and complex.
                            To find solutions, you need forward-thinking, agile, caring partners that can help you transform, adapt, and build.
                            At Ayka, we excel at digital product engineering and deliver on our promise of thinking breakthroughs.</h1>
                    </div>
                </Slide>
            </div>

            <div className='history-div'>
                <Fade left>
                    <h1>Ayka History</h1>
                </Fade>
                <Fade right>
                    <p>The nature of IT & digital product engineering has reached an incredible state of velocity and transition.
                        We must adapt and meet it with an agile mindset that isn't afraid to iterate towards the perfect solution.
                        If we only solve today's problems, it's not enough. We must do more.
                        We must courageously embrace the future, with vision and clarity about where technology & business are heading.
                        Thinking breakthroughs gets us there. Spend some time with us and we'll help you future-proof your business.
                    </p>
                </Fade>
            </div>

            <div className='about-sec3'>
                <h1 className='about-heading'>Our Leadership Team</h1>
                <div className='founder-sec1'>
                    <Fade left>
                        <div className='founder'>
                            <img src="https://placehold.jp/300x400.png" />
                            <div className='detail'>
                                <p>Vaibhav Aggarwal</p>
                                <p>CEO & Co-founder</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className='founder'>
                            <img src="https://placehold.jp/300x400.png" />
                            <div className='detail'>
                                <p>Neha Aggarwal</p>
                                <p>CEO & Co-founder</p>
                            </div>
                        </div>
                    </Fade>
                </div>

                <div className="founder-sec2">
                    <Fade left>
                        <div className='founder'>
                            <img src="https://placehold.jp/300x400.png" />
                            <div className='details'>
                                <p>Dharamveer</p>
                                <p>Head of Department</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className='founder'>
                            <img src="https://placehold.jp/300x400.png" />
                            <div className='details'>
                                <p>Karan Mehra</p>
                                <p>Quality Analyst</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                    <div className='founder'>
                        <img src="https://placehold.jp/300x400.png" />
                        <div className='details'>
                            <p>Jatin Kapoor</p>
                            <p>PHP Developer</p>
                        </div>
                    </div>
                    </Fade>
                    <Fade right>
                        <div className='founder'>
                            <img src="https://placehold.jp/300x400.png" />
                            <div className='details'>
                                <p>Rakesh Bisht</p>
                                <p>PHP Developer</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className='founder'>
                            <img src="https://placehold.jp/300x400.png" />
                            <div className='details'>
                                <p>Ankita Dhiman</p>
                                <p>React Developer</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                    <div className='founder'>
                        <img src="https://placehold.jp/300x400.png" />
                        <div className='details'>
                            <p>Kamesh Hedau</p>
                            <p>React Developer</p>
                        </div>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className='founder'>
                        <img src="https://placehold.jp/300x400.png" />
                        <div className='details'>
                            <p>Neeraj Sayal</p>
                            <p>PHP Developer</p>
                        </div>
                    </div>
                    </Fade>
                    <Fade right>
                        <div className='founder'>
                            <img src="https://placehold.jp/300x400.png" />  
                            <div className='details'>
                                <p>Ruby Singh</p>
                                <p>Intern</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className='team-banner'>
                <img src='https://placehold.jp/1500x300.png' />
            </div>
        </div>
    )
}