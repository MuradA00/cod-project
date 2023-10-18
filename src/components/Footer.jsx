// import varStyle from "../style";
import '../global.css';
import { footerLinks, footerContacts, footerSocials } from '../constants/variables.js';
import { footerDecor } from '../assets/images';

const Footer = () => {
    return (
        <footer className="bg-footer relative">
            <div className='absolute bottom-[70px] left-1/2 -translate-x-1/2'>
                <img src={footerDecor} className='h-[170px]' alt="" />
            </div>
            <div className='container'>
                <div className=' py-20 ms:py-[2.5rem]'>
                    <div className='relative flex flex-col gap-2 lg-small:gap-6'>
                        <div className='border-solid'>
                            <ul className='flex flex-wrap gap-x-9 lg-small:justify-center'>
                                {footerLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={`${link.url}`} className='text-base text-white trans-200 hover:text-y'>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex justify-end items-center relative'>
                            <div className='flex-grow bg-white opacity-[10%] h-[1px] w-full'></div>
                            <div className='bg-y flex-shrink-0 min-h-[3.375rem] flex items-center justify-center rounded-[84px] px-7'>
                                <ul className='flex gap-5 items-center relative z-[1]'>
                                    {footerSocials.map((item) => (
                                        <li key={item.icon}>
                                            <a href={`${item.url}`} className='trans-200 hover:scale-110 block'>
                                                <img src={item.icon} alt="socials-icon" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex-grow bg-white opacity-[10%] h-[1px] w-full hidden lg-small:block'></div>
                        </div>
                        <div className='flex justify-between items-center gap-4 lg-small:flex-col lg-small:items-center lg-small:text-center lg-small:gap-6'>
                            <ul className='flex flex-wrap gap-[5.375rem] justify-center lg-small:gap-x-8 lg-small:gap-y-3'>
                                {footerContacts.map((contact, index) => (
                                    <li key={index} className='flex flex-col gap-2'>
                                        <span className='font-semibold font-base text-white'>
                                            {contact.name}
                                        </span>
                                        <a className='font-[15px]' href={`${contact.nameUrl}`}>
                                            {contact.nameText}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className='self-end text-sm font-normal lg-small:self-center'>
                                © 2023 Sbott, Inc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;