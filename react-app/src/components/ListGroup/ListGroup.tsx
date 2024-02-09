import { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  //we should treat Props as immutable objects, it not so, it's anti-pattern
  //Props are arguments of functions, where state is like a local variable for component
  //anytime Props or State changes, it re-render the component
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //ctrl+d to mark other occurencies of same word
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {/*telling react to wrap all of its children, so we dont need to use <div><div/> so we dont have another element*/}
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}{" "}
      {/*javascript will return the latest true value*/}
      {/*h1 and ul are two different elements so we have to wrap to so it can be compiled to javascript*/}
      <ul className={[styles.ListGroup, styles.container].join(' ')}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              onSelectItem(item);
              setSelectedIndex(index);
            }}
          >
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
