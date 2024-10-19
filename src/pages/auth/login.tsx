import React from 'react'
import InputField from '../../components/InputField/inputfield'
import Button from '../../components/button/button'

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-primaryLightWhite">
    <form  className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold text-center text-primaryGray">Login</h2>
        <InputField placeholder="Enter Email" name="email" type="email" label='Email' required />
            <InputField placeholder="Password" name="password" type="password" label='Password' password={true} required />
        <div className='mt-[18px]'>
        <Button width="w-full" height='h-[45px]' label="Register" type="submit" />
        </div>
    </form>
</div>
  )
}

export default Login
