import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Faq = () => {

    const [show, setShow] = useState(null)

    const handleClick = (key) => {
        setShow(show === key ? null : key)
    }

    const Objects = [
        {
            Ques: "What services are available on our website? ",
            Ans: "These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. ",

        },
        {
            Ques: "How can we Guarantee the caliber of the assignments?",
            Ans: "These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.  "
        },
        {
            Ques: "What distinguishes our company from other assignment writting firms?",
            Ans: "These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. "
        },
        {
            Ques: "Does utilizing our service have any limitations?",
            Ans: "These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. "
        },
        {
            Ques: "How can consumers access our website's news and update?",
            Ans: "These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. "
        },
    ]

    return (
        <section className="h-full w-full ">
            <div className="text-center pt-16">
                <h1 className="text-3xl">FAQs</h1>
            </div>
            <div className="p-4 md:p-10 ">
                {
                    Objects.map((items, key) => {
                        return <div key={key} className=" grid gap-0.5 rounded-md  ">

                            <span className="ml-auto cursor-pointer relative top-10 right-6" onClick={() => handleClick(key)} ><FaAngleDown className={show === key ? 'transform rotate-180' : ''} /></span>

                            <p className=" shadow-md shadow-slate-500 border-4 border-white flex p-3 ">{items.Ques}</p>

                            {show === key && (<p className="pb-2 bg-slate-200">{items.Ans} </p>
                        )}

                        </div>

                    })
                }

            </div>

        </section>
    )
}

export default Faq