
import './styles/contact.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const getEmail = (e) => {

        var templateParams = {
            from_name: name,
            to_name: 'Ankita',
            message: message,
            from_email: email
        }

        e.preventDefault();

        if (email && name && message) {
            emailjs.send('service_25by85a', 'template_jxcayj5', templateParams, '5ifuFrXVgNai4woeY')
                .then((result) => {
                    console.log(result.text);
                    toast.success("EMAIL SENT SUCCESFULLY!")
                    setEmail('');
                    setName('');
                    setMessage('')
                }, (error) => {
                    console.log(error.text);
                    toast.error('FAILED...!')
                });
        }

        else {
            toast.error("Please fill all the fields!")
        }

    }

    return (
        <div>
            <ToastContainer position="top-center" limit={1} />
            <div className='contact-links'>
                <div className='icons-div'>
                    <a href='#'><FaFacebook className='icons' /></a>
                    <a href='#'><FaTwitter className='icons' /></a>
                    <a href='#'><FaLinkedin className='icons' /></a>
                    <a href='#'><FaYoutube className='icons' /></a>
                    <a href='#'><FaInstagram className='icons' /></a>
                </div>

                <div className='email-section'>
                    <h3>E-mail:</h3>
                    <div>
                        <p><strong>bdm@ayka.tech</strong></p>
                        <p><strong>karan@salestown.in</strong></p>
                    </div>
                </div>

                <div className='email-section'>
                    <h3>Mobile:</h3>
                    <div>
                        <p><strong>+91 9289453644</strong></p>
                    </div>
                </div>
            </div>

            <div className="contact-form">
                <form onSubmit={getEmail}>
                    <div className='form-heading'>
                        <h2>Have a Query?</h2>
                        <p style={{ fontSize: '20px' }}><strong>Ask us</strong></p>
                    </div>

                    <div className='input-div'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className='input'
                            type='text'
                            placeholder='Enter your Name' />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='input'
                            type='email'
                            placeholder='Enter your Email' />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="message"><strong>Message</strong></label>
                        <textarea
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            id='textarea'
                            className='input'
                            placeholder='Enter your message' />
                    </div>
                    <div>
                        <button
                            className='submit-btn'
                            type='submit'> Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}