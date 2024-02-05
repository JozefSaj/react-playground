function ListGroup() {
  let items = ["New York", "San francisco", "Tokyo", "London", "Paris"];
  //ctrl+d to mark other occurencies of same word

  const handleEvent = (event: React.MouseEvent) => console.log(event);

  return (
    <>
      {/*telling react to wrap all of its children, so we dont need to use <div><div/> so we dont have another element*/}
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}{" "}
      {/*javascript will return the latest true value*/}
      {/*h1 and ul are two different elements so we have to wrap to so it can be compiled to javascript*/}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleEvent}>
            {item}
          </li>
        ))}
        {/*need specific key for each item, to keep track*/}
        {/* have to wrap it to{} because JSX markup, because we can use there only html elements or react components*/}
      </ul>
    </>
  );
}

export default ListGroup;
