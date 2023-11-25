import React from 'react'
import Input from '../../shared/Input';
import { useFormik } from 'formik';
import { registerSchema } from '../Validate';
import axios from 'axios';

export default function Register() {

    const initialValues = {
        userName: '',
        email: '',
        password: '',
        image: '',
    }

    const onSubmit = async users => {
        const formData = new FormData();
        formData.append("userName", users.userName);
        formData.append("email", users.email);
        formData.append("password", users.password);
        formData.append("image", users.image);

        const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`, formData)
    }


    const formik = useFormik({  //like backend
        initialValues
        ,
        onSubmit
        ,
        validationSchema: registerSchema
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

    const handel

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
        {
            id: 'image',
            type: 'file',
            name: 'image', //like backend
            title: 'User image',
            value: formik.values.image, //like backend
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
            onBlur={formik.handleBlur}
            touched={formik.touched}
            key={index} />
    )


    return (
        <>
            <div className="container my-5 py-5">
                <h2>Create Account</h2>
                <div className='d-flex justify-content-center'>
                    <form onSubmit={formik.handleSubmit} className='w-50' encType='multipart/form-data'>

                        {renderInputs}

                        <button type='submit' disabled={!formik.isValid} className='btn btn-warning w-25 mt-4 d-block mx-auto'>Submit</button>

                    </form>
                </div>
            </div>

        </>
    )
}
