import { useState } from "react";

function Input(props) {
  const [newQuery, setNewQ] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (newQuery !== "") {
      props.setRooms("rooms=" + newQuery);
    } else {
      props.setRooms("");
    }
    console.log("event triggered");
  }

  function handleQueryChange(event) {
    console.log(event.target.value);
    setNewQ(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Amount of rooms:"
          value={newQuery}
          onChange={handleQueryChange}
          type="text"
          id="name"
          name="rooms"
          min="1"
        />
      </form>
    </div>
  );
}

export default Input;
