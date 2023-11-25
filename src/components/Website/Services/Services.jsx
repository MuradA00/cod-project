import { serviceCards, serviceFilterBtns } from '../../../constants/variables';
import style from './Services.module.css';
import css from '../../../style.js';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [activeBtn, setActiveBtn] = useState(0);

    const handleButtonClick = (index) => {
        setActiveBtn(index);
    }

    return (
        <section className='py-6 pb-24'>
        <div className='container flex flex-col gap-10'>
            <h4 className={`text-center ${css.headingLarge}`}>
                Boosting Services
            </h4>
            <div className='max-w-[1040px] m-auto '>
                <ul className='flex flex-wrap gap-5 ms:gap-2 justify-center ms:grid ms:grid-cols-3'>
                    {serviceFilterBtns.map((btn, index) => (
                        <button key={btn.id} onClick={() => handleButtonClick(index)} className={`px-5 ms:px-2 flex justify-center opacity-[60%] min-h-[44px] ms:min-h-[38px] rounded-[0.25rem] trans-300 items-center ${activeBtn === index ? 'bg-y !opacity-[100%]' : 'bg-transparent'} ${index === activeBtn ? 'bg-y !opacity-[100%] bg-transparent' : 'bg-transparent opacity-60'}`}>
                            <span className={`uppercase text-sm ms:text-xs ms:line-clamp-1 font-mona font-semibold ${activeBtn === index ? 'text-white' : 'text-[#FEFEFE]'}`}>
                                {btn.btnName}
                            </span>
                        </button>
                    ))}
                </ul>
            </div>
            <div>
                <ul className='grid grid-cols-[repeat(auto-fill,minmax(294px,1fr))] gap-[1.125rem] ms:gap-2'>
                    {serviceCards.map((card) => (
                        <li key={card.id} className={`group flex relative flex-col gap-[22px] min-h-[370px] pt-[6px] pb-4 px-[6px] ${style.bgCard}`}>
                            <ServiceCard icon={card.icon} name={card.name} price={card.price} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
    )
}


export default Services;