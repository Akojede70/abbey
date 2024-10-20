import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/InputField/inputfield';
import Button from '../../components/button/button';
import { registerUser } from '../../api/api';
import { useNavigate } from 'react-router-dom';
const Register: React.FC = () => {
    // Define the validation schema using Yup
    const navigate = useNavigate()
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        bio: Yup.string().required('Bio is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), ], 'Passwords must match')
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
                onSubmit={async (values, { setSubmitting, setErrors }) => {
                    try {
                        const response = await registerUser(values);
                        console.log('Registration successful:', response.data);
                        // Handle successful registration (e.g., redirect or show success message)
                        navigate("/dashboard")
                    } catch (error) {
                        // setErrors({ server: error.response?.data?.message || 'Registration failed' });
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="bg-white p-6 rounded shadow-md w-96">
                        <h2 className="text-xl font-bold text-center text-primaryGray">Register</h2>
                        
                        <div className="flex space-x-4"> 
                            <Field name="firstName" as={InputField} placeholder="Enter First Name" label='First Name' required />
                            <Field name="lastName" as={InputField} placeholder="Enter Last Name" label='Last Name' required />
                        </div>
                        <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                        <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />

                        <Field name="email" as={InputField} placeholder="Enter Email" type="email" label='Email' required />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                        <Field name="bio" as={InputField} placeholder="Tell us about yourself..." label="Bio" required type="textarea" />
                        <ErrorMessage name="bio" component="div" className="text-red-500 text-sm" />
                        
                        <div className="flex space-x-4"> 
                            <Field name="password" as={InputField} placeholder="Password" type="password" label='Password' required />
                            <Field name="confirmPassword" as={InputField} placeholder="Confirm Password" type="password" label='Confirm Password' required />
                        </div>
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
                        
                        <ErrorMessage name="server" component="div" className="text-red-500 text-sm text-center" />
                        
                        <div className='mt-[18px]'>
                            <Button 
                                width="w-full" 
                                height='h-[45px]' 
                                label={isSubmitting ? "Registering..." : "Register"} 
                                type="submit" 
                                // disabled={isSubmitting}
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
