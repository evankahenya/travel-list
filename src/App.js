import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App(){
  return (<div className="app">
    <Logo/>
    <Form />
    <PackingList />
    <Stats />

</div>);
};

function Logo(){
  return <h1> ✈ Far Away 💼</h1>

}

function Form(){
  const [description, setDescription] = useState("Towel")
  const [quantity, setQantity] = useState(1)

  function handleSubmit(e){
    e.preventDefault();
    if(!description) return;
    const newItem = {description, quantity, packed:false, id:Date.now()}

    console.log(newItem);
    setDescription('')
    setQantity(1)

  }
  return <form className="add-form" onSubmit={handleSubmit}>
  <h3>What do you need for the trip?</h3>
  <select value={quantity}   onChange={(e) => setQantity(Number(e.target.value))}>
    {/*Build array with 20 slots starting from 1 -20 and map each slot to an option */}
    {Array.from({length:20}, (_, i)=> i + 1).map
    ((num) => (
    <option value={num} key={num}
    > {num}</option>
    ))}
   </select>
  
  <input type="text" 
  placeholder="Item..." 
  value={description} 
  // if the text change cnage the state
  onChange={(e) => setDescription(e.target.value)}/>
  <button>Add</button>
  </form>

  
}

function PackingList(){
  return (
    <div className="list">
       <ul>
     {initialItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
  </ul>
    </div>
   
  ); 
};

function Item({ item }){
  return <li>
    <span style={item.packed ? {textDecoration: "line-through"} : {}}>
      {item.quantity} {item.description}</span>
    <button>❌</button>
  </li>
}

function Stats(){
  return <footer className="stats">
    <em>
      You have X items on your list and you already packed X(X%)
    </em>
    
  </footer>
  
}