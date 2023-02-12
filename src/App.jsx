import "./styles/App.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Apartment from "./components/Apartment";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState([]); // state to represent our apartments list
  const [rooms, setRooms] = useState(""); // rooms query-param
  const [price, setPrice] = useState(""); // price query-param
  const [length, setLength] = useState(0);
  // function for rerendering the page
  let newGetReq = useCallback(() => {
    axios
      .get(`http://localhost:3000/apartments?${rooms}&${price}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLength(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [rooms, price]);
  // useEffect handler which controls our page rerendering
  useEffect(() => {
    newGetReq();
  }, [newGetReq]);

  return (
    <div className="wrapper">
      <h1>Apartments marketplace</h1>
      <Form updatePage={newGetReq}/>
      <Input setRooms={setRooms} />
      <Dropdown price={price} setPrice={setPrice} />
      <h3>Results found: {length}</h3>
      {data.map((value) => {
        return (
          <Apartment
            key={value.id}
            id={value.id}
            rooms={value.rooms}
            name={value.name}
            price={value.price}
            descr={value.description}
            updatePage={newGetReq}
          />
        );
      })}
    </div>
  );
}

export default App;
