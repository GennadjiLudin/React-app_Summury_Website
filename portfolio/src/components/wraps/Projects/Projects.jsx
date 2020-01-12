import React, {useState, useEffect} from 'react';

// Components
import Project from '../../elements/Project/Project';

// Styles
import './Projects.scss';

const Projects = ({showProject, variables, projects}) => {
    // const [showCountProject, setCount] = useState(minCountNum);

    // useEffect(() => {
    //     setCount(showProject ? projects.length : minCountNum);
    // }, [showProject]);

    return (
        <div className={`projects ${variables}`}>
            {projects.map((project, index) => (
                // index < showCountProject ? 
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
                // : null
            ))}
        </div>
    );
}

export default Projects;