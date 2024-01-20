export function Workout() {
  return (
    <div className="card-container workout ">
      <p className="smaller-text titel">Workout of the Day</p>
      <div className="card  ">
        <div className="routine">
          <p className="smaller-text">Back Squats</p>
          <p className="smaller-text">Lunges</p>
          <p className="smaller-text">Romanian Deadlift</p>
          <p className="smaller-text">Hip Thruster</p>
          <p className="smaller-text">hamstring Curls</p>
        </div>
        <div className="routine">
          <p className="smaller-text">3 sets 10-15 reps</p>
          <p className="smaller-text">3 sets 10-15 reps</p>
          <p className="smaller-text">3 sets 10-15 reps</p>
          <p className="smaller-text">3 sets 10-15 reps</p>
          <p className="smaller-text">3 sets 10-15 reps</p>
        </div>
      </div>
      <div className="sub-bnt">
        <button className="btn">Submmit</button>
      </div>
    </div>
  );
}
