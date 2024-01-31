import { FaPlus } from "react-icons/fa";
const AddItem = ({ newItem, setNewItems, handelSubmit }) => {
  return (
    <form className="addForm" onSubmit={handelSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem "
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItems(e.target.value)}
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
