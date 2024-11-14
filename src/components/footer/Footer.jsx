

const Footer = () => {
  return (
    <footer>
      <div className="relative  md:overflow-hidden ">
        <img className="h-[900px] sm:w-full sm:h-[700px] md:h-auto opacity-50  " src="./footer/footer_img_background.png" alt="Footer's Background Image" />
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-2 space-x-2 md:grid-cols-3 absolute top-4 p-20 md:space-x-10 ">
          <div className="">
            <h1 className="font-serif sm:text-md  md:text-xl font-semibold  pl-3">Quick Links</h1>
            <div className="p-3 list-none font-serif italic space-y-4 ">
              <li className="hover:bg-slate-50 rounded cursor-pointer active:font-bold ">Home</li>
              <li className="hover:bg-slate-50 rounded cursor-pointer active:font-bold ">About Us</li>
              <li className="hover:bg-slate-50 rounded cursor-pointer active:font-bold ">Blog</li>
              <li className="hover:bg-slate-50 rounded cursor-pointer active:font-bold ">FAQ</li>
              <li className="hover:bg-slate-50 rounded cursor-pointer active:font-bold ">Contact Us</li>
              <li className="hover:bg-slate-50 rounded cursor-pointer active:font-bold ">How We Help?</li>
              <li className="hover:bg-slate-50 rounded cursor-pointer active:font-bold ">Community</li>
            </div>
          </div>

          <div >
            <h1 className="font-serif md:text-xl font-semibold  pl-3">Features</h1>
            <div className="p-3 list-none  font-serif italic space-y-4">
              <li className="hover:bg-slate-50 rounded cursor-pointer active:font-bold ">Plagiarism Checker</li>
              <li className="hover:bg-slate-50 rounded cursor-pointer active:font-bold ">Free Publications</li>
              <li className="hover:bg-slate-50 rounded cursor-pointer active:font-bold ">provides Books</li>
              <li className="hover:bg-slate-50 rounded cursor-pointer active:font-bold ">Provides PDF</li>
              <li className="hover:bg-slate-50 rounded cursor-pointer active:font-bold ">Paraphraser</li>
            </div>
          </div>

          <div >
            <h1 className="font-serif md:text-xl font-semibold  pl-3">Our offering</h1>
            <div className="p-3 list-none  font-serif italic space-y-4">
              <li className="hover:bg-slate-50 rounded cursor-pointer">Free IELTS Masterclass</li>
              <li className="hover:bg-slate-50 rounded cursor-pointer">Talk to Counsellor</li>
              <li className="hover:bg-slate-50 rounded cursor-pointer">IELTS Exam Overview</li>
              <li className="hover:bg-slate-50 rounded cursor-pointer">Important IELTS Articles</li>
            </div>
          </div>

        </div>

        <div className="absolute top-[267px] left-   sm:absolute sm:top-[180px] sm:left-32  md:absolute md:left-[52%] md:top-12 mt-10 md:mt-0  ">
          <img className="mx-auto h-auto" src="./footer/OBJECTS.png" />
          <div className="xm:absolute xs:top-4 sm:transform -translate-x-1 absolute top-40 left-60 ">
            <h1 className="font-serif font-semibold italic md:text-xl">Newsletter</h1>
            <p className="text-sm sm:text-md font-serif pt-2 ">You can trust us. We only send promo offers, </p>
            <div className="gap-2 sm:gap-2 pt-4  space-x-8  " >
              <input className=" text-black p-2 rounded-md  font-serif" placeholder="Your email here..." type="email"/>
              <button className="bg-pink-800 text-white p-2 rounded-md font-serif">Subscribe</button>
              <div className="pt-5 pr-8">
                <img className="bg-black w-52 " src="./Container.png" />
              </div>
              
            </div>
          </div>

        </div>

      </div>


    </footer>
  )
}

export default Footer;