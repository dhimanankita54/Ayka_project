import './styles/style.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './OffCanvas';


export const Navbar = () => {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 500) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <div className='nav' id={colorChange ? 'sticky' : ''}>
            <div className={colorChange ? 'color-change logo-div' : 'logo-div'}>
                <Link to='/' ><img className="logo" src="https://media.glassdoor.com/sqll/3150836/ayka-tech-and-systems-squarelogo-1577420482217.png" /></Link>
                <Link to='/'><h4>AYKA</h4></Link>

                <ul className={colorChange ? 'color-change nav-links' : 'nav-links'}  >
                    <li><hr className='nav-hr' id={colorChange ? 'color-hr' : ''}
                        style={{
                            width: '100px',
                            height: '2px',
                            border: 'none',
                            margin: '10px 0',
                            opacity: '1',
                            borderRadius: '5px'
                        }}></hr></li>
                    <Link to='/industries'><li>industries</li></Link>
                    <Link to='/services'><li>services</li></Link>
                    <Link to='/technologies'><li>technologies</li></Link>
                    {/* <li>projects</li> */}
                </ul>
            </div>

            <ul className={colorChange ? 'color-change nav-links' : 'nav-links'}>
                <Link to='/about'><li style={{ marginRight: '20px' }}>about</li></Link>
                <Link to='/careers'><li style={{ marginRight: '20px' }}>careers</li></Link>
                <Link to='/contact'><li>contact</li></Link>
            </ul>

            <div className="menu-responsive">
                <Example className='offcanvas' />
            </div>



        </div>
    )
}