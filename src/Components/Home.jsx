import Header from './Header';
import { Quote } from './Quote';
import { Navbar } from './Navbar';
import { CareBanner } from './Carebanner';
import DemoCarousel from './Swipe-Carousel';
import './styles/style.css';
import { ResponsibilityBanner } from './Responsibility';
import { Videobg } from './Video';
import { Insights } from './Insights';
import GoToTop from './GoToTop';
import './styles/media_query.css';

export const Home = () => {
    return (
        <div>
            <div className="App">
                <Header />
                <Quote />
            </div>
            <div className="customers-carousel">
                <DemoCarousel />
            </div>
            <CareBanner />
            <ResponsibilityBanner />
            <Videobg />
            <Insights />
            <GoToTop />
        </div>
    )
}