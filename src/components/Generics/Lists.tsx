import React from "react";
// Mentioning the generic types
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// {} is the constraints where we can mention the types which are acceptable
// if it is kept blank all types allowed <T extends string | number >
// {item.id} make the id required
const Lists = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item, index) => (
        <div key={index} onClick={() => onClick(item)}>
          {JSON.stringify(item)} {/* Convert item to string */}
        </div>
      ))}
    </div>
  );
};

export default Lists;
