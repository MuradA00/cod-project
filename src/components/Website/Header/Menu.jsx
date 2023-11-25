/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { closeIcon } from "../../../assets/images";
import { useState } from "react";

const Menu = (props) => {

    const handleDisplay = () => {
        props.handleMenu();
    }

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
        <div className={`fixed top-0 right-0 w-full z-10 border-solid border-[rgba(255,255,255,.15)] border-l-[1px] flex-1 max-w-[300px] h-full bg-[rgba(20,20,20,.75)] backdrop-blur ${props.state ? 'block' : 'hidden'}`}>
            <button className="w-6 h-6 flex items-center justify-center absolute top-4 right-4" onClick={() => handleDisplay()}>
                    <img src={closeIcon} alt="closIcon" />
            </button>
            <nav className="pt-10 px-4 pb-4">
                <ul className="flex flex-col gap-4">
                {
                    links.map((link, _) => (
                        <li key={link.link}>
                            <Link to={link.url} className="text-lg uppercase font-medium text-white" >
                                {link.link}
                            </Link>
                        </li>
                    ))
                }
                </ul>
            </nav>
        </div>
    )
}

export default Menu;