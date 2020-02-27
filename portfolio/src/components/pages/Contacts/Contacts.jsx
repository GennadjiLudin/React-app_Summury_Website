import React from 'react';

//Components
import Title from '../../elements/Title/Title';
import ContactForm from '../../blocks/Form/Form';
//Style
import './Contacts.scss';

function Contacts() {
  return ( 
    <div className = "contacts">
      <Title 
        title="Контакты"
        text="Для связи со мной вы можете воспользоваться формой ниже или написать мне в социальных сетях. Ссылки на соц. сети вконце страницы."
      />
      <ContactForm />
    </div>
  );
}

export default Contacts;