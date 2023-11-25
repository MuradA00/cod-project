import varStyle from "../../../style";
import { orderData } from "../../../constants/variables";
import Card from "./Card";

const Cards = (props) => {
    return (
        <section className={`${props.spacing} relative z-[1]`}>
            <div className="container">
                <h1 className={`${varStyle.heading} !text-left mb-8`}>
                    Order history
                </h1>
                <div className="">
                    <ul className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-5 ms:gap-2 ms:grid-cols-2 ss:flex ss:flex-col ss:!gap-y-5">
                        {
                            orderData.map((card) => (
                                <li key={card.id}>
                                    <Card name={card.name} icon={card.icon} link={card.link} rows={card.info} number={card.number} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cards;