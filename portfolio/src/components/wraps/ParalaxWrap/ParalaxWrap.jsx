import React, {useState, useEffect} from 'react';

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

    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            setX(((window.screen.width / 2) - e.pageX) * 0.015);
            setY(((window.screen.width / 2) - e.pageY) * 0.015);
        })
    }, [])

    return (
        <div className="paralax">
            {sidebarBgImgs.map((sidebarBgImg, i) => (
                <div
                className="paralax__wrap"
                key={i} style={{transform: `translate(${X * (i === 0 ? i + 1 : i * 2.5)}px, ${Y * (i === 0 ? i + 1 : i * 2.5)}px)`}}>
                    {sidebarBgImg.map((el, i) => (
                        <ParalaxEl 
                        {...el}
                        key={el.id}
                        />
                    ))}        
                </div>
            ))}
        </div>
    );
}

export default ParalaxWrap;