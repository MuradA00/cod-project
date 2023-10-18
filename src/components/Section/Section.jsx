import { mainSectionData } from "../../constants/variables";
import { sectionImageFrame } from "../../assets/images";

const Section = () => {

    const gradientClass = 'relative before:absolute before:w-full before:h-[100px] before:-top-[10px] before:bg-black before:blur-[1rem] before:left-0'

    return (
        <div>
            {
                mainSectionData.map(section => (
                    <section key={section.id} className={`min-h-[760px] flex justify-center items-center ${section.id === 0 ? gradientClass : '' }`}>
                        <div className="container">
                            <div className="grid grid-cols-2 gap-16 max-w-[1000px] m-auto">
                                <div>
                                    <div>
                                        <img src={section.image} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))
            }
        </div>
    )
}

export default Section;
