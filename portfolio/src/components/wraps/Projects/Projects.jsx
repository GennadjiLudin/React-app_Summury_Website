import React from 'react';

// Components
import Project from '../../elements/Project/Project';

// Styles
import './Projects.scss';

const Projects = ({showProject, variables, projects}) => {

    return (
        <div className={`projects ${variables}`}>
            {projects.map((project, index) => (
                    !project.type ? (
                        <Project 
                            {...project}
                            key={project.id}
                        />
                    ) : (   
                        <Project 
                            {...project}
                            key={project.id}
                        />
                    )
            ))}
        </div>
    );
}

export default Projects;