import { useState } from 'react';
import AuthModal from '../auth/modal';
import { useSelector, useDispatch } from 'react-redux';
import { doLogin, doRegister } from '../../redux/reducers/authSlice';

export default function Navbar() {

  const [toggle, setToggle] = useState(false);
  const [isLogin,setIsLogin] = useState(false);
  
  const dispatch = useDispatch();
  const authVar = useSelector((state) => state.auth.authVar);

  return(
    <>
      <nav className="bg-white px-2 sm:px-4 py-1 w-full z-20 top-0 left-0 border-b border-gray-200 shadow">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src="logo.png" className="h-6 mr-1 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">Codex</span>
          </a>
          <div className="flex md:order-2">
            <button className="flex items-center"><img src="search.svg" className="h-5 mr-3 sm:h-5" alt="Search Logo" /></button>
            {!isLogin ?
              <div className="flex">
                <button type="button" onClick={()=>dispatch(doLogin())} className="text-blue-700 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-0 md:mr-2">Log in</button>
                <button type="button" onClick={()=>dispatch(doRegister())} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-0 md:mr-0 hidden md:block">Get started</button>
              </div>
            :
              <div className="flex items-center">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-0 md:mr-4 md:ml-2 hidden md:block">Write your blog</button>
                <div className="group relative">
                  <button type="button" className="flex mr-1 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src="https://visualpharm.com/assets/387/Person-595b40b75ba036ed117da139.svg" alt="user photo" />
                  </button>
                  <div className="hidden group-hover:block absolute right-0 text-base list-none bg-white divide-y divide-gray-100 rounded shadow">
                    <div className="px-4 py-3">
                      <span className="block text-sm text-gray-900">Bonnie Green</span>
                      <span className="block text-sm font-medium text-gray-500 truncate">name@flowbite.com</span>
                    </div>
                    <ul className="py-1" aria-labelledby="user-menu-button">
                      <li>
                        <a href="#" className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
                      </li>
                      <li>
                        <a href="#" className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                      </li>
                      <li>
                        <a href="#" className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Earnings</a>
                      </li>
                      <li>
                        <a onClick={()=>setIsLogin(false)} className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            }
            <button type="button" onClick={()=>setToggle(!toggle)} className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className={(toggle ? "block " : "hidden ") + "items-center justify-between w-full md:flex md:w-auto md:order-1"}>
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {authVar ?
        <AuthModal />
      :
        null
      }
    </>
  );
}