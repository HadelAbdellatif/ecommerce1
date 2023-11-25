import React from 'react'
import Input from '../../shared/Input';
import { useFormik } from 'formik';

export default function Register() {

    const formik = useFormik({
        initialValues: {
            userName:'',
            email:'',
            password:'',
        }
    });

    console.log(formik.values);

    const inputs = [
        {
            id: 'username',
            type: 'text',
            name: 'userName',     const formic = useFormik({
                initialValues: {
                    userName:'',
                    email:'',
                    Password:'',
                }
            });
            title: 'User Name',
            value:formik.values.userName,
        },
        {
            id: 'email',
            type: 'email',
            name: 'email',
            title: 'Email',
            value:formik.values.email,

        },
        {
            id: 'password',
            type: 'password',
            name: 'password',
            title: 'Password',
            value:formik.values.password,
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
        key={index} />
    )


    return (
        <>
        <div className="container">
           
            <h2 className='mt-5'>Create Account</h2>
            <form className='mb-5'>
                {renderInputs}
            </form>
        </div>
        </>
    )
}
