import './style.css';
import Image1 from "../Images/Image1.jpg";
import Image2 from "../Images/Images2.jpg";
import Image3 from "../Images/Images3.jpg";
import Image4 from "../Images/Images4.jpg";
import tick from "../Images/Vector.png"

const MobileImageSection = () => {
    const images = [Image1, Image2, Image3, Image4];

    return (
        <>
            <div className='container'>
                <div className='flex flex-col gap-3 '>
                    <p className='text-2xl text-[#703F81] font-semibold'>
                        Plan your pregnancy with<br /> <span className='text-[#A95DBC]'>Pregsoon’s</span> pregnancy <br /> solutions
                    </p>
                    {images.map((image, index) => (
                        <div key={index} className={`w-[361px] h-[${[285, 179, 340, 174][index]}px]  relative`}>
                            <img src={image} alt={index} className='MobileImage' />
                            <img src={tick} alt='tick' className='absolute right-[12px] top-0 h-[22px] w-[22px] z-[1]' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MobileImageSection;
