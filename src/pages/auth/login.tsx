import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/InputField/inputfield';
import Button from '../../components/button/button';
import { loginUser } from '../../api/api';
import { useNavigate } from 'react-router-dom';
const Login: React.FC = () => {
    // Define the validation schema using Yup
    const navigate = useNavigate()
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    return (
        <div className="flex items-center justify-center h-screen bg-primaryLightWhite">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, setErrors }) => {
                    try {
                        const response = await loginUser(values);
                        console.log('Login successful:', response.data);
                        // Handle successful login (e.g., redirect or show success message)
                        navigate("/dashboard")
                    } catch (error) {
                        // setErrors({ server: error.response?.data?.message || 'Login failed' });
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="bg-white p-6 rounded shadow-md w-96">
                        <h2 className="text-xl font-bold text-center text-primaryGray">Login</h2>

                        <Field name="email" as={InputField} placeholder="Enter Email" type="email" label='Email' />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                        <Field name="password" as={InputField} placeholder="Password" type="password" label='Password' />
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

                        <ErrorMessage name="server" component="div" className="text-red-500 text-sm text-center" />

                        <div className='mt-[18px]'>
                            <Button 
                                width="w-full" 
                                height='h-[45px]' 
                                label={isSubmitting ? "Logging in..." : "Login"} 
                                type="submit" 
                                // disabled={isSubmitting}
                            />
                        </div>

                        <div className="mt-4 text-center">
                            <p className="text-sm text-primaryGray">
                                Don't have an account?{' '}
                                <a href="/register" className="text-primaryBlue hover:underline">Register</a>
                            </p>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
