function Header(props) {
  // const Title = 'Jake Classroom'

  // Destructuring

  const { title, substitle } = props;

  return (
    <header className="header">
      {/* <h1>{Title}</h1> */}
      <h1>{title}</h1>
      <p>{substitle}</p>
      {/* <h1>Joke Classroom</h1>
        <p>Learn something new</p> */}
    </header>
  );
}
export default Header;
