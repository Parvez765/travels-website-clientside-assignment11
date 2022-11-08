import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div className='mt-10 mb-10'>
            <h2 className='text-3xl font-bold'>Difference between SQL and NoSQL</h2>
            <p className='text-xl font-bold mt-4 mb-8'>SQL is the programming language used to interface with relational databases. <br/>NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            <h2 className='text-3xl font-bold'>What is JWT, and how does it work</h2>
            <p className='text-xl font-bold mt-4  mb-8'>SON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
        </div>
    );
};

export default Blog;