"use client"; // Client directive, this will be rendered on the client
import React from 'react'

const AddToCartButton = () => {
  return (
    <button className='btn btn-primary' onClick={() => alert("cliii")}> add </button>
  )
}

export default AddToCartButton