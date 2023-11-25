import Overlay from "../Website/Overlay/Overlay";
import Check  from "../Check/Check";
import Box from "../Box/Box";
import Form from "../Form/Form";
import varStyle from "../../style";

const Checkout = () => {

    return (
        <main className="padding-container">
            <Overlay/>
            <section>
                <div className="container">
                    <h1 className={`${varStyle.heading} !text-left mb-[30px]`}>
                        my profile
                    </h1>
                    <Box>
                        <div className="grid grid-cols-[0.6fr_0.45fr] gap-[5rem] lg-small:flex lg-small:flex-col-reverse lg-small:gap-5">
                            <Form/>
                            <Check>
                            </Check>
                        </div>
                    </Box>
                </div>
            </section>
        </main>
    )
}

export default Checkout;