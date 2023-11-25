import Overlay from "../Website/Overlay/Overlay";
import Check  from "../Check/Check";
import Box from "../Box/Box";
import Tabs from "../Website/Tabs/Tabs";
import varStyle from "../../style";
import Options from "../Options/Options";
import style from '../Website/Services/Services.module.css';
import { serviceCards } from "../../constants/variables";
import ServiceCard from "../Website/Services/ServiceCard";
import { cardHotIcon, purchasePlusIcon, greenStarIcon } from '../../assets/images';
import Breadcrumbs from "../Website/Breadcrumbs/Breadcrumbs";
import Section from "../Website/Section/Section";

const Page2 = () => {

    const rateValue = 4;

    return (
        <main className="padding-container">
            <Overlay/>
            <section className="mb-20">
                <div className="container relative">
                    <Section/>
                    <Box>
                        <div className="flex flex-col min-h-[1000px] gap-10">       
                            <Tabs/>
                            <div className="mt-auto">
                                <Options/>
                            </div>
                        </div>
                    </Box>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2 className={`${varStyle.heading} !text-left mb-10`}>
                    POPULAR PRODUCTS
                    </h2>
                    <ul className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-4">
                        {serviceCards.map((card) => (
                            <li key={card.id} className={`${style.bgCard}`}>
                                <ServiceCard icon={card.icon} name={card.name} price={card.price} />
                            </li>
                        ))} 
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Page2;