import React from 'react';
import { useNavigate } from 'react-router';
import paths from './data';
import { Logout } from '../../assets/images-icon';

function SideBar(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="w-[23%] h-full overflow-hidden flex-shrink-0 bg-[#F7FAFC]">
      <div className="pt-20 md:pt-32 lg:pt-5 lg:pl-5 flex flex-col gap-4 md:gap-7">
        {paths.map((x) => (
          <div key={x.id}>
            <div
              className={`flex items-center h-8 lg:pl-[10%] cursor-pointer text-capitalize w-full  lg:w-[75%] hover:bg-primarySemiBlack hover:text-primaryWhite
                ${window.location.pathname === x.path ? 'bg-primaryLightBlack h-[40px] md:w-75% rounded-md' : 'text-primaryGray h-[40px] rounded-md'}`}
              onClick={() => x.path && navigate(x.path)}
            >
              <div className="hidden md:block lg:mr-2">
                {x.icon}
              </div>
              <p
    className={`text-xs md:text-[18px] font-normal leading-5 hover:text-[#fffff]  ${
      window.location.pathname === x.path ? 'text-primaryWhite' : 'text-[#7E7F7F]'
    }`}
  >
    {x.name}
  </p>
            </div>
            
          </div>
        ))}
        <div className='my-[48%] pl-1 md:pl-3 w-[90%] md:w-[77%] cursor-pointer hover:scale-110 transition-transform duration-300'>
    <img src={Logout} alt='logout'/>
  </div>
      </div>
    </div>
  );
}

export default SideBar;
