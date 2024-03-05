export default function Form({
    setQuantity,
    setDescription,
    setListContent,
    listContent,
    quantity,
    description,
    packed,
  }) {
    const date = Date;
    function submitHandler(event) {
      event.preventDefault();
      console.log(quantity, description, packed);
      setListContent((listContent) => [
        ...listContent,
        { id: date.now(), quantity, description, packed: false },
      ]);
   setDescription("");
   setQuantity(1)
      console.log(listContent);
    }
  
    return (
      <form className="add-form" onSubmit={submitHandler}>
        what do you need for 😍 your trip?
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>
        <input
          type="text"
          name=""
          id=""
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>add</button>
      </form>
    );
  }