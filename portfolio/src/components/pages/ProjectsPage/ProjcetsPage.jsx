import React from 'react';

//Components
import Title from '../../elements/Title/Title';
import Projects from '../../wraps/Projects/Projects';

//Style
import './ProjectsPage.scss';

function ProjectsPage() {
  const projects = [
    {id: 1, title: 'First block', subtitle: 'First block description', bgImg: 'project_bg', variables: 'project-item'},
    {id: 2, type: 'bigger', title: 'Second block', subtitle: 'Second block description', bgImg: 'project_bg', variables: 'project-bigger project-item'},
    {id: 3, title: 'Third block', subtitle: 'Third block description', bgImg: 'project_bg', variables: 'project-item'},
    {id: 4, title: 'Third block', subtitle: 'Third block description', bgImg: 'project_bg', variables: 'project-item'},
    {id: 5, title: 'Third block', subtitle: 'Third block description', bgImg: 'project_bg', variables: 'project-item'},
    {id: 6, title: 'Third block', subtitle: 'Third block description', bgImg: 'project_bg', variables: 'project-item'},
    {id: 7, title: 'Third block', subtitle: 'Third block description', bgImg: 'project_bg', variables: 'project-item'},
    {id: 8, title: 'Third block', subtitle: 'Third block description', bgImg: 'project_bg', variables: 'project-item'},
  ];

  return ( 
    <div className = "projects-page">
      <Title 
        title="Проекты"
        text="На этой странице вы можете ознакомиться со всем проектами, в которых я участвовал."
      />
      <Projects variables="projects-page projects-container" projects={projects} />           
    </div>
  );
}

export default ProjectsPage;