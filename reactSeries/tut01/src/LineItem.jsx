import { FaTrashAlt } from "react-icons/fa";
export const LineItem = ({ item, handelCheck, handelDelete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => {
          handelCheck(item.id);
        }}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handelCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handelDelete(item.id)}
        role="button"
        tabIndex={0}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};
