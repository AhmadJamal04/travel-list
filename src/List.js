import { useState } from "react";

export default function List({
  quantity,
  description,

  listContent,
  setListContent,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = listContent;
  if (sortBy === "description")
    sortedItems = listContent
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = listContent
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function deleteItem(id) {
    setListContent((listContent) =>
      listContent.filter((item) => item.id !== id)
    );
  }

  function handleToggle(id) {
    setListContent((listContent) =>
      listContent.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClick() {
    const confirm = window.confirm("are you sure to clear the item list?");
    if (confirm) setListContent([]);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.length
          ? sortedItems.map((item) => (
              <li
                key={item.id}
                style={
                  item.packed
                    ? { textDecoration: "line-through", cursor: "pointer" }
                    : {}
                }
              >
                <input
                  type="checkbox"
                  value={item.packed}
                  onClick={() => handleToggle(item.id)}
                />
                <span>
                  {item.quantity} {item.description}
                </span>
                <button onClick={() => deleteItem(item.id)}>❌</button>
              </li>
            ))
          : ""}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input value</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by by packed status</option>
        </select>
        <button onClick={handleClick}>clear list</button>
      </div>
    </div>
  );
}
