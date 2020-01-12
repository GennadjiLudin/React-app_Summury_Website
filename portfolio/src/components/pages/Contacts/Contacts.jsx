import React from 'react';

//Components
import Title from '../../elements/Title/Title';
import Form from '../../blocks/Form/Form';
//Style
import './Contacts.scss';

function Contacts() {
  return ( 
    <div className = "contacts">
      <Title 
        title="Contact"
        text="To contact us please use the contact form visible. When sending files, please use the following e-mail"
      />
      <Form />
    </div>
  );
}

export default Contacts;