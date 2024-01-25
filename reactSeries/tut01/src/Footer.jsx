function Footer({ length }) {
  return (
    <footer>
      <span></span>
      <p>
        {length} List {length > 0 ? "items" : "item"}
      </p>
    </footer>
  );
}

export default Footer;
