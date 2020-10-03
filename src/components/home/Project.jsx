import React from "react";
import Chip from '@material-ui/core/Chip';
import { projectHeading, projects } from "../../editable-stuff/configurations.json";

const Project = () => {
  return (
    <div id="projects" className="jumbotron-fluid bg-transparent m-0">
      <div className="container container-fluid">
        <h1 className="display-4 pt-3 pb-3">{projectHeading}</h1>
        <div className="row">
          {projects.map((project, i) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div key={i} className="card shadow-lg rounded">
                <img className="card-img-top" style={{ height: '155px' }} src={process.env.PUBLIC_URL + '/projects/' + project.url} alt={project.name} />
                <div className="card-body">
                  <p className="card-text"><b>{project.name}</b> {project.description}</p>
                  {project.techStack.map((t, i) => (
                    <Chip size="small" className="mb-1 mr-1" key={i} label={t} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
