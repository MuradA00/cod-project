import varStyle from "../../../style";
import { sectionOneData } from "../../../constants/variables";
import { cptPriceImage, sectionImage, sectionImageFrame } from "../../../assets/images";
import Button from "../../UI/Button";

const SectionOne = () => {
    return (
        <section className=" pt-24 ms:pt-14 relative">
        <div className="absolute top-0 right-5 max-w-[500px] pointer-events-none before:absolute before:-bottom-[2rem] before:bg-black before:blur-lg before:left-0 before:w-full before:h-[100px] ms:max-w-[300px]">
            <img src={cptPriceImage} alt="captain-price-image" />
        </div>
        <div className="container relative z-[2]">
            <h2 className={`text-center mb-[130px] ms:mb-[60px] relative ${varStyle.headingLarge}`}>
                Features
            </h2>
            <div className="grid grid-cols-[auto_1fr] ms:flex ms:flex-col gap-16 items-center relative max-w-[1000px] m-auto">
                <div className="max-w-[426px] lg-small:max-w-[300px] lg-small:min-h-[300px] min-h-[470px] flex px-2 pt-2 pb-3 bg-center" style={{backgroundImage: `url(${sectionImageFrame})`, backgroundSize:'100% 100%'}}>
                    <div className="image-shape">
                        <img src={sectionImage} className="w-full h-full object-cover" alt="" /> 
                    </div>
                </div>
                {
                    sectionOneData.map((info, index) => (
                        <div key={index} className="flex flex-col gap-6 text-left">
                            <div className={`!text-left ${varStyle.heading}`}>
                                {info.heading}
                            </div>
                            <div>
                                <p className="font-mona leading-[150%] text-base ms:text-sm">
                                    {info.info}
                                </p>
                            </div>
                            <div>
                                <Button text="Get in Touch"/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    )
}

export default SectionOne;