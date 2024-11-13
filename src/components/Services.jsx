

const Services = () => {
  
    const Objects = [
        {
            Img:"./resources/res_img_1.png",
            Heading:"Assignment",
            Star:"./star.png",
            Number:"(178)"
        },
        {
            Img:"./resources/res_img_2.png",
            Heading:"Dissertation",
            Star:"./star.png",
            Number:"(150)"
        },
        {
            Img:"./resources/res_img_3.png",
            Heading:"Course work",
            Star:"./star.png",
            Number:"(120)"
        },
        {
            Img:"./resources/res_img_4.png",
            Heading:"Thesis",
            Star:"./star.png",
            Number:"(129)"
        },
        {
            Img:"./resources/res_img_5.png",
            Heading:"Essay",
            Star:"./star.png",
            Number:"(47)"
        },
        {
            Img:"./resources/res_img_6.png",
            Heading:"Research Paper",
            Star:"./star.png",
            Number:"(59)"
        },
        {
            Img:"./resources/res_img_7.png",
            Heading:"Power Point Presentation",
            Star:"./star.png",
            Number:"(89)"
        },
        {
            Img:"./resources/res_img_8.png",
            Heading:"Programming",
            Star:"./star.png",
            Number:"(134)"
        },
        {
            Img:"./resources/res_img_9.png",
            Heading:"Paper Writting",
            Star:"./star.png",
            Number:"(193)"
        },
        {
            Img:"./resources/res_img_10.png",
            Heading:"Case Study",
            Star:"./star.png",
            Number:"(125)"
        },
        {
            Img:"./resources/res_img_11.png",
            Heading:"Speech Writing",
            Star:"./star.png",
            Number:"(100)"
        },
        {
            Img:"./resources/res_img_12.png",
            Heading:"Term Paper Writting",
            Star:"./star.png",
            Number:"(135)"
        },
        {
            Img:"./resources/res_imh_13.png",
            Heading:"Cover Letter Writting",
            Star:"./star.png",
            Number:"(120)"
        },
        {
            Img:"./resources/res_img_14.png",
            Heading:"Resume Maker",
            Star:"./star.png",
            Number:"(132)"
        },

    ]

  return (
    <section className=" p-6 ">
        <div className="bg-purple-200 w-full h-full rounded-md justify-center">
            <div className="text-center p-5">
                <h1 className="text-2xl font-semibold font-serif">Our Services</h1>
                <p className="font-serif">We offer some fantastic services</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-10     ">
                {
                    Objects.map((items,key) => {
                        let {Img,Heading,Star,Number} = items
                        return <div key={key} className="mx-auto border-2 h-[260px] w-[200px] overflow-hidden bg-cover  rounded-lg shadow-md shadow-black  ">
                            <div className="">
                            <img className="h-[180px] w-full  " src={Img}/>
                            </div>
                           
                            <div className="text-start">
                            <h4 className="font-serif">{Heading}</h4>
                            <div className="flex pt-2 size-7">
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                            <p className="font-serif">{Number}</p>
                            </div>
                            </div>
                        </div>
                    })
                }
                
               
                
               
            </div>

        </div>

    </section>
  )
}

export default Services;