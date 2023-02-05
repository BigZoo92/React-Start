import PlantItem from './PlantItem'
import { PlantList } from '../data/PlantList'
function ShoppingList() {
    return (
        <ul>
				{PlantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
                <li>Total : 90€</li>
		</ul>
    )
}

export default ShoppingList