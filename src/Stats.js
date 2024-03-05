export default function Stats({ listContent }) {
  if (!listContent.length) {
    return <p className="stats">start adding items to your packing list🔥</p>;
  }
  const numItems = listContent.length;
  const packedItems = listContent.filter((item) => item.packed === true).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? "you got everything! Ready to go✈️"
        : `you need ${numItems} items for your trip, and you have already
        packed ${packedItems}(${percentage}%) items`}
    </footer>
  );
}
