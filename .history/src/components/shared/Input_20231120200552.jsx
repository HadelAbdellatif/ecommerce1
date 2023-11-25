import React from 'react'

export default function Input({id, tit}) {
  return (

    <div className="input-group mb-3">
        <label htmlFor={id}>{title}</label>
        <input type={type} name={name} className="form-control" id={id} />
    </div>

  )
}
