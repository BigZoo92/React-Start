import Banner from './Banner'
import Card from './Card'
import Footer from './Footer'
import React from 'react';
import ShoppingList from './ShoppingList'
import { useState } from "react";
function App() {
  const [card, updateCard] = useState([])
  return (
    <React.Fragment>
      <Banner />
      <main>
        <aside>
          <Card card={card} updateCard={updateCard}/>
        </aside>
        <section>
          <ShoppingList card={card} updateCard={updateCard}/>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App