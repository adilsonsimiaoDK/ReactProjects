import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <h1> Hello React!!!</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const style = {};

  return (
    <header className="header footer">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObje={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please came back later :)</p>
      )}
    </main>
  );
}

function Pizza(props) {
  // if (props.pizzaObje.soldOut)
  //   return (
  //     <img
  //       className="photoName"
  //       style={{
  //         backgroundColor: props.pizzaObje.soldOut ? "transparent" : "grey",
  //         opacity: props.pizzaObje.soldOut ? 0.5 : 1,
  //       }}
  //     />
  //   );

  return (
    <li className="pizza">
      <img src={props.pizzaObje.photoName} alt={props.pizzaObje.name} />
      <div>
        <h3>{props.pizzaObje.name}</h3>
        <p>{props.pizzaObje.ingredients}</p>
        <span>{props.pizzaObje.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  console.log(isOpen);
  // if (hour >= openHours && hour <= closeHours) alert("We're currently open!");
  // else alert("Sorry we're closed");
  // return (
  //   <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
  // );

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're Open until {closeHours}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHours}:00 and {closeHours}:00.
        </p>
      )}
    </footer>
  );
}

//React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
