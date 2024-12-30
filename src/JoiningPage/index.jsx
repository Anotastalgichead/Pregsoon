import "./style.css";
import Image from "../Images/Images2.jpg"
import DetailsForm from "../DetailsForm";
import SubmitButton from "../submitButton";
import FooterMessage from "../Footermessage";


const JoiningPage = () => {

    return (

        <>
            <div className="container py-[30px] ">

                <div className="flex flex-col md:flex-col lg:flex-row justify-evenly">
                    <div className="lg:h-[476px] lg:w-[581px] hidden lg:block"> <img src={Image} alt="baby" /></div>
                    <section className="flex flex-col gap-[20px]">
                        <p className="text-[#703F81] text-xs block lg:hidden">#ihaveplannedmypregnancy</p>
                        <p className="text-[#703F81] text-[26px] lg:text-[40px] font-semibold ">Benefits of joining our <br className="block lg:hidden" /> waiting <br className="hidden lg:block" />list</p>
                        <p className="text-[17px] lg:text-[18px] text-[#703F81] text-wrap	">No more confusions of what do to while you are pregnant. Get the best <br /> suggestions, get on-demand care on your scheduled times. <br />A dedicated Pregsoon’s partner to work along side you from whenever<br /> you Join us.<br />15+ tools for making your pregnancy period even happier, healthier <br /> and smooth.<br />Emergency help support</p>
                        <div className="w-[400px] !important"><DetailsForm bgcolor="f8f5f9" /></div>
                        <div className="block lg:hidden">
                            <SubmitButton />
                        </div>
                    </section>
                </div>
                <div className="hidden lg:block">
                    <FooterMessage />
                </div>

            </div>

        </>

    );
}

export default JoiningPage;