import { serviceCards, serviceFilterBtns } from '../../constants/variables';
import style from './Services.module.css';
import Purchase from './Purchase';
import CardState from './CardState';
import { cardHotIcon, purchasePlusIcon } from '../../assets/images';
import css from '../../style.js';
import { useState } from 'react';

const Services = () => {

    const [activeBtn, setActiveBtn] = useState(null);

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
                        <button key={btn.id} onClick={() => handleButtonClick(index)} className={`px-5 ms:px-2 flex justify-center opacity-[60%] min-h-[44px] ms:min-h-[38px] rounded-[0.25rem] trans-300 items-center ${activeBtn === index ? 'bg-y !opacity-[100%]' : 'bg-transparent'}`}>
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
                            <CardState state={'red'} stateIcon={cardHotIcon} stateText={'Top'} />
                            <a href="#" className={`h-[240px] block overflow-hidden rounded-[14px] w-full object-cover ${style.cardShape}`}>
                                <img src={card.icon} className='trans-200 group-hover:scale-105 h-[inherit] w-full object-cover' alt="" />
                            </a>
                            <div className='flex flex-col px-[7px] flex-grow'>
                                <div className='text-lg font-bold text-white font-hubot flex-grow'>
                                    {card.name}
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <span className='text-[#C3C3C3] text-sm font-mona font-normal'>From</span>
                                        <div className='text-[#D9D9D9] text-2xl sm:text-xl font-mona font-bold'>
                                            {card.price}
                                        </div>
                                    </div>
                                    <Purchase icon={purchasePlusIcon}/>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
    )
}


export default Services;