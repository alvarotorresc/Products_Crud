import React from 'react'


const Error = ({ message }) => {
    return (
        <p className="alert alert-danger p3 my-5 text-uppercase font-weight-bold">{message}</p>
    );
}

export default Error;