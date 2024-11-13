

const Features = () => {

    const objects = [
        {
            Img: "./awesomeFeatures/feat_img_1.png",
            Heading: "Plagiarism Checker",
            Para: "We will provide access to assignments free of plagiarism"
        },
        {
            Img: "./awesomeFeatures/feat_img_2.png",
            Heading: "Free Publication",
            Para: "We will provide access to publication",
        },
        {
            Img: "./awesomeFeatures/feat_img_3.png",
            Heading: "Provides Free Books and PDF",
            Para: "Free Books and Pdf will be provided",
        },
        {
            Img: "./awesomeFeatures/feat_img_4.png",
            Heading: "Paraphraser",
            Para: "A paraphraser will be provided"
        }
    ]

    return (
        <>
            <section className="justify-center">
                <div className="p-4 text-center">
                    <h2 className="text-2xl font-sans font-semibold text-purple-900">Awesome Features</h2>
                    <p className="">Get ready to unlock the next level of features</p>
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 text-center p-12  ">
                    {
                        objects.map((items, key) => {
                            let { Img, Heading, Para } = items
                            return <div key={key} className="h-[187px] w-[270px] border-2 justify-items-center p-6 rounded-md shadow-lg shadow-black space-y-1 mx-auto">
                                <img className="h-12  " src={Img} />
                                <h2>{Heading}</h2>
                                <p className="text-xs">{Para}</p>
                            </div>
                        })
                    }

                </div>
            </section>

        </>
    )
}

export default Features