import Reviews from "../Website/Reviews/Reviews";
import Steps from "../Website/Steps/Steps";
import Partners from "../Website/Partners/Partners";
import Faq from "../Website/Faq/Faq";
import Overlay from "../Website/Overlay/Overlay";
import Button from "../UI/Button";
import varStyle from "../../style";
import Filter from "../Website/Catalog/Filter";
import Catalog from "../Website/Catalog/Catalog";

const Product = () => {

    const sectionSpacing = 'mb-24 ms:mb-20';

    const sectionData = {
        title: 'Heading here',
        info: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis mi ut eros tincidunt ultricies. Aliquam porttitor massa ac tincidunt laoreet. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis mi ut eros ',
        link: '#'
    }

    return (
        <main className="pt-[260px] lg-small:pt-[160px]">
            <section className="min-h-[510px] ms:min-h-[340px] relative z-[2]">
                <div className="container">
                    <div className="max-w-[510px]">
                        <h1 className={`${varStyle.headingLarge} !text-left mb-5`}>
                            {sectionData.title}
                        </h1>
                        <div className="mb-8">
                            <p className="text-base ss:text-sm leading-[135%]">
                                {sectionData.info}
                            </p>
                        </div>
                        <Button text={'Get in Touch'}/>
                    </div>
                </div>
            </section>
            <Overlay>
            </Overlay>
            <Catalog mb={sectionSpacing} />
            <Reviews mb={sectionSpacing} />
            <Steps mb={sectionSpacing} />
            <Partners mb={sectionSpacing} />
            <Faq mb={sectionSpacing} />
        </main>
    )
}

export default Product;