import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const DetailsForm = ({ bgcolor }) => {

    let Details = [
        "Please enter your full name",
        "Please enter your City",
        "Please enter your Mobile No.",
        "Please enter your Age",
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };

    return (

        <>
            <div className="detailsFormContainer">
                <Slider {...settings}>
                    {
                        Details.map((data, index) => {
                            return (
                                <div key={index}>
                                    <input
                                        className="bg-[#f2d9d1] border border-[#9770A4] h-[44px] w-[317px] pl-[10px] py-[10px] rounded-[10px] placeholder:text-[12px] placeholder:text-[#703F81]"
                                        placeholder={data}
                                    />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </>

    );
}

export default DetailsForm;