import Headers from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Headers title="Groceries List" />
      <Content />
      <Footer />
    </div>
  );
}
