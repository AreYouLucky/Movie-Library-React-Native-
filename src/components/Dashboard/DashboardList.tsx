import { useState } from "react";

interface Props {
  lists: string[];
  heading: string;
  onSelectItem: (item: string, index: number) => void;
}
function List({ lists, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {lists.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {lists.map((list, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(list, index);
            }}
          >
            {list}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
