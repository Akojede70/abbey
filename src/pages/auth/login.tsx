import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/InputField/inputfield';
import Button from '../../components/button/button';
import { loginUser } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'flowbite-react'; 
// import { Toast } from 'flowbite-react';
const Login: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
   
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
                    setLoading(true);
                    try {
                        const response = await loginUser(values);
                        console.log('Login successful:', response.data);
                        navigate("/dashboard");
                    } catch (error) {
                        // Handle errors appropriately
                        // setErrors({ server: error.response?.data?.message || 'Login failed' });
                    } finally {
                        setSubmitting(false);
                        setLoading(false); 
                    }
                }}
            >
                {({ isSubmitting, handleChange, handleBlur, values }) => (
                    <Form className="bg-white p-6 rounded shadow-md w-96">
                        <h2 className="text-xl font-bold text-center text-primaryGray">Login</h2>

                        {/* Email Field */}
                        <InputField
                            name="email"
                            placeholder="Enter Email"
                            type="email"
                            label="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                        {/* Password Field */}
                        <InputField
                            name="password"
                            placeholder="Password"
                            type="password"
                            label="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            password={true}
                            required
                        />
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

                        {/* Error Message for Server-Side Validation */}
                        <ErrorMessage name="server" component="div" className="text-red-500 text-sm text-center" />

                        {/* Submit Button */}
                        <div className="mt-[18px]">
                            <Button
                                width="w-full"
                                height="h-[45px]"
                                className='flex items-center justify-center'
                                label={
                                    loading ? (
                                        <Spinner className="w-10 h-8" />  
                                    ) : (
                                        "Login"
                                    )
                                }
                                type="submit"
                            />
                        </div>

                        {/* Registration Redirect */}
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
