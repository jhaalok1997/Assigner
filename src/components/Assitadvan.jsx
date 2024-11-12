

const Assitadvan = () => {

    const objects = [
        {
            Heading:"No Plagiarism",
            Para:"100% original answers that lesson the the possibility of receiving a bad grade.",
        },
        {
            Heading:"On-time Submission",
            Para:"We promise to turn in the job ahead of schedule, no matter how difficult it is.",
        },
        {
            Heading:"24/7 Support",
            Para:"Help for homework is aailable 24/7 we are always here to assist students with their assignments.",
        },
        {
            Heading:"Rewrites that satisfy",
            Para:"Get your schoolwork redone as many times as you like till you are happy.",
        },
    ]

  return (
    <section className="justify-center h-full">
    <div className="p-4 text-center">
        <h2 className="text-2xl font-serif font-semibold text-purple-900">Our Assistance's advantages</h2>
        <p className="font-serif">The Assigner wants to build a strong foundation that will enable students to soar to achievement . </p>
    </div>
    <div className="grid sm: grid-cols-2   md:grid-cols-4 gap-9 text-center p-16 h-60 ">
        {
            objects.map((items, key) => {
                let { Img, Heading, Para } = items
                return <div key={key} className=" md: h-[187px] w-[270px] bg-[#EE481447] border-2 justify-items-center p-6 rounded-md shadow-md shadow-slate-500 space-y-1">
                    <img className="h-12 " src={Img} />
                    <h2>{Heading}</h2>
                    <p className="text-xs">{Para}</p>
                </div>
            })
        }
       
    </div>
</section>
  )
}

export default Assitadvan