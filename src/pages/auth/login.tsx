import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/InputField/inputfield';
import Button from '../../components/button/button';
import { loginUser } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'flowbite-react'; 
import { toast } from 'react-toastify';


const Login: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
   
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
        .required('Password is required'),
    });

    return (
        <div className="flex items-center justify-center h-screen bg-primaryLightWhite">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, ) => {
                    setLoading(true);
                    try {
                        const response = await loginUser(values);
                        console.log('Login response:', response);
                        toast.success(response?.message);
                        navigate("/dashboard");
                    } catch (error: any) {      
                        toast.error(error.response?.data?.message ||"Something went wrong!");
                    } finally {
                        setLoading(false); 
                    }
                }}
            >
                {({  handleChange, handleBlur, values }) => (
                    <Form className="bg-white p-6 rounded shadow-md w-80 xs:w-96 md:w-[33rem] xl:w-96">
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
