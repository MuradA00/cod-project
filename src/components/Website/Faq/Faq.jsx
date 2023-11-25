import { useState } from "react";
import { accordionData } from "../../../constants/variables";
import Accordion from "./Accordion";
import varStyle from "../../../style";

const Faq = (props) => {

    const [isCollapsed, setIsCollapsed] = useState(null);

    const handleCollapse = (index) => {
        setIsCollapsed(index);
    }

    return (
        <section className={props.mb}>
            <div className="container">
                <div className="max-w-[830px] m-auto">
                    <div className="mb-12 text-center">
                                <h5 className={`${varStyle.heading} text-center mb-3`}>
                                    Frequently ask Questions
                                </h5>
                                <div className="max-w-[460px] m-auto">
                                    <p className="text-white font-mona font-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                    </p>
                                </div>
                    </div>
                    <div>                        
                        <Accordion data={accordionData} handleClick={handleCollapse} state={isCollapsed}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;