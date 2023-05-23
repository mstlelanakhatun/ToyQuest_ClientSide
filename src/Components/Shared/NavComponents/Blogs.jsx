import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blog')
    return (
        <div className="p-10">
            <div className="mb-8">
                <h1 className="text-4xl font-semibold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side? </h1>
                <p className='my-3'>
                   
                </p>
            </div>
            <div className="mb-8">
                <h1 className="text-4xl font-semibold">2. Compare SQL and NoSQL databases?</h1>
                <p className='my-3'>

                </p>
            </div>
            <div className="mb-8">
                <h1 className="text-4xl font-semibold">3. What is express js? What is Nest JS?</h1>
                <p className='my-3'>
                </p>
            </div>
            <div className="mb-8">
                <h1 className="text-4xl font-semibold">4. What is MongoDB aggregate and how does it work?</h1>
                <p className='my-3'>
                    
                </p>
            </div>
        </div>
    );
};

export default Blogs;