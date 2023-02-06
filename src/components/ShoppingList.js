	import { PlantList } from '../data/PlantList'
import CareScale from './CareScale'

function ShoppingList({ card, updateCard }) {
	function addToCard(name, price, quantity) {
		const currentPlantSaved = card.find((plant) => plant.name === name)
		const panierVide = document.querySelector('.panier_vide')
		console.log(panierVide);
		if (panierVide) {
			panierVide.style.display = "none"
		}
		if (currentPlantSaved) {
			const cardFilteredCurrentPlant = card.filter(
				(plant) => plant.name !== name
			)
			updateCard([
				...cardFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1, quantity:  currentPlantSaved.quantity + 1}
			])
		} else {
			updateCard([...card, { name, price, amount: 1, quantity: 1 }])
		}
	}
    return (
		<article>
			<ul>
					{PlantList.map(({ id, cover, name, water, light, price }) => (
						<li key={ id }>
							<img src={`${cover}`} alt={`${name} cover`} />
							<h4>{name}</h4>
							<CareScale careType='water' scaleValue={water} />
							<CareScale careType='light' scaleValue={light} />
							<button onClick={() => addToCard(name, price)}>+</button>
							<span className='infobulle_prix'>{price} €</span>
						</li>
					))}
			</ul>
		</article>
    )
}

export default ShoppingList