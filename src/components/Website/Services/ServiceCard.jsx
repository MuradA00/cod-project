import Purchase from './Purchase';
import CardState from './CardState';
import style from './Services.module.css';
import { cardHotIcon, purchasePlusIcon } from '../../../assets/images';

const ServiceCard = (props) => {

    const {name, price, icon} = props;

    return (
        <div className='group flex relative flex-col gap-[22px] min-h-[370px] pt-[6px] pb-4 px-[6px]'>
                <CardState state={'red'} stateIcon={cardHotIcon} stateText={'Top'} />
                <a href="#" className={`h-[240px] block overflow-hidden rounded-[14px] w-full object-cover ${style.cardShape}`}>
                    <img src={icon} className='trans-200 group-hover:scale-105 h-[inherit] w-full object-cover' alt="" />
                </a>
                <div className='flex flex-col px-[7px] flex-grow'>
                    <div className='text-lg font-bold text-white font-hubot flex-grow'>
                        {name}
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>
                            <span className='text-[#C3C3C3] text-sm font-mona font-normal'>From</span>
                            <div className='text-[#D9D9D9] text-2xl sm:text-xl font-mona font-bold'>
                                {price}
                            </div>
                        </div>
                        <Purchase icon={purchasePlusIcon}/>
                    </div>
                </div>
        </div>
    )
}

export default ServiceCard;