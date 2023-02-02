import CareScale from './CareScale'

function PlantItem({id, cover, name, water, light}) {
    return(
        <li key={ id }>
                <img src={`${cover}`} alt={`${name} cover`} />
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
                <h4>{name}</h4>
            </div>
        </li>
    )
}

export default PlantItem