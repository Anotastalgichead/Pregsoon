import './style.css';
import CopyRight from "../Images/Copyright_.png"

const Footer = () => {
    return (
        <>
            <div className='container flex justify-center py-[20px] '>
                <div className='relative'>
                    <img src={CopyRight} alt='copyright' className='absolute' />
                    <p className='text-[12px] text-white pl-[25px]'>Copyright Pregsoon 2024</p>
                </div>
            </div>
        </>
    );
}

export default Footer;


