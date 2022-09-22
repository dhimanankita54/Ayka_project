import './styles/style.css';

export const Insights = () => {
    return (
        <>
            <div className='insights'>
                <div>
                    <h1 >featured insights</h1>
                </div>

                <div className="insights-div">
                    <div className="section">

                        <div>
                            <img className="insights-img" src={'https://www.nagarro.com/hubfs/Nagarro-March2018-Theme/Author%20Images/Blog%20Images/Web3-Mob-min.jpg'} />
                        </div>

                        <p className="insightsp">What is Web3 - a beginner's guide</p>
                        <p style={{ color: '#2e008b', marginTop: '60px' }}>Article</p>
                    </div>
                    <div className="section">

                        <div>
                            <img className="insights-img" src={'	https://www.nagarro.com/hubfs/Green%20airline%20blog%20tile.jpg'} />
                        </div>
                        <p className="insightsp">Green aviation: 5 schemes to help achieve sustainability in airline operations</p>
                        <p style={{ color: '#2e008b' }}>Article</p>
                    </div>
                    <div className="section">

                        <div>
                            <img className="insights-img" src={'	https://www.nagarro.com/hubfs/Digital%20in%20banking%20Image-Feat.jpg'} />
                        </div>
                        <p className="insightsp">Digital Transformation of Banking & Financial Services leveraging Salesforce</p>
                        <p style={{ color: '#2e008b' }}>White Paper</p>
                    </div>
                </div>

                <a href="#" style={{ float: 'right', marginRight: '11%', textDecoration: 'none', color: '#2e008b' }}>View more insights</a>
            </div>

            <div className='events'>
                <div>
                    <h1 >featured events</h1>
                </div>

                <div className="event-div">

                    <div className="event-section">
                        <div className="event-img-div">
                            <img className="event-img" src={'https://www.nagarro.com/hs-fs/hubfs/MicrosoftTeams-image%20(13)-4.png?width=4128&height=2752&name=MicrosoftTeams-image%20(13)-4.png'} />
                        </div>

                        <div className='event-text-div'>
                            <p style={{ color: '#2e008b', fontWeight: '600', margin: '1px' }}>Event</p>
                            <p className="eventp" style={{ fontWeight: '600', fontSize: '25px' }}>XPLOR 22 : The Customer Communications event</p>
                            <p style={{ color: 'grey', fontSize: '15px' }}>Want to optimize communications to deliver superior customer experiences? Meet our experts at the event to explore how.</p>
                        </div>
                    </div>

                    <div className="event-section2">

                        <div style={{ padding: '6px 0' }}>
                            <p style={{ color: '#2e008b', fontWeight: '600', margin: '1px' }}>Hybrid Event</p>
                            <p className="event-p" style={{ fontWeight: '600', fontSize: '25px' }}>Dreamforce 2022</p>
                            <p style={{ color: 'grey', fontSize: '15px' }}>Connect with our experts at Dreamforce 2022 to explore domain-specific Salesforce solutions!</p>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}