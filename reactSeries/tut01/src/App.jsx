export default function App() {
  const handelNameChange = () => {
    const names = ["nico", "siggy", "didi", "dog"];
    return names[Math.floor(Math.random() * names.length)];
  };
  return (
    <>
      <h1 className="foo">Hello {handelNameChange()}</h1>
    </>
  );
}
