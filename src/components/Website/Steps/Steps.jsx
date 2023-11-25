import varStyle from "../../../style";
import { stepsData } from "../../../constants/variables";
import { Pagination } from "swiper/modules";

const Steps = (props) => {

    const firstSvg = <svg xmlns="http://www.w3.org/2000/svg" width="46" height="23" viewBox="0 0 46 23" fill="none">
    <path d="M1 1C7 1 12.2389 1.21903 18 6.50008C24 12.0001 32.5 18.5 45.5 22" stroke="white" strokeOpacity="0.6" strokeLinecap="round" strokeDasharray="2 4"/>
    </svg>
    const secondSvg = <svg xmlns="http://www.w3.org/2000/svg" width="46" height="23" viewBox="0 0 46 23" fill="none">
    <path d="M45 1C39 1 33.7611 1.21903 28 6.50008C22 12.0001 13.5 18.5 0.5 22" stroke="white" strokeOpacity="0.6" strokeLinecap="round" strokeDasharray="2 4"/>
    </svg>;

    return (
        <section className={`${props.mb}`}>
            <div className="container">
                <h3 className={`${varStyle.heading} mb-10`}>
                    HOW TO PLACE AN ORDER?
                </h3>
                <div>
                    <ul className="grid grid-cols-4 gap-[3.75rem] lg-small:grid-cols-2 lg-small:gap-10 ss:flex ss:flex-col">
                        {stepsData.map((step, index) => (
                            <li key={step.id} className={`pt-6 min-h-[190px] pb-[1.125rem] relative px-[1.125rem] rounded-xl bg-dark`}>
                                <div className="flex flex-col gap-5">
                                    <div className="flex items-center justify-between">
                                        <div className="w-[3.625rem] rounded-[0.625rem] h-[3.625rem] flex justify-center items-center bg-[rgba(0,0,0,.3)]">
                                            <img src={step.icon} alt="" />
                                        </div>
                                        <div className=" text-3xl font-hubot tracking-[1.86px]">
                                            <span className="text-[rgba(212,212,212,0.40)]">0</span>
                                            <span className="text-[#D4D4D4] font-black tracking-[-0.62px] opacity-90">{step.id+1}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 font-hubot max-w-[180px] gap-[6px] flex flex-col">
                                        <div className="text-base font-bold leading-[150%] tracking-[-0.32px]">
                                            {step.heading}
                                        </div>
                                        <div className="font-mont text-[#CACACA] text-sm font-medium leading-[150%] flex-1">
                                            {step.info}
                                        </div>
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

export default Steps;