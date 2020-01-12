import React from 'react';
import {Link} from 'react-router-dom';

// Components

// Style
import './Project.scss';

const Project = ({title, subtitle,  bgImg, href, variables}) => {
    return (
        <Link to={{
            pathname: `/projects/${href}`,
            state: {
                title: title,
                subtitle: subtitle,
            }
        }}
        className={`project ${variables}`}>
                <img className="project__bg-img" src={`/img/${bgImg}.jpg`} alt="" />

                <div className="project__title-wrap">
                    <h3 className="project__title" >{title.toUpperCase()}</h3>
                    <p className="project__subtitle">{subtitle}</p>
                </div>
        </Link>
    );
}

Project.defaultProps = {
    title: '',
    subtitle: '',
    bgImg: 'project_bg',
    href: '#',
    variables: '',
    projectClass: '',
}

export default Project;