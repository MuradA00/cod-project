import { Link } from "react-router-dom";

const Navbar = () => {

    const links = [
        {
            url: '#',
            link: 'Home'
        },
        {
            url: '#',
            link: 'Categories'
        },
        {
            url: '#',
            link: 'About Us'
        },
        {
            url: '#',
            link: 'Testimonials'
        },
        {
            url: '#',
            link: 'Contact Us'
        }
    ]

    return (
        <nav className="lg-small:hidden">
            <ul className="flex items-center gap-8">
                {
                    links.map((link, _) => (
                        <li key={link.link}>
                            <Link to={link.url} className="text-base font-medium text-white relative after:absolute after:w-0 after:h-[1px] after:bg-[rgba(255,255,255,1)] after:left-0 after:-bottom-1 after:transition-[inherit] hover:after:w-full" >
                                {link.link}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar;