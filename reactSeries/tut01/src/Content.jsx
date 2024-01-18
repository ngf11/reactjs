const Content = () => {
  const handelNameChange = () => {
    const names = ["nico", "siggy", "didi", "dog"];
    return names[Math.floor(Math.random() * names.length)];
  };
  const handelGreet = () => {
    const greets = ["Hello", "Hola", "Bonjour", "こんにちは"];
    return greets[Math.floor(Math.random() * greets.length)];
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
        {handelGreet()}, {handelNameChange()}
      </p>
      <button onClick={handelClick}>Click me</button>
      <button onClick={() => handelClickTwo("nico")}>Click me</button>
      <button onClick={(e) => handelClickThree(e)}>Click me</button>
    </main>
  );
};

export default Content;
