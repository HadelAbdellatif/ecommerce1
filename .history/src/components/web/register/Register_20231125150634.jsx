import React from 'react'
import Input from '../../shared/Input';
import { useFormik } from 'formik';
import { registerSchema } from '../Validate';

export default function Register() {

    const onSubmit = values => {
        console.log(values);
    }

    const initialValues={
        userName: '',
        email: '',
        password: '',
    }

    const formik = useFormik({  //like backend
        initialValues
        ,
        onSubmit
        ,
        validationSchema:registerSchema
      /*  validate: values => {
            let errors = {};
            if (!values.userName) {
                errors.userName = "user name is required";
            }
            if (!values.email) {
                errors.email = "email is required";
            }
            if (!values.password) {
                errors.password = "password is required";
            }

            return errors;
        }
        */
    });


    const inputs = [
        {
            id: 'username',
            type: 'text',
            name: 'userName',  //like backend
            title: 'User Name',
            value: formik.values.userName,  //like backend
        },
        {
            id: 'email',
            type: 'email',
            name: 'email', //like backend
            title: 'Email',
            value: formik.values.email, //like backend

        },
        {
            id: 'password',
            type: 'password',
            name: 'password', //like backend
            title: 'Password',
            value: formik.values.password, //like backend
        },
    ];


    const renderInputs = inputs.map((input, index) =>
        <Input
            type={input.type}
            id={input.id}
            name={input.name}
            title={input.title}
            value={input.value}
            onChange={formik.handleChange}
            errors={formik.errors}
            onBlur = {formik.handleBlur}
            touched = {formik.touched}
            key={index} />
    )


    return (
        <>
            <div className="container">

                <h2 className='mt-5'>Create Account</h2>
                <form className='mb-5' onSubmit={formik.handleSubmit}>
                    {renderInputs}
                    
                    <button type='submit' disabled={!formik.isValid}>Submit</button>
                </form>
            </div>
        </>
    )
}
