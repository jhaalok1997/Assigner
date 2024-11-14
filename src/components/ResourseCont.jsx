import { FaFilePdf } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";



const ResourseCont = () => {

    

    return (
        <section className="relative">
            <img className="hidden  md:block absolute bottom-[290px] w-32 pl-4" src="./Assects/OBJECTS (1).png" alt="Background Decorative" />
            <div className="p-2 sm:p-12 md:p-12">
                <div className="p-5 shadow-lg shadow-slate-400 flex flex-col items-center">
                    <h1 className="font-title text-2xl md:text-4xl lg:text-[48px] text-center">700+ students saved, and counting</h1>
                    <div className="mt-4">
                        <p className="text-sm md:text-lg lg:text-[19px] text-center font-title">50K new study notes added every day, from the world's most active student communities</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center mt-8">
                        <div className="bg-white  w-full md:w-[258px] p-4 shadow-md">
                            <FaFilePdf className="text-5xl mx-auto" />
                            <h1 className="text-2xl md:text-3xl font-title mt-4">350+</h1>
                            <p className="text-sm font-title mt-2">Study resources</p>
                        </div>
                        <div className="bg-white w-full md:w-[258px] p-4 shadow-md">
                            <LiaUniversitySolid className="text-5xl mx-auto" />
                            <h1 className="text-2xl md:text-3xl font-title mt-4">115+</h1>
                            <p className="text-sm font-title mt-2">Institution</p>
                        </div>
                        <div className="bg-white w-full md:w-[258px] p-4 shadow-md">
                            <FaRegUser className="text-5xl mx-auto" />
                            <h1 className="text-2xl md:text-3xl font-title mt-4">700+</h1>
                            <p className="text-sm font-title mt-2">Users</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className="hidden md:block absolute right-1 top-[220px] w-24 min-w-xs md:max-w-md lg:max-w-lg" src="./Assects/OBJECTS (2).png" alt="Background Decorative" />
        </section>
    )
}

export default ResourseCont;