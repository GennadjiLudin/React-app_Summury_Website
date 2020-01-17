import React, {Component} from 'react';

// Components 
import Input from '../../elements/Input/Input';
import Button from '../../elements/Button/Button';
import Textarea from '../../elements/Textarea/Textarea';

// Styles
import './Form.scss';

class Form extends Component {
    state = {
        values: {
            name: {
                value: '',
                isRequired: true,
                error: '',
            },
            phone: {
                value: '',
                error: '',
            },
            email: {
                value: '',
                isRequired: true,
                error: '',
            },
            message: {
                value: '',
                isRequired: true,
                error: '',
            },
        }
    };

    validate = (e) => {
        e.preventDefault();
        const {values} = this.state;
        let isValidate = false;
        Object.keys(values).map(el => {
            if (values[el].isRequired) {
                let isEmpty = this._isEmpty(values[el].value, el);
                switch (el) {
                    case 'name':
                        isValidate = true;
                        console.log(isEmpty);
                        if (isEmpty) {
                            isValidate = false;
                        }  
                        break;
                    case 'email':
                        console.log(isEmpty);
                        isValidate = true;
                        if (isEmpty) {
                            isValidate = false;
                        } else {
                            isValidate = this._validateEmail();
                        }
                        break;
                
                    default:
                        break;
                }
            }
        });
    }

    _isEmpty = (value, name) => {
        const {values} = this.state;
        let newObj = {
            ...values,
            [name]: {
                ...values[name],
                error: value === '' ? 'Поле не должно быть пустым!' : ''
            }
        };

        this.setState({
            values: newObj
        })
        console.log(newObj);
        return value === '' ? true : false;
    }

    _validateEmail = () => {

    }

    inputHandler = (e) => {
        const {values} = this.state;
        this.setState({
            values: {
                ...values,
                [e.target.name]: {
                    ...values[e.target.name],
                    value: e.target.value
                }
            }
        });
    }

    render() {
        const {values} = this.state;
        return (
            <form className="form">
                <Input name="name" type="text" htmlFor="email" dataInput={values.name} inputName="Username:" inputHandler={this.inputHandler} error={values.name.error}/>
                <Input name="phone" type="tel" dataInput={values.phone} inputName="Phone:" inputHandler={this.inputHandler} />
                <Input name="email" type="email" dataInput={values.email} inputName="Email:" inputHandler={this.inputHandler} />
                <Textarea name="message" textareaName="Message:" textareaHandler={this.inputHandler} />
                <Button text="Send" clickHandler={this.validate} variables="form-button" />
            </form>
        );
    }
}

export default Form;