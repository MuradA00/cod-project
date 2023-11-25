import { cardHotIcon, purchasePlusIcon, greenStarIcon } from '../../../assets/images';
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import varStyle from '../../../style';

const Section = () => {

    const rateValue = 4;

    return (
        <div className="mb-[4.375rem] lg:mb-[2.5rem] flex flex-col gap-5 ms:gap-2">
            <Breadcrumbs/>
            <h1 className={`${varStyle.heading} !text-left leading-[100%]`}>
                Warzone 2 Nuke Quest
            </h1>
            <div className="flex flex-wrap gap-[0.625rem]">
                <p className="text-lg ms:text-base ss:!text-sm">
                    Our customers say Excellent 4.89 out of 5 based on 350 Reviews
                </p>
                <ul className="flex gap-2 items-center">
                    {
                        rateValue > 0 ?
                        [...Array(rateValue + 1)].map((rate, index) => (
                            <li key={index}>
                                <img src={greenStarIcon} alt="" />
                            </li>
                        )) :
                        'No rating'
                    }
                </ul>
            </div>
        </div>
    )
}

export default Section;