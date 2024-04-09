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
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObje={pizza} key={pizza.name} />
        ))}
      </ul>

      {/* <Pizza
          name="Focaccia"
          ingredients="Bread with italian olive oil and rosemary"
          photoName="pizzas/focaccia.jpg "
          price={15}
        />
        <Pizza
          name="Pizza Magherita"
          ingredients="Tomato and mozarella"
          photoName="pizzas/margherita.jpg "
          price={15}
        />
        <Pizza
          name="Pizza Spinachi"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photoName="pizzas/spinaci.jpg "
          price={15}
        />
        <Pizza
          name="Pizza Prosciutto"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          photoName="pizzas/prosciutto.jpg "
          price={15}
        />
        <Pizza
          name="Pizza Salamino"
          ingredients="Tomato, mozarella and Pepperoni "
          photoName="pizzas/salamino.jpg "
          price={15}
        />
        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          photoName="pizzas/funghi.jpg "
          price={10}
        /> */}
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.pizzaObje.photoName} alt={props.name} />
      <div>
        <h3>{props.pizzaObje.name}</h3>
        <p>{props.pizzaObje.ingredients}</p>
        <span>{props.pizzaObje.price}</span>
      </div>
    </div>
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
  return (
    <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
  );
}

//React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
