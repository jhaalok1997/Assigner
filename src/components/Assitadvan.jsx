

const Assitadvan = () => {

    const objects = [
        {
            Heading: "No Plagiarism",
            Para: "100% original answers that lesson the the possibility of receiving a bad grade.",
        },
        {
            Heading: "On-time Submission",
            Para: "We promise to turn in the job ahead of schedule, no matter how difficult it is.",
        },
        {
            Heading: "24/7 Support",
            Para: "Help for homework is aailable 24/7 we are always here to assist students with their assignments.",
        },
        {
            Heading: "Rewrites that satisfy",
            Para: "Get your schoolwork redone as many times as you like till you are happy.",
        },
    ]

    return (
        <section className="p-2">
            <div className="relative">
                <img className="hidden md:block rotate-180 size-28 absolute top-[280px] left-4" src="./Assects/OBJECTS (2).png" />
            </div>
            <div className="bg-white sm:bg-white  md:bg-white lg:bg-white h-[400px]   ">
                <div className="p-4 text-center">
                    <h2 className="text-2xl font-title font-semibold text-purple-900">Our Assistance's advantages</h2>
                    <p className="font-title text-sm">The Assigner wants to build a strong foundation that will enable students to soar to achievement . </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4  text-center gap-3 p-12 h-60 ">
                    {
                        objects.map((items, key) => {
                            let { Img, Heading, Para } = items
                            return <div key={key} className=" mx-auto h-[187px] w-[270px] bg-[#EE481447] border-2 justify-items-center p-3 rounded-md shadow-md shadow-slate-500 space-y-1">
                                <img className="h-12 " src={Img} />
                                <h2 className="text-title">{Heading}</h2>
                                <p className="text-xs text-title">{Para}</p>
                            </div>
                        })
                    }

                </div>
            </div>
            <div className="relative">
                <img className="hidden md:block absolute right-2 bottom-36  " src="./Assects/OBJECTS (3).png" />
            </div>

        </section>
    )
}

export default Assitadvan