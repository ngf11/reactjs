import { Header } from "./Header";
import { Journal } from "./Journal";
import { Workout } from "./Workout";

export function Body() {
  return (
    <div className="App">
      <Header />
      <Journal />
      <Workout />
    </div>
  );
}
