import './contact.css';
import Divider from '../../common/Divider';

function Contact() {
  return (
  <div className="contact">
    <Divider/>
    <label className="section-title">Contact</label>
    <div className="contact-container">
      <div className="contact-left">
        <p>Want to get in touch? Contact me on any of the platform</p>
        <div className="contact-links">
            <a href="https://github.com/bharathsurya021">
              <i class="fab fa-github  iconf"></i>
            </a>
            <a href="https://twitter.com/bharathsurya021">
              <i class="fab fa-twitter  iconf"></i>
            </a>
            <a href="https://www.instagram.com/bharathsurya21/?hl=en">
              <i class="fab fa-instagram  iconf"></i>
            </a>
          </div>
      </div>
      <div className="resume-download">
        <a download href={require('../../../assets/resume.pdf').default} ><i class="fas fa-download"></i> Resume</a>
      </div>
    </div>
  </div>
  );
}

export default Contact;
