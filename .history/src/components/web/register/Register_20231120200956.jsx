import React from 'react'
import Input from '../../shared/Input';

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

    const renderInputs = inputs.map( (input, index) => 
    <Input type={} />
    )


  return (
    <>
    <h2>Create Account</h2>
    </>
  )
}
