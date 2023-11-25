import { viewGrid, viewList } from "../../../assets/images";

const FilterHeader = (props) => {    
    const buttonStyle = 'w-8 h-8 flex justify-center items-center'

    const handleButtons = index => {
        props.Callback(index);
    }

    return (
        <div className="flex justify-between gap-2 mb-5 ms:flex-col ms:gap-3">
            <div className="text-xl font-bold">
                Products ({props.value})
            </div>
            <div className="flex items-center gap-5">
                <button className="min-h-[42px] px-4 rounded-[0.625rem] bg-[#232323] text-sm tracking-[-.0.084px] ms:flex-1">
                    Sort by: Price (High to low)
                </button>
                <div className="flex rounded-md overflow-hidden">
                    {['viewGrid', 'viewList'].map((button, index) => (
                        <button
                            key={index}
                            className={`${buttonStyle} trans-300 bg-[#232323] ${props.state === index ? 'bg-[#686868]' : ''}`}
                            onClick={() => handleButtons(index)}
                        >
                            <img src={button === 'viewGrid' ? viewGrid : viewList} alt="button-icon" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterHeader;
