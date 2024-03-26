import "./Contact.css";
import { useState } from "react";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "370ac931-2328-4043-87dd-17c0feacbee8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact container">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> rathan.2003@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            6889904532
          </li>
          <li>
            <img src={location_icon} alt="" />
            2/3 rich street,Coimbatore-641 022,Tamil Nadu,India
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            required
          />
          <label htmlFor="phone">Contact Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your mobile number"
          />
          <label htmlFor="msg">Write your mesage here</label>
          <textarea
            name="message"
            id="msg"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
