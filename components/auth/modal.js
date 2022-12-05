import { useSelector, useDispatch } from 'react-redux';
import { falseOpen, trueOpenLogin, trueOpenRegister } from '../../redux/actions';
import Login from "./login";
import Register from "./register";

export default function AuthModal() {

  const isOpenModel = useSelector((state) => state.changeOpenModel);
  const dispatch = useDispatch();

  const isHidden = isOpenModel!==0 ? "" : "hidden ";
  
  let bgTabColorLogin = "";
  if(isOpenModel===1){
    bgTabColorLogin = "bg-gray-200 dark:bg-gray-700 ";
  }
  else{
    bgTabColorLogin="";
  }

  let bgTabColorRegister = "";
  if(isOpenModel===2){
    bgTabColorRegister = "bg-gray-200 dark:bg-gray-700 ";
  }
  else{
    bgTabColorRegister="";
  }
  
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
            <Login />
          </div>
        </div>
      </div> 
    </>
  )
}