// Navbar.js

import React, { useState } from 'react';
// import './Navbar.css';

const Contact = () => {
    return (
        <div>
            <p>Ovo je naš položaj.</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d699.3619722597488!2d16.41047145832905!3d45.48092475139186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4766f1df91098b13%3A0x53ccf72758f1642d!2sLi%C4%8Dka%20ul.%2021%2C%2044000%2C%20Sisak!5e0!3m2!1shr!2shr!4v1698251391400!5m2!1shr!2shr" width="600" height="450" style= {{ border: 0, allowfullscreen:"", loading: "lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
        </div>
    );
    // const [email, setEmail] = useState('');
    // const [subject, setSubject] = useState('');
    // const [message, setMessage] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Slanje poruke na mail
    //     const mailtoLink = `mailto:ivan.ivkovic129@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`E-mail: ${email}\n\nPoruka:\n${message}`)}`;
    //     window.location.href = mailtoLink;
    // }

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <div>
    //             <label htmlFor="email">Vaš E-mail:</label>
    //             <input
    //                 type="email"
    //                 id="email"
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 required
    //             />
    //         </div>
    //         <div>
    //             <label htmlFor="subject">Predmet:</label>
    //             <input
    //                 type="text"
    //                 id="subject"
    //                 value={subject}
    //                 onChange={(e) => setSubject(e.target.value)}
    //                 required
    //             />
    //         </div>
    //         <div>
    //             <label htmlFor="message">Poruka:</label>
    //             <textarea
    //                 id="message"
    //                 value={message}
    //                 onChange={(e) => setMessage(e.target.value)}
    //                 rows="4"
    //                 required
    //             ></textarea>
    //         </div>
    //         <button type="submit">Pošalji Poruku</button>
    //     </form>
    // );
}

export default Contact;