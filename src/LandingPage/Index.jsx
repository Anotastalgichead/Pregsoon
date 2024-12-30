import "./style.css";
import Logo from "../Images/Logo.png";
import DetailsForm from "../DetailsForm";
import ImagesSlider from "../ImagesSlider";
import SubmitButton from "../submitButton";


const LandingPage = () => {

    return (

        <>
            <div className="py-7 container">
                {/* justify-between */}
                <div>  <img src={Logo} alt="logo" /></div>
                <div className="flex justify-between pt-12 lg:pt-0 ">
                    <div className="flex flex-col lg:justify-end gap-20 ">
                        <div className="flex flex-col gap-[13px]">
                            <p className="text-[#703F81] text-xs ">#ihaveplannedmypregnancy</p>
                            <p className="text-[#703F81] text-3xl font-semibold">Join <span className="text-[#A95DBC]">Pregsoon’s</span> waiting list, and <br /> become an exclusive <span className="text-[#A95DBC]">Pregsoon</span> <br />member.</p>
                            <p className="text-[#703F81] text-xl	">Join now and avail <span className="text-[#A95DBC]">extra benefits</span> in 4 easy<br /> steps*</p>
                            <div className="w-[400px] !important"><DetailsForm bgcolor="f2d9d1" /></div>
                            <div className="block lg:hidden">
                                <SubmitButton />
                            </div>
                        </div>
                        <p className="text-[9px] text-[#703F81]">*These benefits are applied only if you are on the waiting list for the first 1Lac members</p>
                    </div>
                    <aside className="lg:flex gap-3 hidden md:hidden ">
                        <ImagesSlider />
                        <ImagesSlider />

                    </aside>
                </div>
            </div>
        </>

    );
}

export default LandingPage;