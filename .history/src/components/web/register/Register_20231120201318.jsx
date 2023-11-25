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

    const renderInputs = inputs.map((input, index) =>
        <Input type={input.type} id={input.id} name={input.name} title={input.title} key={index} />
    )


    return (
        <>
        <div className="container">
           
            <h2>Create Account</h2>
            <form>
                {renderInputs}
            </form>
        </div>
        </>
    )
}
