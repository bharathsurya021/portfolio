import ProjectData from '../../../data/projectsData';
import Divider from '../../common/Divider';
import './project.css'
import ProjectCard from './ProjectCard';


function Project() {
  const data = ProjectData;
  return (
  <div className="projects">
    <Divider/>
    <label className="section-title">Projects</label>
    <div>
      {data.map((project)=>{
        return (
          <ProjectCard project={project}/>
        );
      })}
    </div>
  </div>
  );
}

export default Project;
