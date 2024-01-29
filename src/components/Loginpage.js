import React from 'react'
import ImagesLogo from '../assets/imags.png' ;
import {  AiOutlineEyeInvisible } from "react-icons/ai";
import  DataReport from '../assets/Data-report.png';
import CompanyLogo from '../assets/logo.png';
 

const Loginpage = () => {
  return (
    <div>
      <div className='w-[100%] h-[100%]'>
              {/* Login-Image  */}
       <section>
      <span className=' flex mt-8 ml-10 ' >
        <img src={ImagesLogo} alt='login-Img' width='212px' height='83px'  />
        

      </span>
      
      </section>

      <div className='flex  flex-row  '>
        
    
{/*  LogIn Form */}
      <section className='flex  w-full  ml-40 mt-2'>
        <form className="flex flex-col  mt-20 " >



        <div>
          <span className='text-2xl text-[#020C6B]'    >Login</span>
          <p className='text-[12px]'>Please login to continue</p>
          <br/>

        </div>
{/*  input box*/}
        <div className='min-w-[316px] min-h-[195px] -mt-4'>

          <span className=" ">
          <input type='mail' placeholder="Email" 
              className={`w-[346px] h-[48px] border-2 text-[1.2rem] rounded-md border-slate-400 flex justify-items-center `}
                        
                        
                      />
                      <br/>

                       <input type='password' placeholder="Password" 
              className={`w-[346px] h-[48px] border-2 text-[1.2rem] rounded-md
               border-slate-400 flex justify-items-center -mt-4 `}
                        />
                        <span className=' cursor-pointer'><AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' className='-mt-10  ml-[15rem]'/>
                        {/* <AiOutlineEye fontSize={24} fill='#AFB2BF'/>*/}</span> 
          </span>
          {/*  radio button*/}
          <br/>

         <div  className=' flex gap-[3.7rem]'>
          <span>
          <label  className='w-full flex'>
           
          <input type="checkbox" id="checkvbox" name="checkbox" value=" checkbox"   />
          <p className='text-[0.8rem]'>Keep Me Logged In</p>
           </label>

          
                     </span>
                     <br/>
                     <span className='flex text-[0.8rem] '>
                      Forget Password ?
                     </span>


          </div>
          {/*  It's Login button*/}
          <span>
            <button className='text-[18px]  min-w-[346px] min-h-[48px]   bg-[#020C6B] rounded-[8px] font-medium text-white px-[10px] py-[7px] mt-2'>
              LOGIN
            </button>
            <p className='text-[12px] text-gray-500'>By logining up, you agree to our Terms of Service and <br/> Privacy Policy</p>
          </span>
          

        </div>

        </form>

       
      </section>


<span className='border border-gray-300 h-[370px]  ml-32 '
></span>
    {/* <section  className=' flex flex-row  justify-between mx-64'>
    <div class="border border-gray-300  -mt-20  h-[420px]  "></div>
<br/>

    
    </section> */}
    


    <div className=' -mt-6 mx-40 '>
    <section className=' flex  flex-col  w-[500px] h-[500px]  '>
  <h2 className='text-[24px]'>Data Visualized, Decisions Amplified</h2>
  
<img src={DataReport} alt='DataReport'  width="450px" height="350px"/>
<p className='text-[12px]  text-gray-500 flex  justify-end items-end'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  cat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

</p>


    </section>





    </div>
    
   
      </div>
      <div className='flex justify-end -mt-30'>
      <img src={CompanyLogo} alt='company-logo' width='130px' height='115px' />
    </div>

      </div>
    </div>
  )
}

export default Loginpage
