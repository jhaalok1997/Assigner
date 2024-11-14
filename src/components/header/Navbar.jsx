import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {

   const[open,setOpen] = useState(false)

   const handleMenu = () => {
    setOpen(!open)
   }


  return (
    <>
    <div className="flex flex-wrap justify-between items-center p-4 bg-[#F5F5F5] shadow-md shadow-slate-400"> 
      <div className="flex items-center "> 
        <img className="h-24 w-auto pl-3" src="./logo.jpeg" alt="Logo" /> 
        </div> 
        <div className="hidden lg:flex space-x-8">
           <ul className="flex space-x-8 bg-slate-200 p-4 rounded-md">
             <li className="hover:bg-gray-400 rounded-md p-1 cursor-pointer active:font-bold">Home</li>
              <li className="hover:bg-gray-400 rounded-md p-1 cursor-pointer active:font-bold">About Us</li>
               <li className="hover:bg-gray-400 rounded-md p-1 cursor-pointer active:font-bold">Blog</li>
                <li className="hover:bg-gray-400 rounded-md p-1 cursor-pointer active:font-bold">Our Services</li>
                 <li className="hover:bg-gray-400 rounded-md p-1 cursor-pointer active:font-bold">ILETS & PTE</li>
                  <li className="hover:bg-gray-400 rounded-md p-1 cursor-pointer active:font-bold ">Contact Us</li> 
                  </ul> 
                  </div>
                   <div className="flex items-center">
                    <a src="https://tailwindcss.com/docs/skew" target="_blank">
                     <button className="bg-slate-600 w-32 h-10 rounded text-white  ">Login</button>
                     </a>
                      </div> 
                      <div className="block lg:hidden"> 
                        <a className="text-xl cursor-pointer " onClick={handleMenu}><GiHamburgerMenu /></a>
                         </div>
    </div>
            {open &&
               ( <div className="lg:hidden bg-[#F5F5F5] shadow-md shadow-slate-400 p-4">
               <ul className="space-y-4  ">
                  <li className="pl-3 rounded-md hover:bg-slate-500 cursor-pointer active:font-bold  ">Home</li> 
                  <li className="pl-2 rounded-md hover:bg-slate-500 cursor-pointer active:font-bold">About Us</li> 
                  <li className="pl-2 rounded-md hover:bg-slate-500 cursor-pointer active:font-bold">Blog</li> 
                  <li className="pl-2 rounded-md hover:bg-slate-500 cursor-pointer active:font-bold">Our Services</li> 
                  <li className="pl-2 rounded-md hover:bg-slate-500 cursor-pointer active:font-bold">ILETS & PTE</li> 
                  <li className="pl-2 rounded-md hover:bg-slate-500 cursor-pointer active:font-bold">Contact Us</li>
                   </ul> 
                   </div>
               )}
 
       </>
  
  )
}

export default Navbar



