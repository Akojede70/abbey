/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Avatart,Logo,} from '../../assets/images-icon/';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
function Header(): JSX.Element {


    interface DecodedToken {
        firstName: string;
        lastName: string;
    }

    const navigate = useNavigate()
  const handleClick = () => {
    navigate("/dashboard")
    window.scrollTo(0,0)
  }
  const [userName, setUserName] = useState<string>('');

  const decodeToken = () => {
    const token = localStorage.getItem('token'); 
    if (token) {
        try {
            const decoded: DecodedToken = jwtDecode(token);
            setUserName(`${decoded.firstName} ${decoded.lastName}`); 
        } catch (error) {
            console.error('Failed to decode token', error);
        }
    }
};

useEffect(() => {
    decodeToken();
}, []); 

    return (
        <div className="flex items-center md:py-2 px-5 w-full overflow-hidden h-[9%] bg-[#4682B4] relative">
            <div className="flex-shrink-0 md:ml-[2%] lg:ml-[1%] w-[60px] md:w-auto ">
                <img src={Logo} alt="logo" onClick={handleClick} className=' w-[80px] h-[40px] cursor-pointer hover:scale-110 transition-transform duration-300'/>
            </div>

            <div className="relative w-[29.7%] md:w-[40%] lg:w-[29.7%] ml-[3.9%] md:ml-[7%] lg:ml-[10%] ">
  
</div>


            <div className="absolute flex left-[53%] md:left-[68%] lg:left-[76%] w-[50%] md:w-[30%] items-center">

                <div className="w-[18%] md:w-[14%] h-[10%] md:h-[14%] pb-9 lg:pb-0 pl-2 md:pl-0 md:px-1">
                    <img src={Avatart} alt="dp" />
                </div>

               <div className='flex flex-col'>

               <div className="w-full px-2 text-primaryWhite">
                    <span className="font-medium text-[16px] ">{userName}</span>
                </div>
               </div>
               
            </div>
        </div>
    );
}

export default Header;
