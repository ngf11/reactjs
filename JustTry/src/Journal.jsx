export function Journal() {
  return (
    <div className="DayNotes">
      <form className="journal">
        <div className="text-Form">
          <label htmlFor="daily-journal">How are you feeling?</label>
          <textarea
            name="daily-journal"
            id="daily-journal"
            cols="43"
            rows="5"
          ></textarea>
        </div>
        <div className="wins">
          <label htmlFor="wins">Write three wins:</label>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <p className="small-text">
            Write down three wins you had today. It could be anything i.e: I
            went for a walk, I worked out, I ate a healty meal.
          </p>
          <div className="sub-bnt">
            <button className="btn">Submmit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
