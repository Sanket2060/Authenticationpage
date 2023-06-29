import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imaged from './imaged.jpg'
import { BiSolidShow } from "react-icons/bi";
// font-family: 'Belanosima', sans-serif;
function App() {
  const [hidepassword, sethidepassword] = useState(true);
  const [password, setpassword] = useState("");


  const thepasswordfunc = (event) => {   //Yesma event undefined vaniraxa
    setpassword(event.target.value);
    console.log(password);
  }

  const hidepasswordfunc = () => {
    sethidepassword(true);


  }
  useEffect(thepasswordfunc, [password]);
  return (
    <>
      <div className="backgrounddiv bg-[#a9d9cd] w-screen h-screen flex justify-center items-center">

        <div className="containerdiv   min-w-[50vw] min-h-[40vw] flex flex-col items-center ">
          <div className="text mt-[60px] mb-[120px] text-[#b76b63] text-center font-Belanosima min-w-[25vw] text-4xl">USER ICON LOGIN FORM</div>
          <div className="authenticationbox border-[1px] rounded-[3px] text-white w-[400px] h-[264px] bg-[#3b8590]">
            <div className="profilepic border-[1px] w-36 h-36 rounded-[50%] absolute top-[230px] left-[701px] z-10  overflow-hidden">
              <img src="https://easydrawingguides.com/wp-content/uploads/2021/05/Doraemon-Step-10.png" alt="" className='rounded-[50%]' />
            </div>
            <input type="text" className=" bg-inherit placeholder:text-white mt-[80px] mb-[15px] ml-[20px] focus:outline-none h-8  focus:border-b-[1px] border-white w-[23vw] " placeholder="Username" />
            <input type="text" onChange={thepasswordfunc} className=" bg-inherit placeholder:text-white mt-[27px] ml-[20px] focus:outline-none h-8  border-white-500 w-[22vw] focus:border-b-[1px]" placeholder="Password" />
            <span className="showpassword" onClick={hidepasswordfunc}><BiSolidShow /></span>

            <div className="forgotpassword text-center mt-8 focus:cursor-pointer">Forgot Password?</div>
          </div>
          <div className="login w-[400px] rounded-[3px] text-white text-center bg-red-600 mt-[18px] py-[12px] focus:cursor-pointer">Login</div>


        </div>
      </div>
    </>
  )
}

export default App
