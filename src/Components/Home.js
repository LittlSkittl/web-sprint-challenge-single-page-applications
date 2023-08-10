import { Link,  } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <section className="nav-container">
        <h1 className="header">Isaac's Pizzeria</h1>
        <nav className="nav-bar">
          <Link to="pizza" className="pry-btn">
            Order Pizza
          </Link>
        </nav>
      </section>
      <section className="want-pizza">
        <h2>
          If you're craving freshly homemade pizza,
          <br /> Isaac's Pizzeria has got you covered!
        </h2>
        <p>Order here for free!</p>
        <Link to='pizza' className="sec-btn">Order Now!</Link>
      </section>
    </div>
  );
};

export default Home;
