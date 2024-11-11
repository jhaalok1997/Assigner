import { FaFilePdf } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";

const ResourseCont = () => {
    return (
        <div>
            <div className="h-[234px] p-10">
                <div className="bg-slate-300 shadow-md shadow-slate-400 justify-center ">
                    <h1 className="font-cormorant text-[48px] text-center">700+ students saved, and counting</h1>
                    <div className="">
                        <p className="text-[20px] text-center pt-6">50K new study notes added every day, from the world's most active student <br />communities </p>

                    </div>


                    <div className="grid  grid-cols-3 gap-10 text-center p-12">
                        <div className="bg-white w-[258px]">
                            <p className="text-4xl font-semibold m-4 "><FaFilePdf className="relative top-14 text-sm" /> 350+<br /><p className="text-sm p-2">Study resources</p></p>
                        </div>
                        <div className="bg-white w-[258px]">
                            <p className="text-4xl font-semibold m-4 "><LiaUniversitySolid className="relative top-14 text-sm" />115+<br /><p className="text-sm p-2">Institution</p></p>
                        </div>
                        <div className="bg-white w-[258px]">
                            <p className="text-4xl font-semibold m-4 "><FaRegUser className="relative top-14 text-sm" />700+<br /><p className="text-sm p-2">Users</p></p>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default ResourseCont;