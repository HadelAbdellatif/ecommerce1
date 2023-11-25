import React from 'react'
import Input from '../../shared/Input';
import { useFormik } from 'formik';

export default function Register() {

    const formik = useFormik({  //like backend
        initialValues: {
            userName:'',
            email:'',
            password:'',
        }
    ,
    onSubmit: values => {
            console.log(values);
        }
    ,
    validate:values=>{
        let errors={};
        if(!value.userName){
            ResizeObserverSize.user
        }
    }    
    });


    const inputs = [
        {
            id: 'username',
            type: 'text',
            name: 'userName',  //like backend
            title: 'User Name',
            value:formik.values.userName,  //like backend
        },
        {
            id: 'email',
            type: 'email',
            name: 'email', //like backend
            title: 'Email',
            value:formik.values.email, //like backend

        },
        {
            id: 'password',
            type: 'password',
            name: 'password', //like backend
            title: 'Password',
            value:formik.values.password, //like backend
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
            <form className='mb-5' onSubmit={formik.handleSubmit}>
                {renderInputs}
                <input type='submit' />
            </form>
        </div>
        </>
    )
}
