

const Navbar = () => {
  return (
    <>
      <div className="flex justify-start  space-x-24">
        <div>
            <img className="h-[120px] w-[249px] pl-[31px] " src="./logo.jpeg"/>
        </div>
        <div classname="">
        <div className="bg-[#F5F5F5] shadow-md shadow-slate-400 pl-6 relative top-7 ">
            <ul className="flex space-x-16 p-4 ">
                <li>Home</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Our Services</li>
                <li>ILETS & PTE</li>
                <li>Contact Us</li>
            </ul>
        </div>
        </div>
        <div className="relative top-4 p-4">
            <button className="bg-slate-600  w-[139.6px] h-[40.24px] rounded-[4.72px] text-white">Login</button>
        </div>
      </div>
    </>
  )
}

export default Navbar