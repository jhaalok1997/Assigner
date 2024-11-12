import { FaAngleDown } from "react-icons/fa";

const Faq = () => {

    const Objects = [
        {
            Ques: "What services are available on our website? ",

        },
        {
            Ques: "How can we Guarantee the caliber of the assignments?",
        },
        {
            Ques: "What distinguishes our company from other assignment writting firms?",
        },
        {
            Ques: "Does utilizing our service have any limitations?",
        },
        {
            Ques: "How can consumers access our website's news and update?",
        },
    ]

    return (
        <section>
            <div className="text-center pt-16">
                <h1 className="text-3xl">FAQs</h1>
            </div>
            <div className="p-16">
                {
                    Objects.map((items, key) => {
                        return <div key={key} className=" grid gap-4 rounded-md  ">
                            <p className=" shadow-md shadow-black border-4 border-white flex p-4 ">{items.Ques}<span className="ml-auto">{<FaAngleDown />}</span></p>
                        </div>

                    })
                }

            </div>

        </section>
    )
}

export default Faq