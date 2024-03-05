import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import List from "./List";
import Stats from "./Stats";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const [listContent, setListContent] = useState([]);

  return (
    <div className="app">
      <Logo />
      <Form
        setQuantity={setQuantity}
        setDescription={setDescription}
        setListContent={setListContent}
        quantity={quantity}
        listContent={listContent}
        description={description}
        // packed={packed}
      />
      <List
        setListContent={setListContent}
        quantity={quantity}
        description={description}
        listContent={listContent}
        // packed={packed}
      />
      <Stats listContent={listContent} />
    </div>
  );
}

export default App;
