import { Header } from "./Header";
import { Journal } from "./Journal";
import { Macros } from "./Macros";
import { Workout } from "./Workout";

export function Body() {
  return (
    <div className="App">
      <Header />
      <Journal />
      <Workout />
      <Macros />
    </div>
  );
}
