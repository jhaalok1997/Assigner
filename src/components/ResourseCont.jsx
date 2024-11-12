import { FaFilePdf } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";

const ResourseCont = () => {
    return (
        <section>
            <div className="h-[387px] p-10">
                <div className=" p-5 shadow-lg shadow-slate-400 justify-center ">
                    <h1 className="font-serif text-[48px] text-center">700+ students saved, and counting</h1>
                    <div className="">
                        <p className="text-[19px] text-center pt-1 font-serif">50K new study notes added every day, from the world's most active student <br />communities </p>

                    </div>


                    <div className="grid  grid-cols-3 gap-8 text-center p-1">
                        <div className="bg-white w-[258px]">
                            <h1 className="text-5xl m-4 font-serif "><FaFilePdf className="relative  top-20 text-sm" /> 350+<br /><p className="text-sm p-4 font-serif">Study resources</p></h1>
                        </div>
                        <div className="bg-white w-[258px]">
                            <h1 className="text-5xl  m-4 font-serif"><LiaUniversitySolid className="relative top-20 text-sm" />115+<br /><p className="text-sm p-4 font-serif">Institution</p></h1>
                        </div>
                        <div className="bg-white w-[258px]">
                            <h1 className="text-5xl m-4 font-serif"><FaRegUser className="relative top-20 text-sm" />700+<br /><p className="text-sm p-4 font-serif">Users</p></h1>
                        </div>
                    </div>

                </div>



            </div>
        </section>
    )
}

export default ResourseCont;