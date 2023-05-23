import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blog')
    return (
        <div className="p-10">
            <div className="mb-8">
                <h1 className="text-4xl font-semibold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side? </h1>
                <p className='my-3'>Access token: The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.
Refresh token: A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times.
Mainly the access token goes to the (RS) resource server, the refresh token only goes back to the authorization server.
Regarding client-side storage, it is typically advised to put access tokens in HTTP-only cookies or safe places offered by the platform or framework. Cookies that are solely used for HTTP assist prevent cross-site scripting (XSS) attacks. Although they may be more susceptible to XSS attacks, local storage and session storage can also be employed. The choice depends on the specific security requirements and best practices of given application.

                   
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