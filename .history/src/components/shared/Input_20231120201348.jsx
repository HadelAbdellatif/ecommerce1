import React from 'react'

export default function Input({ id, title, type = 'text', name }) {
    return (
        <>
            <div className="input-group mb-3">
                <label htmlFor={id} className='me-2'>{title}</label>
                <input type={type} name={name} className="form-control  ms-3" id={id} />
            </div>
        </>
    )
}
