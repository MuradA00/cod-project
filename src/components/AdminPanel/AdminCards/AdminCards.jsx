import ServiceCard from "../../Website/Services/ServiceCard";

const AdminCards = () => {
    return (
        <div>
            <ul>
                {Array(8).fill(null).map((card, index) => (
                    <li key={index}>
                        {ServiceCard}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AdminCards;