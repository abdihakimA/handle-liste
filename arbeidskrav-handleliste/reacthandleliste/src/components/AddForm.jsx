import { useState } from "react";

function AddForm({ onAdd }) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" && qty === "") {
      setError("Fyll inn vare og antall");
    } else if (name === "") {
      setError("Du må skrive inn vare");
    } else if (qty === "") {
      setError("Du må skrive inn antall");
    } else {
      onAdd(name, Number(qty));
      setName("");
      setQty("");
      setError("");
    }
  }

    return (
    <section>
        <form onSubmit={handleSubmit}>
        <label>
            Vare
            <input
            type="text"
            placeholder="Egg.."
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </label>

        <label>
            Antall
            <input
            type="number"
            placeholder="2"
            min="1"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            />
        </label>

        <button type="submit">Legg til vare</button>
        </form>

        {error && <p>{error}</p>}
    </section>
    );
}

export default AddForm;
