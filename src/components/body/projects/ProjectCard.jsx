import './projectcard.css';
function ProjectCard({project}) {
    return(
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
            <div className="project-links">
                {project.demo && (<a href={project.demo} className="project-link">
                    <div className="project-link-btn">
                    <i class="fas fa-globe"></i>Demo
                    </div>
                </a>)}
                {project.github && (<a href={project.github} className="project-link">
                    <div className="project-link-btn">
                    <i class="fab fa-github"></i>github
                    </div>
                </a>)}
            </div>
            <p>{project.about}</p>
            <div className="project-tags">
                {project.tags.map((tag)=>{
                    return(
                        <label className="tag">{tag}</label>
                    );
                })}
            </div>
            </div>
            <img src={project.image} alt="projectimage" className="project-image" />
        </div>
    );
}

export default ProjectCard;