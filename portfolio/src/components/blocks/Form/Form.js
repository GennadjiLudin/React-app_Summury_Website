import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Components 
import Input from '../../elements/Input/Input';
import Button from '../../elements/Button/Button';
import Textarea from '../../elements/Textarea/Textarea';

// Styles
import './Form.scss';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.number()
    .min(11, 'Too Short!')
    .max(12, 'Too Long!'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
});

const ContactForm = () => {
    return (
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting, resetForm}) => {
          setSubmitting(true);

          setTimeout(() => {
            alert(JSON.stringify(values, null, 4))
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
        <form onSubmit={handleSubmit} className="form">
            <Input 
              name="name"
              type="text"
              valuesName={values.name}
              handleChange={handleChange}
              handleBlur={handleBlur}
              inputName="Name:"
              error={touched.name}
              errorName={errors.name}
              holderText="Enter your name"
            />
            <Input 
              name="phone"
              type="tel"
              valuesName={values.phone}
              handleChange={handleChange}
              handleBlur={handleBlur}
              inputName="Phone:"
              error={touched.phone}
              errorName={errors.phone}
              holderText="Enter contact phone"
            />  
            <Input 
              name="email"
              type="email"
              valuesName={values.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
              inputName="Email:"
              error={touched.email}
              errorName={errors.email}
              holderText="Enter your email"
            />   
            <Textarea 
              name="message"
              valuesName={values.message}
              handleChange={handleChange}
              handleBlur={handleBlur}
              inputName="Message:"
              error={touched.message}
              errorName={errors.message}
            />
          <Button type="submit" text="Submit" variables="form-button" disabled={isSubmitting} />
        </form>
        )}
      </Formik>
    );
};

export default ContactForm;


                // <Input name="name" type="text" htmlFor="name" dataInput={values.name} inputName="Username:" inputHandler={this.inputHandler} error={values.name.error}/>
                // <Input name="phone" type="tel" htmlFor="phone" dataInput={values.phone} inputName="Phone:" inputHandler={this.inputHandler} error={values.phone.error}/>
                // <Input name="email" type="email" htmlFor="email" dataInput={values.email} inputName="Email:" inputHandler={this.inputHandler} error={values.email.error}/>
                // <Textarea name="message" htmlFor="message" textareaName="Message:" textareaHandler={this.inputHandler} errorText={values.message.error}/>
                // <Button text="Send" clickHandler={this.validate} variables="form-button" />
 
