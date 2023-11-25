import Button from "../UI/Button"; 

const Options = () => {

    const total = 37.85;

    return (
        <div className="flex flex-wrap gap-8 ms:flex-col ms:gap-4 ms:max-w-[500px] ms:m-auto">
            <div className="bg-[#18181D] min-h-[4.625rem] flex items-center justify-center px-9 rounded gap-6 ms:min-h-[3.75rem]">
                <span className="text-[#A9A4B4] text-xl">
                    Total Prices:
                </span>
                <div className="text-[1.625rem] font-bold">
                    € 
                    {total}
                </div>
            </div>
            <ul className="flex gap-6 items-center ms:grid ms:grid-cols-2 ms:gap-3">
                <Button text={'ADD TO CART'} gray={true} />
                <Button text={'BUY NOW'} />
            </ul>
        </div>
    )
}

export default Options;