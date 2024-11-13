

const EnrollBanner = () => {
    return (
        <div>
             <div className="relative ">
                <img className="rounded-md h-[639px] opacity-30" src="./backgroundImage.png" />
                <div className="absolute top-56 right-[7%]">
                    <img className="h-[409px] opacity-60" src="./Group 1984.png" />
                </div>
                <div className="absolute bottom-[49%] right-10">

                    <img className=" h-[300px]" src="./layer.png" />
                </div>
                <div className="absolute top-24 left-32">
                    <h1 className="font-serif font-semibold text-5xl text-[#5A156B]">IELTS Preparation</h1><br/>
                    <h1 className="font-serif font-semibold text-5xl">Online Best Learning</h1><br/>
                    <h2 className="font-serif font-semibold text-5xl text-[#5A156B]">opportunities in The World</h2>
                    <p className="pt-12 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat assumenda veniam <br/>doloribus, facere nesciunt molestias distinctio reiciendis neque exercitationem alias<br/> officia, repudiandae error  repellendus blanditiis culpa incidunt .</p>
                    <div className="pt-14 pl-8">
                       <button className="bg-[#5A156B] text-white w-56 h-14 rounded-lg">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnrollBanner;
