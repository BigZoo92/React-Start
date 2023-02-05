import CareScale from './CareScale'

function PlantItem({id, cover, name, water, light}) {
    return(
        <li key={ id } onClick={() => handleClick(name)}>
                <img src={`${cover}`} alt={`${name} cover`} />
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
                <h4>{name}</h4>
            </div>
        </li>
    )
}

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

export default PlantItem