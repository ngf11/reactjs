const Content = () => {
  const handelNameChange = () => {
    const names = ["nico", "siggy", "didi", "dog"];
    return names[Math.floor(Math.random() * names.length)];
  };
  return (
    <main>
      <p>Hello {handelNameChange()}</p>
    </main>
  );
};

export default Content;
