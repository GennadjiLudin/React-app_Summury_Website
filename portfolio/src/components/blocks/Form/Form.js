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
        className="form"
      >
        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
            />
            {touched.name && errors.name ? (<div>{errors.name}</div>) : null}
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter contact phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
            />
            {touched.phone && errors.phone ? (<div>{errors.phone}</div>) : null}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
            {touched.email && errors.email ? (<div>{errors.email}</div>) : null}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
            />
            {touched.message && errors.message ? (<div>{errors.message}</div>) : null}
          </div>
          <Button text="Submit" variables="form-button" disabled={isSubmitting} />
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
 
