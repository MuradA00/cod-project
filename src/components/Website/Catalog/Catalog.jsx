import { servCardImageGoldenSkull, servCardImageGreenSkull } from "../../../assets/images";
import ServiceCard from "../Services/ServiceCard.jsx";
import Filter from "./Filter";
import style from './../Services/Services.module.css';
import FilterHeader from "./FilterHeader";
import { useState } from "react";
import Cards from "../Cards/Cards.jsx";
import Card from "../Cards/Card.jsx";
import AdminPagination from "../../AdminPanel/AdminPagination/AdminPagination.jsx";

const Catalog = (props) => {

    const [active, setActive] = useState(0);

    const handleButtonClick = (index) => {
        setActive(index);
    };

    const productsValue = 23.092;

    const catalogProducts = [
        {
            id: 0,
            name: 'WZ2 Rank Boosting',
            price: '$23.65',
            icon: servCardImageGreenSkull,
        },
        {
            id: 1,
            name: 'MW2 Rank Boosting',
            price: '$23.65',
            icon: servCardImageGoldenSkull,
        },
        {
            id: 2,
            name: 'Warzone 2 Nuke Quest',
            price: '$23.65',
            icon: servCardImageGreenSkull,
        },
        {
            id: 3,
            name: 'WZ2 Rank Boosting',
            price: '$23.65',
            icon: servCardImageGreenSkull,
        },
        {
            id: 4,
            name: 'WZ2 Rank Boosting',
            price: '$23.65',
            icon: servCardImageGreenSkull,
        },
        {
            id: 5,
            name: 'WZ2 Rank Boosting',
            price: '$23.65',
            icon: servCardImageGreenSkull,
        },
        {
            id: 6,
            name: 'WZ2 Rank Boosting',
            price: '$23.65',
            icon: servCardImageGreenSkull,
        },
        {
            id: 7,
            name: 'WZ2 Rank Boosting',
            price: '$23.65',
            icon: servCardImageGreenSkull,
        },
        {
            id: 8,
            name: 'WZ2 Rank Boosting',
            price: '$23.65',
            icon: servCardImageGreenSkull,
        }
    ]

    return (
        <div className={`relative ${props.mb}`}>
            <div className="container">
                <div className="grid grid-cols-[244px,1fr] gap-[50px] lg-small:block">
                    <Filter/>
                    <div>
                        <FilterHeader state={active} value={productsValue} Callback={handleButtonClick} />
                        <ul className={`gap-6 grid grid-cols-3 lg-small:grid-cols-2 mb-[1.875rem] ms:flex ms:flex-col`}>
                            {
                                catalogProducts.map((product, index) => (
                                    <li key={product.id} className={`${style.bgCard}`}>
                                        <ServiceCard icon={product.icon} name={product.name} price={product.price} />
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex justify-end">
                            <AdminPagination bg={'rgba(255,255,255,.09)'} />
                        </div>
                    </div>  
                </div>   
            </div>
        </div>    
    )
}

export default Catalog;