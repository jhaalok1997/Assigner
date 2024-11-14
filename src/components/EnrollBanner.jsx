

const EnrollBanner = () => {
    return (
        <div>
             <div className="relative ">
                <img className="rounded-md h-[650px] opacity-30" src="./backgroundImage.png" />
                <div className="absolute top-56 right-[7%]">
                    <img className="h-[409px] opacity-60" src="./Group 1984.png" />
                </div>
                <div className="absolute bottom-[49%] right-10">

                    <img className=" h-[300px]" src="./layer.png" />
                </div>
                <div className="absolute top-24 left-32">
                    <h1 className="text-2xl sm:text-3xl font-serif font-semibold md:text-5xl text-[#9F0D76]">IELTS Preparation</h1><br/>
                    <h1 className="text-2xl sm:text-4xl font-serif font-semibold md:text-5xl text-[#5A156B]">Online Best Learning</h1><br/>
                    <h2 className="text-2xl sm:text-3xl font-serif font-semibold md:text-5xl text-[#A259FF]">opportunities in The World</h2>
                    <p className="pt-12 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat assumenda veniam <br/>doloribus, facere nesciunt molestias distinctio reiciendis neque exercitationem alias<br/> officia, repudiandae error  repellendus blanditiis culpa incidunt .</p>
                    <div className="pt:13 pl-4 sm:pt-8 md:pt-14 md:pl-8">
                       <button className="bg-[#5A156B] text-white  w-56 h-14 rounded-lg text-title">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnrollBanner;
