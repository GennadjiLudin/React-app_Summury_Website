import React from 'react';

// Components
import ParalaxEl from '../../elements/ParalaxEl/ParalaxEl';

// Styles
import './ParalaxWrap.scss';

const sidebarBgImgs = [
    [
        {id: 1, el: 'webpack', classes: 'paralax-el-first-layer webpack'},
        {id: 2, el: 'ps', classes: 'paralax-el-first-layer ps'},
        {id: 3, el: 'figma', classes: 'paralax-el-first-layer figma'},
        {id: 7, el: 'git', classes: 'paralax-el-first-layer git'},
    ],
    [
        {id: 5, el: 'html5', classes: 'paralax-el-second-layer html5'},
        {id: 6, el: 'css-3', classes: 'paralax-el-second-layer css-3'},
        {id: 4, el: 'nodejs', classes: 'paralax-el-second-layer nodejs'},
        {id: 8, el: 'sass', classes: 'paralax-el-second-layer sass'},
    ],
    [
        {id: 9, el: 'java-script', classes: 'paralax-el-third-layer java-script'},
        {id: 10, el: 'react', classes: 'paralax-el-third-layer react'},
        {id: 11, el: 'redux', classes: 'paralax-el-third-layer redux'},
    ],
];

const ParalaxWrap = () => {
    return (
        <div className="paralax">
            {sidebarBgImgs.map((sidebarBgImg, i) => (
                <span className="paralax__wrap">
                    {sidebarBgImg.map((el) => (
                        <ParalaxEl 
                        {...el}
                        key={el.id}
                        />
                    ))}        
                </span>
            ))}
        </div>
    );
}

export default ParalaxWrap;