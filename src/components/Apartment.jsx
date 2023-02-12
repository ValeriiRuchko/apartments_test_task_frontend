import Button from "./Button";
import axios from "axios";

function Apartment(props) {
  function handleClick() {
    axios
      .delete(`http://localhost:3000/apartments/${props.id}`)
      .then((res) => {
        console.log(res);
        props.updatePage();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="card">
      <h2 className="card_name">{props.name}</h2>
      <div className="card_content">
        <p>
          Price: {props.price} / Amount of rooms: {props.rooms}
        </p>
        <div className="card_description">
          <h3>Description</h3>
          <p>{props.descr}</p>
        </div>
      </div>
      <br/>
      <Button handleClick={handleClick} className="btn" text="Delete" />
    </div>
  );
}

export default Apartment;
