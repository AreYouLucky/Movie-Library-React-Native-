function List() {
  let lists = ["Movie Title", "Genre", "Forums"];

  const notFound = () => {
    lists.length === 0 ? <p>No items found</p> : null;
  };

  if (lists.length === 0) return <p>No items found</p>;
  return (
    <>
      {notFound}
      <ul className="list-group">
        {lists.map((list) => (
          <li className="list-group-item" key={list}>
            {list}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
