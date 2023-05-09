import './App.css';

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function App() {
  const handleClick1 = () => {
    throw new ValidationError('This is the error message');
  };

  const handleClick2 = () => {
    let val;
    console.log(val.val);
  };

  return (
    <div className="App">
      <button onClick={handleClick1}>Click 1</button>
      <button onClick={handleClick2}>Click 2</button>
    </div>
  );
}

export default App;
