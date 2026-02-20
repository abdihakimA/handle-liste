function ShoppingItem({ item, onToggle, onChangeQty }) {
  function handleQty(e) {
    const value = Number(e.target.value);
    if (value > 0) {
      onChangeQty(item.id, value);
    }
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={item.bought}
        onChange={() => onToggle(item.id)}
      />

      <span>{item.name}</span>

      <input
        type="number"
        value={item.qty}
        min="1"
        onChange={handleQty}
      />
    </li>
  );
}

export default ShoppingItem;
