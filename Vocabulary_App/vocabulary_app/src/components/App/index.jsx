import CardsContainer from "../CardsContainer";
import { words } from '../../data/words'
import { useState } from 'react'
import { Context } from "../../context";
import AddForm from "../AddForm";
import Triggers from "../Triggers";

function App() {

  const [cards, setCards] = useState(words)

  const change_to_de = () => {
    setCards(cards.map(el => {
      el.lang = 'de'
      return el
    }))
  }

  const change_to_rus = () => {
    setCards(cards.map(el => {
      el.lang = 'rus'
      return el;
    }))
  }

  const change_lang = (id) => {
    setCards(cards.map(el => {
      if (el.id === id) {
        el.lang = el.lang === 'rus' ? 'de' : 'rus'
      }
      return el
    }))
  }

  const add_card = (de, rus) => setCards([
    ...cards,
    {
      id: Date.now(),
      de,
      rus,
      lang: 'de'
    }
  ])

  const removeElement = (id) => setCards(cards.filter(el => el.id !== id));



  return (
    <div>
      <Context.Provider value={{ cards, add_card, change_lang, removeElement, change_to_de, change_to_rus }}>
        <AddForm />
        <CardsContainer />
        <Triggers />
      </Context.Provider>

    </div>
  );
}

export default App;
