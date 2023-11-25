import { checkData } from "../../constants/variables";
import { couponIcon, crossIcon } from "../../assets/images";
import CheckBox  from "../Website/CheckBox/CheckBox";
import { useState } from "react";
import Input from "../Input/Input";

const Check = () => {

    const [hidden, setHidden] = useState(false);

    const productData = {
        name: 'Name of the Product',
        multiplier: '2 X $59.99',
        price: '$359'
    };
    const flexboxStyle = 'flex gap-2 justify-between items-center' 
    const borderStyle = 'border-b-2 border-solid border-gray-600';
    const listSpacing = 'pb-6 mb-6 flex flex-col gap-6';
    const headingStyle = 'text-zinc-300 font-medium';
    const totalStyle = 'font-medium text-base ms:text-sm tracking-[0.22px]'
    
    const list1 = checkData.filter(item => item.id === 0)[0];
    const list2 = checkData.filter(item => item.id === 1)[0];
    
    return (
        <div>
            <CheckBox variant={'default'}>
                <div className=" text-2xl font-bold text-white pb-5 border-b-2 border-solid border-gray-600 mb-4">
                    Order Details
                </div>
                {
                    !hidden ? (
                        <div className={`relative pr-5 pb-4 mb-6 ${borderStyle}`}>
                            <button onClick={() => setHidden(true)} className="absolute right-0 top-2">
                                <img src={crossIcon} alt="cross-icon" />
                            </button>                
                            <div className="gap-5 flex items-center">
                                <div className="rounded-[1.625rem] w-[90px] h-[90px] lg-small:w-[70px] lg-small:h-[70px] overflow-hidden bg-white flex-shrink-0">                        
                                </div>
                                <div className="">
                                    <div className="mb-[0.625rem]">
                                        <div className="text-base font-bold text-white line-clamp-1">
                                            {productData.name}
                                        </div>
                                        <div className="text-zinc-300 text-sm font-medium">
                                            {productData.multiplier}
                                        </div>
                                    </div>
                                    <div className="text-sm font-bold">
                                        {productData.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                <div>
                    <ul className={`${borderStyle} ${listSpacing}`}>
                    {list1.col.map(colItem => (
                        <li key={colItem.id}>
                            <div className={flexboxStyle}>
                                <div className={headingStyle}>
                                    {colItem.heading}
                                </div>
                                <div className={totalStyle}>
                                    {colItem.total}
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
                    <ul className={`${borderStyle} ${listSpacing}`}>
                        {list2.col.map(colItem => (
                            <li key={colItem.id}>
                                <div className={flexboxStyle}>
                                    <div className={headingStyle}>
                                        {colItem.heading}
                                    </div>
                                    <div className={totalStyle}>
                                        {colItem.total}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <Input placeholder={'Coupon Code'} icon={couponIcon}  />
            </CheckBox>     
        </div>
    )
};

export default Check;