import "./Form.css";
import { Link } from "react-router-dom";

const Form = (props) => {
  const { change, submit, values } = props;
  // console.log(values);

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const typeToUse = type === "checkbox" ? checked : value;
    change(name, typeToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div className="form-container">
      <section className="header-section">
        <div  className="catch-line">
          <h1>Build Your Own Pizza!</h1>
          <h2>Select From The World's Most Famous Ingredients</h2>
        </div>
        <nav>
          <Link className="pry-btn" to="/">Home</Link>
        </nav>
      </section>
      <form id="pizza-form" onSubmit={onSubmit}>
        <section className="name-section">
          <label>
            <h3>Enter Your Name</h3>
            <input
              id="name-input"
              type="text"
              name="name"
              value={values.name}
              onChange={onChange}
            />
          </label>
        </section>

        <section className="size-section">
          <h3>Select a size</h3>
          <select id="size-dropdown" onChange={onChange} name="size">
            <option value="">Select a size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </section>

        <section className="topping-section">
          <h3>Which toppings would you like?</h3>
          <h5>Select no toppings for a cheese pizza</h5>
          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              value={values.pepperoni}
              onChange={onChange}
            />
          </label>
          <label>
            Olives
            <input
              type="checkbox"
              name="olives"
              value={values.olives}
              onChange={onChange}
            />
          </label>
          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              value={values.sausage}
              onChange={onChange}
            />
          </label>
          <label>
            BBQ
            <input
              type="checkbox"
              name="bbq"
              value={values.bbq}
              onChange={onChange}
            />
          </label>
          <label>
            Chicken
            <input
              type="checkbox"
              name="chicken"
              value={values.chicken}
              onChange={onChange}
            />
          </label>
        </section>

        <section className="special-section">
          <label>
            <h3>Anything you would like us to know?</h3>
            <textarea
              className="special"
              type="text"
              name="specialInstructions"
              value={values.specialInstructions}
              onChange={onChange}
            />
          </label>
        </section>
        <input type="submit" value='Submit Your Pizza!'/>
      </form>
    </div>
  );
};

export default Form;
