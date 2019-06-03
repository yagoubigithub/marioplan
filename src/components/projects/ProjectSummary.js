import React from 'react';
import moment from 'moment';

const ProjectSummary =  ({project}) =>{

    return(
        <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
          <p>Posted By {project.autherFirstName}  {project.autherLastName}</p>
          <p className="grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
        </div>
      </div>
    );

}

export default ProjectSummary;