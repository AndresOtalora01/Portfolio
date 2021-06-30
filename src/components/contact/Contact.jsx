import { useState } from "react";
import "./contact.scss"
import emailjs from 'emailjs-com';

export default function Conctact() {

    const [message, setMessage] = useState(false)

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_6v4p8wa', 'template_2wc2wbx', e.target, 'user_BNWil1z8UzNszFFErxlkA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/communicate.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder="Email" name="email" />
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}