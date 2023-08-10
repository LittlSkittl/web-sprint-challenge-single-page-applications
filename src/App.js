import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import * as yup from 'yup'

import Form from "./Components/Form";
import Home from "./Components/Home";
import schema from "./validation/Schema";

const initialFormVlaues = {
  name: '',
  size: '',
  pepperoni: false,
  olives: false,
  sausage: false,
  chicken: false,
  bbq: false,
  specialInstructions: '' 
}

const initialErrorVlaues = {
  name: '',
  size: '',
  pepperoni: '',
  olives: '',
  sausage: '',
  chicken: '',
  bbq: '',
  specialInstructions: '' 
}

const App = () => {

  const [ values, setValues ] = useState(initialFormVlaues)
  const [ errors, setErrors ] = useState(initialErrorVlaues)
  const [ pizzas, setPizzas ] = useState([])

  

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/orders', values)
      .then(res => {
        console.log(res.data);
        setPizzas([res.data, ...pizzas]);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setErrors({...errors, [name]: ''}))
      .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value)
    setValues({...values, [name]: value})
  }

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="pizza" element={<Form errors={errors} submit={handleSubmit} change={handleChange} values={values}/>}/>
      </Routes>
    </div>
  );
};
export default App;
