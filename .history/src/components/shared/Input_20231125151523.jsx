import React from 'react'

export default function Input({ id, title, type = 'text', name, value, onChange, errors, onBlur, touched }) {
    return (
        <>
            <div className="input-group my-3">
                <label htmlFor={id} className='me-3'>{title}</label>
                <input type={type} name={name} className="form-control" id={id} value={value} onChange={onChange} onBlur={onBlur}/>
                {touched[name] && errors[name] && <p className='text text-danger mx-3'>{errors[name]}</p>}
            </div>
        </>
    )
}
