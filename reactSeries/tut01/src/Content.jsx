import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, handelCheck, handelDelete }) => {
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
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
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your List is Empty</p>
      )}
    </main>
  );
};

export default Content;
