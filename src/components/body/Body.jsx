import './body.css'
import Project from './projects/Project';
import Skill from './skills/Skill';
import About from './about/About';
import Contact from './contact/Contact';
// import Work from './work/Work';

function Body() {
  return (
  <div className="body">
    <section id="about">
      <About/>
    </section>
    <section id="projects">
      <Project/>
    </section>
    <section id="skills">
      <Skill/>
    </section>
    {/* <section id="work">
    <Work/>
    </section> */}
    <section id="contact">
    <Contact/>
    </section>
  </div>
  );
}

export default Body;
