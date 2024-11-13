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
      <div className="flex items-center"> 
        <img className="h-20 w-auto" src="./logo.jpeg" alt="Logo" /> 
        </div> 
        <div className="hidden lg:flex space-x-8">
           <ul className="flex space-x-8 bg-slate-200 p-4 rounded-md">
             <li>Home</li>
              <li>About Us</li>
               <li>Blog</li>
                <li>Our Services</li>
                 <li>ILETS & PTE</li>
                  <li>Contact Us</li> 
                  </ul> </div>
                   <div className="flex items-center">
                     <button className="bg-slate-600 w-32 h-10 rounded text-white ">Login</button>
                      </div> 
                      <div className="block lg:hidden"> 
                        <a className="text-xl cursor-pointer" onClick={handleMenu}><GiHamburgerMenu /></a>
                         </div>
    </div>
            {open &&
               ( <div className="lg:hidden bg-[#F5F5F5] shadow-md shadow-slate-400 p-4">
               <ul className="space-y-4 ">
                  <li>Home</li> 
                  <li>About Us</li> 
                  <li>Blog</li> 
                  <li>Our Services</li> 
                  <li>ILETS & PTE</li> 
                  <li>Contact Us</li>
                   </ul> 
                   </div>
               )}

       </>
  
  )
}

export default Navbar



