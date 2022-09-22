
import './styles/industries.css';
import Fade from 'react-reveal/Fade';

export const Technologies = () => {
    return (
        <div>
            <div className='industries-header'>
                <Fade left>
                    <h1 className='gradient ind-heading' >technologies</h1>
                    <h1 className="ind-heading2">Technologies we work upon<br /> to deliver the best</h1>
                </Fade>
                <img className='head-img' src='https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Caring/Top%20Banner.png' />
            </div>

            <div className='ind-quote'>
                <p style={{ marginTop: '20px' }}>We accelerate your vision with technologies that are both agile and cutting-edge and business functions to drive technology-led
                    business breakthroughs.</p>
            </div>

            <div className='main-sec'>
                <h1 style={{ fontSize: '32px', marginBottom: '40px' }}>how we help you</h1>

                <div className='industries'>

                    <div className='sec'>
                        <h1 className='ind-h1'>Angular</h1>
                        <p>Angular is a platform and framework for building single-page client applications using HTML and TypeScript.
                            Angular is written in TypeScript. It implements core and optional functionality as a set of
                            TypeScript libraries that you import into your applications.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Codeigniter</h1>
                        <p> CodeIgniter is a powerful PHP framework with a very small footprint,
                            built for developers who need a simple and elegant toolkit to create full-featured web applications.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Cloud</h1>
                        <p> Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over
                            the Internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Data Science</h1>
                        <p> Applying advanced analytics techniques and scientific principles to extract valuable
                            information from data for business decision-making, strategic planning and other uses.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Laravel</h1>
                        <p>Laravel is an open-source PHP framework, which is robust and easy to understand. It follows a model-view-controller design pattern.
                            Laravel reuses the existing components of different frameworks which helps in creating a web application.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>React.js</h1>
                        <p>React (also known as React. js or ReactJS) is a free and open-source front-end
                            JavaScript library for building user interfaces based on UI components.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>PHP</h1>
                        <p>PHP is strong tool for create dynamic and interactive Web pages. PHP is the widely-used, free, and efficient for rich applications/website development. This is open source technology, runs on Apache web
                            server which in turn runs seamlessly on Windows, Linux, Solaris, and various other UNIX platforms.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}