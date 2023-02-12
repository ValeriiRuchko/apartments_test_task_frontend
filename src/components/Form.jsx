import { useState } from "react";
import axios from "axios";

function Form(props) {
  const [apartment, setApartment] = useState({
    rooms: 1,
    name: "",
    price: 1,
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
      <div>
        <p>Name</p>
        <input
          className="name"
          type="text"
          name="name"
          value={apartment.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form_child_2">
        <p>Rooms</p>
        <input
          type="text"
          name="rooms"
          value={apartment.rooms}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form_child_2">
        <p style={{marginLeft: "7px"}}>Price</p>
        <input
          className="price"
          type="text"
          name="price"
          value={apartment.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <p>Description</p>
        <textarea
          name="description"
          rows="8"
          value={apartment.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit" className="submit_button">Add</button>
      </div>
    </form>
  );
}

export default Form;
