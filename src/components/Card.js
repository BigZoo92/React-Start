function Card() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (<aside>
        <h3>Panier</h3>
        <ul>
        <li>Monstera : {monsteraPrice}€</li>
         <li>Lierre : {ivyPrice}€</li>
         <li>Fleurs : {flowerPrice}€</li>
         <li>Total : {monsteraPrice + ivyPrice + flowerPrice }€</li>
        </ul>
          </aside>)
    }

export default Card    