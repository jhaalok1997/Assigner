

const Footer = () => {
  return (
    <footer>
      <div className="relative  overflow-hidden">
        <img className="opacity-50" src="./footer/footer_img_background.png" alt="Footer's Background Image" />
        <div className="grid grid-cols-3 absolute top-4 p-20 space-x-10 rotate-2">
          <div >
            <h1 className="font-serif text-xl font-semibold italic pl-3">Quick Links</h1>
            <div className="p-3 list-none font-serif italic space-y-4">
              <li>Home</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>How We Help?</li>
              <li>Community</li>
            </div>
          </div>

          <div >
            <h1 className="font-serif text-xl font-semibold italic pl-3">Features</h1>
            <div className="p-3 list-none  font-serif italic space-y-4">
              <li>Plagiarism Checker</li>
              <li>Free Publications</li>
              <li>provides Books</li>
              <li>Provides PDF</li>
              <li>Paraphraser</li>
            </div>
          </div>

          <div >
            <h1 className="font-serif text-xl font-semibold italic pl-3">Our offering</h1>
            <div className="p-3 list-none  font-serif italic space-y-4">
              <li>Free IELTS Masterclass</li>
              <li>Talk to Counsellor</li>
              <li>IELTS Exam Overview</li>
              <li>Important IELTS Articles</li>
            </div>
          </div>

        </div>

        <div className=" absolute left-[52%] top-12  ">
          <img className="" src="./footer/OBJECTS.png" />
          <div className="absolute top-52 left-60">
            <h1 className="font-serif font-semibold italic">Newsletter</h1>
            <p className="font-serif pt-2">You can trust us. We only send promo offers, </p>
            <div className="pt-4 space-x-8 rotate-2" >
              <button className="bg-purple-800 text-white p-2  font-serif">Your email here</button>
              <button className="bg-pink-800 text-white p-2  font-serif">Subscribe</button>
              <div className="pt-4">
                <img className="bg-black  " src="./Container.png" />
              </div>

            </div>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer;