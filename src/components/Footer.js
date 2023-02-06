import { useState } from "react";

function Footer() {
    const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer>
             <h2>Pour les passionné·e·s de plantes 🌿🌱🌵</h2>
            <form>
                <label htmlFor="email_input">Laissez-nous votre mail :</label>
                <input
                    id="email_input"
                    name="email_input"
                    placeholder='Entrez votre mail'
                    onChange={handleInput}
                    value={inputValue}
                    onBlur={handleBlur}
                />
            </form>
		</footer>
	)
}

export default Footer;