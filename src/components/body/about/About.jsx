import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="intro-info">
          <h class="intro_title">
            Hello, I'm<strong className="intro-name"> John Doe.</strong>
          </h>
          <p class="intro_subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            id autem voluptatibus a corrupti officiis, vitae repellendus
            explicabo accusantium.
          </p>
          <a href="#contact" className="about-cta">Get in touch</a>
          {/* <div className="about-bottom">
            <a href="https://github.com/bharathsurya021">
              <i class="fab fa-github  iconf"></i>
            </a>
            <a href="https://twitter.com/bharathsurya021">
              <i class="fab fa-twitter  iconf"></i>
            </a>
            <a href="https://www.instagram.com/bharathsurya21/?hl=en">
              <i class="fab fa-instagram  iconf"></i>
            </a>
          </div> */}
        </div>
        <div className="intro-illus">
          <img
            src={require("../../../assets/illustration.png").default}
            alt="illustration"
            className="intro-img"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
