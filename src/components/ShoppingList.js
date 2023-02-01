const plantList = [
    {
        name: 'monstera',
        category: 'classique',
        id: '1ed',
        isBestSale: true,
        isSpecialOffer: false,
    },
    {
        name: 'ficus lyrata',
        category: 'classique',
        id: '2ed',
        isBestSale: false,
        isSpecialOffer: false,
    },
    {
        name: 'pothos argenté',
        category: 'classique',
        id: '3ed',
        isBestSale: false,
        isSpecialOffer: true,
    },
    {
        name: 'yucca',
        category: 'classique',
        id: '4ed',
        isBestSale: false,
        isSpecialOffer: false,
    },
    {
        name: 'palmier',
        category: 'classique',
        id: '5ed',
        isBestSale: false,
        isSpecialOffer: true,
    }
]

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant) => (
                <li key={ plant.id }>
                   {plant.name} {plant.isBestSale && <span>🔥</span>}
                    {plant.isSpecialOffer && <div>sold -15%</div>}
                </li>
            ))}
            <li>Total : </li>
        </ul>
    )
}

export default ShoppingList