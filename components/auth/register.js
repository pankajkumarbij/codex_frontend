import React,{useState} from 'react';
import { useDispatch } from "react-redux";
import { doLogin } from '../../redux/reducers/authSlice';
import axios from 'axios';
import Cookie from 'js-cookie';

export default function Register() {

  const dispatch = useDispatch();
  const [userName,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const HandleRegister = () => { 
     axios.post('http://localhost:5000/register', {
      userName,
      email,
      password
    })
    .then(function (response) {
      Cookie.set('token',response.data.token, { expires: 7 });
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium text-gray-900">Create Your Account</h3>
        <div className="space-y-6" action="#">
          <div>
            <label for="userName" className="block mb-2 text-sm font-medium text-gray-900">Your UserName</label>
            <input onChange={(e) =>setUserName(e.target.value)}  value ={userName} type="text" name="userName" id="UserName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="user123" required />
          </div>
          <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input onChange={(e) =>setEmail(e.target.value)}  value ={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
          </div>
          <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
            <input onChange={(e)=>setPassword(e.target.value)} value ={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <button onClick={()=>HandleRegister()} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create account</button>
          <div className="text-sm font-medium text-gray-500 flex justify-center">
            Already registered? <a onClick={()=>dispatch(doLogin())} className="text-blue-700 hover:underline ml-1 cursor-pointer">Log in</a>
          </div>
        </div>
      </div>
    </>
  )
}