import { useState } from "react";
import axios from "axios";

function Form(props) {
  const [apartment, setApartment] = useState({
    rooms: 0,
    name: "",
    price: 0,
    description: "",
  });

  function handleChange(event) {
    let value = event.target.value;
    setApartment({
      ...apartment,
      [event.target.name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      apartment.rooms > 0 &&
      apartment.price > 0 &&
      parseInt(apartment.rooms) &&
      parseFloat(apartment.price) &&
      apartment.name.length < 99 &&
      apartment.description.length < 999
    ) {
      axios
        .post("http://localhost:3000/apartments", apartment)
        .then((res) => {
          console.log(res);
          props.updatePage();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Provided data is invalid");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>Name</p>
      <input
        type="text"
        name="name"
        value={apartment.name}
        onChange={handleChange}
        required
      />
      <p>Rooms</p>
      <input
        type="text"
        name="rooms"
        value={apartment.rooms}
        onChange={handleChange}
        required
      />
      <p>Price</p>
      <input
        type="text"
        name="price"
        value={apartment.price}
        onChange={handleChange}
        required
      />
      <p>Description</p>
      <textarea
        name="description"
        rows="6"
        columns="15"
        value={apartment.description}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
}

export default Form;
