function Dropdown(props) {
  function handleChange(event) {
    let val = event.target.value;
    if (val !== "") {
      props.setPrice("price=" + event.target.value);
    } else {
      props.setPrice("");
    }
  }

  return (
    <div>
      <label htmlFor="price-filter">Filter by price: </label>
      <select onChange={handleChange} id="price-filter">
        <option value="">No filter</option>
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </div>
  );
}

export default Dropdown;
