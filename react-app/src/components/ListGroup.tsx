function ListGroup() {
  //ctrl+d to mark other occurencies of same word
  return (
    <>
      {/*telling react to wrap all of its children, so we dont need to use <div><div/> so we dont have another element*/}
      <h1>List</h1>{" "}
      {/*h1 and ul are two different elements so we have to wrap to so it can be compiled to javascript*/}
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;
