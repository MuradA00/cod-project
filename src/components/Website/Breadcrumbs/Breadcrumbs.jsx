import { Link } from "react-router-dom";
import { breadcrumbsArrrow } from "../../../assets/images";

const Breadcrumbs = () => {
    const links = [
        {
            id: 0,
            name: 'Home',
            url: '/'
        },
        {
            id: 1, 
            name: 'Call of Duty',
            url: '#'
        },
        {
            id: 2,
            name: 'Modern Warfare 2',
            url: '#'
        },
        {
            id: 3,
            name: 'MW Rank Boosting',
            url: '/page2'
        }
    ]

    return (
        <div className="flex gap-2 items-center flex-wrap ms:gap-1">
                {
                    links.map((link, index) => (
                        <span key={link.id} className="flex gap-2 items-center">
                            <Link to={link.url} className={`text-sm font-medium hover:underline ms:text-xs ${link.id !== links.length - 1 ? 'text-[#787C87]' : 'text-white'}`}>
                                {link.name}
                            </Link>
                            {
                                link.id !== links.length - 1 && 
                                (
                                    <img src={breadcrumbsArrrow} alt="arrow-icon" />
                                )
                            }
                        </span>
                    ))
                }
        </div>
    )
}

export default Breadcrumbs;
