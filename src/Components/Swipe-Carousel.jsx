import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './styles/media_query.css';

class DemoCarousel extends Component {
    render() {
        return (

            <>
                <Carousel swipeable={true}
                    emulateTouch={true}
                    infiniteLoop={true}
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    className='swipe'
                >
                    <div className='slides'>
                        <h1>Slide 1</h1>
                        <img src="https://www.nagarro.com/hubfs/Hoerbiger-Success-Story-Tile.jpg" />

                    </div>
                    <div className='slides'>
                        <h1>Slide 2</h1>
                        <img src="https://www.nagarro.com/hubfs/Hoerbiger-Success-Story-Tile.jpg" />

                    </div>
                    <div className='slides'>
                        <h1>Slide 3</h1>
                        <img src="https://www.nagarro.com/hubfs/Hoerbiger-Success-Story-Tile.jpg" />

                    </div>
                </Carousel>


            </>
        );
    }
}

export default DemoCarousel;