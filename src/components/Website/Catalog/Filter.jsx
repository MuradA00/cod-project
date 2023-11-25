import { plusIcon } from "../../../assets/images";
import { filters } from "../../../constants/variables";

const Filter = () => {
    return (
        <div className="sticky top-0 left-0 self-start lg-small:hidden">
            <div className="opacity-80 text-sm uppercase font-black font-hubot mb-6">
                CATEGORIES
            </div>
            <ul className="flex flex-col gap-[1.875rem]">
                {
                    filters.map((filter, index) => (
                        <li key={filter.id} className={`${filter.clickable ? 'flex items-center gap-1 justify-between' : 'block'}`}>
                            <div className="flex gap-6 items-center">
                                <div>
                                    <img src={filter.icon} alt="" />
                                </div>
                                <div className="lg-small:hidden">
                                    <span className="text-[13px] font-semibold font-mont">
                                        {filter.label}
                                    </span>
                                </div>
                            </div>
                            {
                                filter.clickable && (
                                    <button>
                                        <img className="w-3 h-3" src={plusIcon} alt="plus-icon" />
                                    </button>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Filter;