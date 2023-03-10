import "./App.css";

function App() {
  const products = [
    { name: "xbox", price: "400€", image: "https://picsum.photos/300/200" },
    {
      name: "PlayStation",
      price: "550€",
      image: "https://picsum.photos/300/200",
    },
    { name: "Nintendo", price: "200€", image: "https://picsum.photos/300/200" },
  ];

  return (
    <div className="App">
      {products.map((el, i) => (
        <div key={i}>
          <img src={el.image} alt={el.name} />
          <h1>{el.name}</h1>
          <p>{el.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
