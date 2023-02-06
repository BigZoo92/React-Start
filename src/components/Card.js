import { useState } from "react";

function Card({ card, updateCard }) {
  const total = card.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <div>
      <h3>Panier</h3>
      <button onClick={() => setIsOpen(false)}>Fermer</button>
        <button onClick={() => updateCard([])}>Vider le panier</button>

      <p>Total :{total}€</p>
    </div>
  ) : (
    <div>
      <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    </div>
  );
}

export default Card;
