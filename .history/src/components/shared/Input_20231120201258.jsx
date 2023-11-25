import React from 'react'

export default function Input({ id, title, type = 'text', name }) {
    return (
        <>
            <div className="input-group mb-3 m">
                <label htmlFor={id}>{title}</label>
                <input type={type} name={name} className="form-control" id={id} />
            </div>
        </>
    )
}