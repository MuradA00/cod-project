import { logos } from "../../../constants/variables";

const Partners = (props) => {
    return (
        <section className={`bg-[#16151A] ${props.mb}`}>
            <div className="px-7 py-9">
                <ul className="grid grid-cols-[repeat(auto-fill,minmax(124px,1fr))] gap-y-12 gap-x-[4.375rem] ms:grid-cols-2 ms:gap-x-12">
                    {logos.map(logo => (
                        <li key={logo.id} className=" flex items-center justify-center">
                            <img width={logo.width ? logo.width : '70%'} src={logo.logo} alt="logo-image" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Partners;