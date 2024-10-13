import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const responseGoogle = (response) => {
        if (response.error) {
            console.error("Login failed:", response.error);
        } else {
            console.log(response);
            // Handle successful response here
            navigate('/profile');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-11/12 max-w-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <GoogleLogin
                    onSuccess={responseGoogle}
                    onError={responseGoogle}
                    style={{ width: '100%' }}
                    className="bg-red-500 text-white font-semibold py-2 px-4 rounded w-full"
                />
            </div>
        </div>
    );
};

export default Login;
