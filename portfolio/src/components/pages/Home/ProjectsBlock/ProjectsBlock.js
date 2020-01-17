import React from 'react';
import {Link} from 'react-router-dom';

// Components 
import Projects from '../../../wraps/Projects/Projects';
import Button from '../../../elements/Button/Button';

// Styles
import './ProjectsBlock.scss';

const ProjectsBlock = ({variables, projects}) => {

    return (
        <div className="block-projects">
            <Projects variables={variables} projects={projects} />
            <Link to="/projects"> <Button text="Show all projects" /> </Link> 
        </div>
        
    );
}

export default ProjectsBlock;