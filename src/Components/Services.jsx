import './styles/industries.css';
import Fade from 'react-reveal/Fade';

export const Services = () => {
    return (
        <div>
            <div className='industries-header'>
                <Fade left>
                    <h1 className='gradient ind-heading' >services</h1>
                    <h1 className='ind-heading2' >What we can do and how we<br /> deliver on our promise</h1>
                </Fade>
                <img className='head-img' style={{ bottom: '-16%' }} src='https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Caring/Top%20Banner.png' />
            </div>

            <div className='ind-quote'>
                <p style={{ marginTop: '20px' }}>Call it what you want - innovation, disruption or transformation - it touches every part of your business.
                    We are your turnkey partner. We are known for our agile entrepreneurship, for our client centricity,
                    for the value we generate.
                    And even for how fun it is to work with us!</p>
            </div>

            <div className='main-sec'>
                <h1 className='help-head'>how we help you</h1>

                <div className='services'>

                    <div className='sec'>
                        <h1 className='ind-h1'>Agile</h1>
                        <p className='service-p'>The world is changing quickly.
                            Are you able to keep up with the pace? We can help you become more dynamic, nimble, and resilient.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Algorithm, Data  <br /> & Analytics</h1>
                        <p className='service-p'> The challenge is not getting the data but knowing what to do with it.
                            Our solutions make data actionable and leverageable.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Android App Development</h1>
                        <p className='service-p'>Android Mobile App across diverse platforms and devices using latest techniques for all major platforms which includes Android Studio.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>CRM</h1>
                        <p className='service-p'>With our Enterprise Agile approach, we revolutionize your CRM strategy and redefine customer success.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Design</h1>
                        <p className='service-p' >Build connections with your consumers and deliver experiences they want, need, and love.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Digital Marketing</h1>
                        <p className='service-p'>More connected, generating more data should also mean more business opportunities.
                            Ayka's digital services can help you beat the competition and increase customer acquisition and engagement.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>ERP</h1>
                        <p className='service-p'>Our ERP practice helps organizations improve information flow and operational efficiency.
                            We bring our agile, responsive framework, that responds to your changing business context.</p>
                    </div>
                    {/* <div className='sec'>
                        <h1 className='ind-h1'>HRM</h1>
                        <p className='service-p'>We enable public sector organizations to make smarter decisions,
                            drive citizen-centric innovation, improve engagement and accelerate  transformation.</p>
                    </div> */}
                    <div className='sec'>
                        <h1 className='ind-h1'>Independent Software Testing</h1>
                        <p className='service-p'> We provide a complete suite of Software Quality Assurance (QA) and Independent Software Testing Services to maximize software application quality, performance</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>IOS App Development</h1>
                        <p className='service-p'>Mobile App across diverse platforms and devices using latest techniques for all major platforms which includes Swift for i-phones.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Mobile App Development</h1>
                        <p className='service-p'>We develop a mobility strategy with an architecture that provides an end-to-end enterprise mobility solution and evolves an easy integration to enable access on multiple OS platforms.
                            We follow the highest standards in the industry for Engineering, Product Quality, Delivery and Support.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Point Of Sale</h1>
                        <p className='service-p'>In the information economy, serving the right information to the right person at the right time can separate the winners from the losers.
                            Our highly integrated information systems give you access to the correct information and the right time.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Rest API Management</h1>
                        <p className='service-p'>Start small but smart! Unlock the value of an API-enabled business transformation,
                            maximizing ecosystem interactions, and legacy IT modernization.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>SEO/ SMO</h1>
                        <p className='service-p'>We offers best Seo and Smo services that make sure your website appears on the first page of Google search.Along with Google,
                            we also provide optimization in other search engines according to the business location.</p>
                    </div>
                    <div className='sec'>
                        <h1 className='ind-h1'>Web App Development</h1>
                        <p className='service-p'>From wearables collecting health data to next-gen sequencing, tech is transforming everything.
                            Learn how we can help you drive innovation and deliver superior patient outcomes.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}