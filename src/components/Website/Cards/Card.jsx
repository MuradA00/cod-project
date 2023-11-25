import style from './Card.module.css';
import servStyle from './../Services/Services.module.css';

const Card = (props) => {

    const {name, icon, number, rows, link, price} = props;

    return (
        <div className={`${style.bgOrderCard} pt-2 pb-5 pl-2 pr-5 flex flex-col gap-5 ms:p-2 ms:gap-3`}>
        <div className="grid grid-cols-[.9fr_1fr] gap-5 ms:gap-3 ms:grid-cols-2"> 
            <div>
                <div className={`${servStyle.cardShape} h-full overflow-hidden rounded-[10px]`}>
                    <img src={icon} className="object-cover h-full w-full" alt="" />
                </div>
            </div>
            <div className="pt-3 flex flex-col">
                <div className="mb-4 font-hubot tracking-[-0.48px] font-bold ms:text-sm">
                    {name}
                </div>
                {price && (
                    <div>
                        <div>
                            <div>
                                From 
                            </div>
                            <span className='text-[#D9D9D9] text-2xl sm:text-xl font-mona font-bold'>
                                {price}
                            </span>
                        </div>
                    </div>
                )}
                <ul className="grid grid-cols-2 gap-3 ms:gap-2 flex-1">
                    {
                        rows && rows.map((row) => (
                            <li key={row.id} className="min-h-[52px] flex items-start px-3 justify-center flex-col ms:px-0 ms:min-h-[46px]">
                                <div className="text-[13px] text-[#C3C3C3] leading-[100%] mb-1">
                                    {row.label}
                                </div>
                                <div className="text-[#D9D9D9] text-lg font-bold leading-[100%] capitalize ms:text-base">
                                    {row.name}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className="border-t-[1px] w-[calc(100%-18px)] m-auto border-solid border-[rgba(255,255,255,.1)] pt-5 flex justify-between items-center">
            <div className="text-sm text-white">
                Order <span className="text-lg font-medium">#{number}</span>
            </div>
            {link && (
                <a href={link} className="text-y font-medium underline text-sm">
                    View order
                </a>
            )}
        </div>
    </div>
    )
}

export default Card;