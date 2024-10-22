import React from 'react';
import { useNavigate } from 'react-router';
import paths from './data';
import Button from '../button/button';

function SideBar(): JSX.Element {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    navigate('/'); 
  };
  return (
    <div className="w-[1/5] h-full overflow-hidden flex-shrink-0 bg-primaryLightWhite">
      <div className="pt-20 md:pt-32 lg:pt-24 lg:pl-5 flex flex-col gap-4 md:gap-7">
        {paths.map((x) => (
          <div key={x.id}>
            <div
              className={`flex items-center h-8 md:pl-[15%] xl:pl-[10%] cursor-pointer text-capitalize w-full md:ml-[5%] xl-ml-0 md:w-[90%] lg:w-[75%] hover:bg-primaryLightBlue hover:text-primaryWhite
                ${window.location.pathname === x.path ? 'bg-primaryBlue h-[40px] md:w-75% rounded-md' : 'text-primaryGray h-[40px] rounded-md'}`}
              onClick={() => x.path && navigate(x.path)}
            >
              <div className="mr-1 md:mr-2">
                {x.icon}
              </div>
              <p
    className={`text-[18px] md:text-[30px] xl:text-[18px] font-normal leading-5 hover:text-[#fffff]  ${
      window.location.pathname === x.path ? 'text-primaryWhite' : 'text-[#7E7F7F]'
    }`}
  >
    {x.name}
  </p>
            </div>
            
          </div>
        ))}
        <div className='my-[35%] pl-1 md:pl-3 md:ml-[15%] xl:ml-0'>
    <Button label='Log Out' className='w-[90%] md:w-[70%]' onClick={handleLogout}></Button>
  </div>
      </div>
    </div>
  );
}

export default SideBar;
