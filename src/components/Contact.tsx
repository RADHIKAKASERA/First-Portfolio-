import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:radhikakasera114@gmail.com" data-cursor="disable">
                radhikakasera114@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Master of Information Technology Management</p>
            <p>Bachelor of Technology in IT</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://www.linkedin.com/in/rkasera"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Radhika Kasera</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
