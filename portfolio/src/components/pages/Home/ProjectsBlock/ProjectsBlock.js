import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// Components 
import Projects from '../../../wraps/Projects/Projects';
import Button from '../../../elements/Button/Button';

// Styles
import './ProjectsBlock.scss';

const ProjectsBlock = ({variables, minCountNum, projects}) => {
    const [showProject, setShowProject] = useState(false);

    const toggleProjects = (e) => {
        e.preventDefault();
        setShowProject(!showProject);
    }

    return (
        <div className="block-projects">
            <Projects showProject={showProject} variables={variables} projects={projects} />
            <Link to="/projects"> <Button text="Show all projects" /> </Link> 
        </div>
        
    );
}

export default ProjectsBlock;