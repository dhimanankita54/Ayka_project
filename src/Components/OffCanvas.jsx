import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                <FaBars className={colorChange ? 'color-icon' : ''} />
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton closeVariant='white'>
                </Offcanvas.Header>
                <Offcanvas.Body className='offcanvas-body'>
                    <Link to='/industries' onClick={toggleMenu}><li className='offcanvas-links'>industries</li></Link>
                    <Link to='/services' onClick={toggleMenu}><li className='offcanvas-links'>services</li></Link>
                    <Link to='/technologies' onClick={toggleMenu}><li className='offcanvas-links'>technologies</li></Link>
                    <Link to='/about' onClick={toggleMenu}><li className='offcanvas-links'>about</li></Link>
                    <Link to='/careers' onClick={toggleMenu}><li className='offcanvas-links'>careers</li></Link>
                    <Link to='/contact' onClick={toggleMenu}><li className='offcanvas-links'>contact</li></Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function Example() {
    return (
        <>
            <OffCanvasExample placement='end' name='end' scroll={true} />
        </>
    );
}

export default Example;
