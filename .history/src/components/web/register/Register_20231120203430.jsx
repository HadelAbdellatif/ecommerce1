import React from 'react'
import Input from '../../shared/Input';
import { useFormik } from 'formik';

export default function Register() {


    const inputs = [
        {
            id: 'username',
            type: 'text',
            name: 'username',
            title: 'User Name',
            
        },
        {
            id: 'email',
            type: 'email',
            name: 'email',
            title: 'Email',
        },
        {
            id: 'password',
            type: 'password',
            name: 'password',
            title: 'Password',
        },
    ];

    const formic = useFormik({
        initialValues: {
            userName:'',
            email:'',
            Password:'',
        }
    });

    const renderInputs = inputs.map((input, index) =>
        <Input 
        type={input.type} id={input.id} name={input.name} title={input.title} key={index} />
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
