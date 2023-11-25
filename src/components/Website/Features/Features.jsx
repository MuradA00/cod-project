import varStyle from "../../../style";
import { sectionOneData } from "../../../constants/variables";
import { cptPriceImage, bgSection, sectionImage, sectionImageFrame } from "../../../assets/images";
import Button from "../../UI/Button";
import SectionOne from "./SectionOne";

const Features = () => {
    return (
        <div>
            <SectionOne/>
            <section className="min-h-[880px] lg:min-h-[600px] relative before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-section-gradient before:pointer-events-none pt-14 flex justify-center items-center ms:py-12">
                <div className="absolute w-full h-full top-0 left-0 before:w-full before:z-[1] before:h-[300px] before:-top-[150px] before:opacity-80 before:blur-lg before:bg-black before:absolute before:left-0">
                    <img className="mix-blend-luminosity select-none pointer-events-none w-full h-full object-cover" src={bgSection} alt="bg-cover" />
                </div>
                <div className="container">
            <div className="grid grid-cols-[1fr_auto] ms:flex ms:flex-col-reverse gap-16 items-center relative max-w-[1000px] m-auto">
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
                <div className="max-w-[426px] w-full lg-small:max-w-[300px] lg-small:min-h-[300px] min-h-[470px] flex px-2 pt-2 pb-3 bg-center" style={{backgroundImage: `url(${sectionImageFrame})`, backgroundSize:'100% 100%'}}>
                    <div className="image-shape">
                        <img src={sectionImage} className="w-full h-full object-cover" alt="" /> 
                    </div>
                </div>
            </div>
        </div>
            </section>
        </div>
    )
}

export default Features;