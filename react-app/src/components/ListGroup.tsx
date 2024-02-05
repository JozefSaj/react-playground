function ListGroup() {
  const items = ["New York", "San francisco", "Tokyo", "London", "Paris"];
  //ctrl+d to mark other occurencies of same word
  return (
    <>
      {/*telling react to wrap all of its children, so we dont need to use <div><div/> so we dont have another element*/}
      <h1>List</h1>
      {/*h1 and ul are two different elements so we have to wrap to so it can be compiled to javascript*/}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        {/*need specific key for each item, to keep track*/}
        {/* have to wrap it to{} because JSX markup, because we can use there only html elements or react components*/}
      </ul>
    </>
  );
}

export default ListGroup;
