import Overlay from "../Website/Overlay/Overlay.jsx";
import Check  from "../Check/Check";
import Box from "../Box/Box";
import Form from "../Form/Form";
import varStyle from "../../style";
import CheckBox from "../../components/Check/Check.jsx";
import Button from "../UI/Button.jsx";
import User from "../../components/Website/User/User.jsx";
import UserForm from "../../components/Website/User/UserForm.jsx";

const Profile = () => {

    return (
        <main className="padding-container">
            <Overlay/>
            <section>
                <div className="container">
                    <h1 className={`${varStyle.heading} !text-left mb-[30px]`}>
                        my profile
                    </h1>
                    <Box>
                        <div className="grid grid-cols-[0.56fr_0.44fr] gap-[5rem] lg-small:flex lg-small:flex-col-reverse lg-small:gap-5">
                            <UserForm/>
                            <div className={`bg-[#18181D] flex flex-col py-10 px-9 ms:py-8 ms:px-4 rounded-2xl border-gradient mt-6 lg-small:mt-0`} style={{"--bg": "#18181D", "--cl-border": "rgba(255,255,255,.2)"}}>
                                <User/>
                            </div>
                        </div>
                        <div className="flex justify-end mt-9 lg-small:mt-0 lg-small:justify-center">
                            <Button text="Save">
                            </Button>
                        </div>
                    </Box>
                </div>
            </section>
        </main>
    )
}

export default Profile;