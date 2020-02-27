import React from 'react';

// Components 
import ProjectsBlock from './ProjectsBlock/ProjectsBlock';
import Title from '../../elements/Title/Title';
import ParalaxWrap from '../../wraps/ParalaxWrap/ParalaxWrap';

// Styles
import './Home.scss';

const projects = [
    {id: 1, title: 'First block', subtitle: 'First block description', bgImg: 'project_bg', variables: 'project-item-home'},
    {id: 2, type: 'bigger', title: 'Second block', subtitle: 'Second block description', bgImg: 'project_bg', variables: 'project-bigger project-item-home'},
    {id: 3, title: 'Third block', subtitle: 'Third block description', bgImg: 'project_bg', variables: 'project-item-home'},
    {id: 4, title: 'Third block', subtitle: 'Third block description', bgImg: 'project_bg', variables: 'project-item-home'},
    {id: 5, title: 'Third block', subtitle: 'Third block description', bgImg: 'project_bg', variables: 'project-item-home'},
  ];

const Home = () => {
    return (
        <div className="home">
            <Title 
                title="Проекты для портфолио" 
                text="Ниже представлен краткий список моих проектов:" 
            />
            <ParalaxWrap />
            <ProjectsBlock variables="projects-container" projects={projects} />
        </div> 
    );
}

export default Home;