import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/InputField/inputfield';
import Button from '../../components/button/button';
import { registerUser } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'flowbite-react'; 
import { toast } from 'react-toastify';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        bio: Yup.string().required('Bio is required'),
        password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
        .required('Password is required'),      
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'),], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    return (
        <div className="flex items-center justify-center h-screen bg-primaryLightWhite">
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    bio: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    setLoading(true);
                    try {
                        const response = await registerUser(values);
                        toast.success('Registration successful!'); 
                        console.log('Registration successful:', response.data);
                        navigate("/dashboard");
                    } catch (error: any) {
                        toast.error(error.response?.data?.message || 'Registration failed'); 
                    } finally {
                        setLoading(false);
                    }
                }}
            >
                {({ handleChange, handleBlur, values }) => (
                    <Form className="bg-white p-6 rounded shadow-md w-[21rem] xs:w-96 md:w-[33rem] xl:w-96">
                        <h2 className="text-xl font-bold text-center text-primaryGray">Register</h2>
                        
                    
                        <div>
    <div className="flex space-x-4"> 
        <div className="flex flex-col w-full">
            <InputField
                name="firstName"
                placeholder="Enter First Name"
                label='First Name'
                required
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
        </div>
        
        <div className="flex flex-col w-full">
            <InputField
                name="lastName"
                placeholder="Enter Last Name"
                label='Last Name'
                required
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
        </div>
    </div>
</div>
                        <InputField
                            name="email"
                            placeholder="Enter Email"
                            type="email"
                            label='Email'
                            required
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                        <InputField
                            name="bio"
                            placeholder="Tell us about yourself..."
                            label="Bio"
                            required
                            type="textarea"
                            value={values.bio}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <ErrorMessage name="bio" component="div" className="text-red-500 text-sm" />

                        <div className="flex space-x-4">
    <div className="flex flex-col w-full">
        <InputField
            name="password"
            placeholder="Password"
            type="password"
            label='Password'
            required
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            password={true}
        />
        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
    </div>

    <div className="flex flex-col w-full">
        <InputField
            name="confirmPassword"
            placeholder="Confirm"
            type="password"
            label='Confirm Password'
            required
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            password={true}
        />
        <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
    </div>
</div>

                        <div className='mt-[18px]'>
                            <Button 
                                width="w-full" 
                                height='h-[45px]' 
                                className='flex items-center justify-center'
                                label={loading ? <Spinner className="w-10 h-8" /> : "Register"} 
                                type="submit" 
                            />
                        </div>
                        
                        <div className="mt-4 text-center">
                            <p className="text-sm text-primaryGray">
                                Already have an account?{' '}
                                <a href="/" className="text-primaryBlue hover:underline">Login</a>
                            </p>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;
