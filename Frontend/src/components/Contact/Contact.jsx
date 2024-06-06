import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "11bb26c0-faa6-4dfe-9fae-4f4284dce724");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact
        information below. Your feedback, questions, and suggestions are
        important to us as we strive to provide exceptional service to our
        hotel community</p>
        <ul>
            <li> <img src={mail_icon} alt="" />Contact@BlueOrigin.stays</li>
            <li><img src={phone_icon} alt="" /> +2 124-321-1234</li>
            <li><img src={location_icon} alt="" /> 77 Eve Road, Rome<br/> MA 02139, ITALY</li>
        </ul>
      </div>
      <div className="contact-col">
        <form  onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder='Enter your name' required />

            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your cell no' required />
            <label>Write your suggession/message here</label>
            <textarea name="message" rows="6" placeholder='Enter your text' required></textarea>
            <button type='submit' className='btn dark-btn' style={{background:'#000080',color:'white'}}>Submit now
            {/* <img src={white_arrow} alt="" /> */}
            </button>
        </form>
        <span>{result}</span>
      </div>
      

    </div>
  )
}

export default Contact
