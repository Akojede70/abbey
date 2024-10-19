import React from 'react';
import InputField from '../../components/InputField/inputfield';
import Button from '../../components/button/button';

const Register: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle registration logic here
    };

    return (
        <div className="flex items-center justify-center h-screen bg-primaryLightWhite">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-xl font-bold text-center text-primaryGray">Register</h2>
                
                <div className="flex space-x-4 "> 
                    <InputField placeholder="Enter First Name" name="firstName" label='First Name' required />
                    <InputField placeholder="Enter Last Name" name="lastName" label='Last Name' required />
                </div>
                
                <InputField placeholder="Enter Email" name="email" type="email" label='Email' required />

                <InputField 
                    placeholder="Tell us about yourself..." 
                    name="bio" 
                    label="Bio" 
                    required 
                    type="textarea" 
                />
                <div className="flex space-x-4"> 
                    <InputField placeholder="Password" name="password" type="password" label='Password' password={true} required />
                    <InputField placeholder=" Password" name="ConfirmPassword" type="password" label='Confirm Password' password={true} required />
                </div>
                <div className='mt-[18px]'>
                <Button width="w-full" height='h-[45px]' label="Register" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default Register;
