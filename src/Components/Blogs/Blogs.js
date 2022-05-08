import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-success text-center'>Blogs</h1>
            <h3>What is the purpose of jwt</h3>
            <p>
                <li>jwt is an open standard used to share security information between  client and a server</li>
                <li>. Each JWT contains encoded JSON objects, including a set of claims</li>
                <li>
                    jwt are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </li>
            </p>
            <h3>Defference between javascript and node js</h3>
            <li>
                Javascript is a programming language and NodeJS is a Javascript runtime environment.
            </li>
            <li>
                It is basically used on the client-side and node js used for bakend
            </li>
            <li>
                Javascript is used in frontend development and Nodejs is used in server-side development.
            </li>
            <h3>Deffrence between sql and nosql?</h3>
            <li>These databases have fixed or static or predefined schema and </li>
            <li>These databases have fixed or static or predefined schema and They have dynamic schema</li>
            <li>These databases are best suited for complex queries and These databases are not so good for complex queries</li>

        </div>
    );
};

export default Blogs;