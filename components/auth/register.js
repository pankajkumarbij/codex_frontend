import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/reducers/authSlice';

export default function Register() {

  const dispatch = useDispatch();

  return (
    <>
      <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium text-gray-900">Create Your Account</h3>
        <div className="space-y-6" action="#">
          <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
          </div>
          <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create account</button>
          <div className="text-sm font-medium text-gray-500 flex justify-center">
            Already registered? <a onClick={()=>dispatch(doLogin())} className="text-blue-700 hover:underline ml-1 cursor-pointer">Log in</a>
          </div>
        </div>
      </div>
    </>
  )
}