
import { FaAngleDoubleUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import './styles/style.css';

export const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            <FaAngleDoubleUp onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }} className='toTop' />
        </div>
    )
}