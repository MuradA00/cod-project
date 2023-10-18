// import varStyle from "../style";
import '../global.css';
import { footerLinks, footerContacts, footerSocials } from '../constants/variables.js';

const Footer = () => {
    return (
        <footer className="bg-footer">
            <div className='container'>
                <div className=' py-20 ms:py-[5.625rem]'>
                    <div className='relative flex flex-col gap-2'>
                        <div className='border-solid'>
                            <ul className='flex flex-wrap gap-x-9'>
                                {footerLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={`${link.url}`} className='text-base ms:text-sm text-white trans-200 hover:text-y'>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex justify-end relative'>
                        <div className='absolute top-1/2 -translate-y-1/2 left-0 bg-white opacity-[10%] h-[1px] w-full'></div>
                            <div className='bg-y w-fit min-h-[3.375rem] flex items-center justify-center rounded-[84px] px-7'>
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
                        </div>
                        <div className='flex justify-between items-center gap-4'>
                            <ul className='flex flex-wrap gap-[5.375rem] '>
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
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;