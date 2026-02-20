import { useState } from "react";
import AddForm from "./components/AddForm";
import ShoppingList from "./components/ShoppingList";
import "./style/style.css";

function App() {
  // useState lagrer listen med varer. Når setItems kalles, oppdateres siden automatisk.
  const [items, setItems] = useState([
    { id: 1, name: "Melk", qty: 2, bought: true },
    { id: 2, name: "Brød", qty: 1, bought: false }
  ]);

  function addItem(name, qty) {
    const newItem = {
      id: Date.now(), // Date.now() gir et unikt tall basert på tidspunktet
      name: name,
      qty: qty,
      bought: false
    };
    // Den nye varen legges FØRST i listen med spread-operatoren (...)
    setItems([newItem, ...items]);
  }

  function toggleItem(id) {
    // map() går gjennom alle varer og returnerer en ny liste
    // Kun varen med riktig id får snudd bought fra true til false eller omvendt
    const updated = items.map((i) =>
      i.id === id ? { ...i, bought: !i.bought } : i
    );
    setItems(updated);
  }

  function changeQty(id, qty) {
    if (qty > 0) { // Hindrer at antall settes til 0 eller negativt
      const updated = items.map((i) =>
        i.id === id ? { ...i, qty } : i // { ...i, qty } er shorthand for { ...i, qty: qty }
      );
      setItems(updated);
    }
  }

  // Props sendes ned til komponentene så de kan bruke funksjonene og dataen
  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm onAdd={addItem} />
      <ShoppingList
        items={items}
        onToggle={toggleItem}
        onChangeQty={changeQty}
      />
    </main>
  );
}

export default App;