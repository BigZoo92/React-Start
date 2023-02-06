import { useState } from "react";
import React from "react";

function Card({ card, updateCard }) {
  const total = card.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
  const [isOpen, setIsOpen] = useState(false);
  function viderPanier() {
    updateCard([])
    document.querySelector('.panier_vide').style.display = 'block'
  }
  return isOpen ? (
    <React.Fragment>
      <h3>Panier</h3>
      
      {
        card.map((plant, index) => {
          return card === [] ? (
            <p key={index} className="panier_vide">Votre panier est vide</p>
          ):(
            plant.quantity < 2 ? (
              <div key={index}>
                <p className="card_plant_name">{plant.name}</p>
              </div>
            ):(
              <div key={index}>
                <p className="card_plant_name">{plant.name}</p>
                <p>x {plant.quantity}</p>
              </div>
            )
          )
          
          
        } )
      }
      <p className="panier_vide">Votre panier est vide</p>
      <p className="total">Total :{total}€</p>
      <button onClick={() => viderPanier()}>Vider le panier</button>
      <button onClick={() => setIsOpen(false)}>Fermer</button>
    </React.Fragment>
  ) : (
    <div>
      <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    </div>
  )
}

export default Card;
