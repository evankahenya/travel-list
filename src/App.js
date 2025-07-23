
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App(){
  return<div className="app">
    <Logo/>
    <Form/>
    <PackingList/>
    <Stats />
  </div>
}
function Logo(){
  return <h1>🌴Far Away🧳</h1>
}
function Form(){
  return <div className="add-form">
    <h3>What do you need for you trip?</h3>
  </div>
}
function PackingList(){
  return <ul className="list">
    {initialItems.map((item)=> 
    <Item item={item}></Item>)}
    
  </ul>
}
function Item({item}){
  return <li>item.description</li>
}
function Stats () { 
  return <footer className="stats">
    <em>💼 You have X items on your list, and you already packed X (x%)</em>
    </footer>
 }
