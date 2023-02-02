import CareScale from "./CareScale";
const plantList = [
    {
        name: 'monstera',
        category: 'classique',
        id: '1ed',
        isBestSale: true,
        isSpecialOffer: false,
        water: 3,
        light: 2,
    },
    {
        name: 'ficus lyrata',
        category: 'classique',
        id: '2ed',
        isBestSale: false,
        isSpecialOffer: false,
        water: 3,
        light: 2,
    },
    {
        name: 'pothos argenté',
        category: 'classique',
        id: '3ed',
        isBestSale: false,
        isSpecialOffer: true,
        water: 3,
        light: 2,
    },
    {
        name: 'yucca',
        category: 'classique',
        id: '4ed',
        isBestSale: false,
        isSpecialOffer: false,
        water: 3,
        light: 2,
    },
    {
        name: 'palmier',
        category: 'classique',
        id: '5ed',
        isBestSale: false,
        isSpecialOffer: true,
        water: 3,
        light: 2,
    }
]

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant) => (
                <li key={ plant.id }>
                    {plant.name} {plant.isBestSale && <span>🔥</span>}
                    {plant.isSpecialOffer && <div>sold -15%</div>}
                    <div>
                        <CareScale careType='water' scaleValue={plant.water} />
                        <CareScale careType='light' scaleValue={plant.light} />
			        </div>
                </li>
            ))}
            <li>Total : </li>
        </ul>
    )
}

export default ShoppingList