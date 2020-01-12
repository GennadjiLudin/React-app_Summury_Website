import React from 'react';

//Components
import Title from '../../elements/Title/Title';
import Texts from '../../wraps/Texts/Texts';

//Style
import './AboutUs.scss';

const texts = [
  {id: 1, text: "Hello, my name is Tomasz Mazurczak. I'm freelancer. I invite you to look at my work and thanks for liking the project.", variables: "text-about"},
  {id: 2, text: "Full corporate identity visual with various versions of the logo. The creative combination of letters of the company name: Bespoke Creative LTD. (B+C+L) gave the following effects work. We used soft nude shades colors which added prestige. Website done in HTML5 + CSS3 responsive version.", variables: "text-about"},
  {id: 3, text: "I encourage you to watch the presentation.", variables: "text-about"},
]

function AboutUs() {
  return ( 
    <div className = "about-us">
        <Title 
          title="About Me"
          text="Front-End Developer | UI/Web Designer | Video Producer"
          variables="title-about"
        />
        <Texts texts={texts} />

        <Title 
          title="About Me"
          text="Front-End Developer | UI/Web Designer | Video Producer"
          variables="title-about"
        />
        <Texts texts={texts} />

        <Title 
          title="About Me"
          text="Front-End Developer | UI/Web Designer | Video Producer"
          variables="title-about"
        />
        <Texts texts={texts} />
    </div>
  );
}

export default AboutUs;