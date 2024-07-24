import React from 'react';
import { TbHomeFilled } from "react-icons/tb";
import {Icon1,Icon2, Icon3, Icon4, Icon5, Icon6, Icon7} from '../components/Icons.jsx';
const NavBar = () => {
  return (
    <nav className="flex flex-col w-20 h-[100vh] bg-secondary-700 border-r border-solid border-[#343A40]">
      <ul className="flex flex-col items-center space-y-4 py-4">
        <li>
            <img src="/images/Logo12.png" alt="mail logo"></img>
        </li>
        <li className='flex'>
        <TbHomeFilled className="text-2xl mt-24" />    
        </li>
        <li className=''>
            <Icon1 className="flex text-2xl mt-6"/>
        </li>
        <li className="">
            <Icon2 className="flex text-2xl mt-6"/>
        </li>
        <li className=''>
            <Icon3 className="flex text-2xl mt-6"/>
        </li>
        <li className=''>
            <Icon4 className="flex text-2xl mt-6"/>
        </li>
        <li className=''>
            <Icon5 className="flex text-2xl mt-6" />
        </li>
        <li className=''>
            <Icon6 className="flex text-2xl mt-6"/>
        </li>
        <li className=''>
            <Icon7 className="flex text-2xl mt-72"/>
        </li>
        </ul>
    </nav>  
  );
};

export default NavBar;
