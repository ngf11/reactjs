export function TodoItem({ completed, id, titel, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {titel}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        DELETE
      </button>
    </li>
  );
}
