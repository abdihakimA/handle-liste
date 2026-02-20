import ShoppingItem from "./ShoppingItem";

function ShoppingList({ items, onToggle, onChangeQty }) {
  return (
    <section>
      <ul>
        {items.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggle={onToggle}
            onChangeQty={onChangeQty}
          />
        ))}
      </ul>
    </section>
  );
}

export default ShoppingList;
