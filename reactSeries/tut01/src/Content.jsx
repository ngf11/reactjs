import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("nico");
  const handelNameChange = () => {
    const names = ["nico", "siggy", "didi", "dog"];
    setName(names[Math.floor(Math.random() * names.length)]);
  };
  const [greet, setGreet] = useState("Hello");

  const handelGreet = () => {
    const greets = ["Hello", "Hola", "Bonjour", "こんにちは"];
    setGreet(greets[Math.floor(Math.random() * greets.length)]);
  };

  const handelClick = () => {
    console.log("You got it");
  };
  const handelClickTwo = (name) => {
    console.log(`${name} was here`);
  };
  const handelClickThree = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <main>
      <p onDoubleClick={handelClick}>
        {greet}, {name}!
      </p>

      <button onClick={handelGreet}>Change Greet</button>
      <button onClick={handelNameChange}>Change Name</button>
      <button onClick={() => handelClickTwo("nico")}>Click me</button>
      <button onClick={(e) => handelClickThree(e)}>Click me</button>
    </main>
  );
};

export default Content;
