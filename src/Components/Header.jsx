import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import { Navbar } from './Navbar';

function Header() {
    return (
        <>

            <Carousel id='carousel' controls={false} pause={false}>
                <Carousel.Item interval={2000}>
                    <img
                        className="carousel-img d-block w-100"
                        src="https://www.nagarro.com/hubfs/Nagarro-March2018-Theme/Insights-Homepage-images/BMW%20Partnership%20Desktop.png"
                        alt="First slide"
                    />


                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="carousel-img d-block w-100"
                        src="https://www.nagarro.com/hubfs/Star-Alliance-banner-homepage-car-D-min.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="carousel-img d-block w-100"
                        src="https://www.nagarro.com/hubfs/Nagarro-March2018-Theme/Insights-Homepage-images/WFA%20desktop%20banner-min.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



        </>
    );
}

export default Header;