import { FaFilePdf } from "react-icons/fa";

const Herosection = () => {
    return (
        <>
            <div className="">
                <div className="relative">
                    <img className="h-[503px] w-full" src="./heroImage.png" />
                    <div className="absolute bottom-72 pl-8">
                        <p className="font-serif text-4xl font-bold text-[#5A156B]">Navigate Your<br/> Academic Journey<br/> <span className="text-[#E52FDE] font-semibold">With Confidence</span></p>

                    </div>


                    <div className="absolute bottom-44 pl-8   ">
                        <p className="font-serif italic ">Providing high-quality and comprehensive assistance <br/> with assignments and thesis writing for students<br/> 
                        at all academic levels.</p>
                    </div>
                </div>

              
            </div>
        </>
    )
}

export default Herosection;