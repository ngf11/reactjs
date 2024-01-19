export function Journal() {
  return (
    <div className="DayNotes">
      <form className="journal">
        <div className="text-Form">
          <label htmlFor="daily-journal">How are you feeling?</label>
          <textarea
            name="daily-journal"
            id="daily-journal"
            cols="33"
            rows="10"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
