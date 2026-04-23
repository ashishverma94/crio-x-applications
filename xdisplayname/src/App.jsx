import { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [show, setShow] = useState(false);

  const showName = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div className="container">
      <h1>Full Name Display</h1>
      <form  onSubmit={showName}>
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input
            id="first_name"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name:</label>
          <input
            id="last_name"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
        </div>
        <button disabled={!fName || !lName} type="submit">
          Submit
        </button>
      </form>
      {show && (
        <h3>
          Full Name: {fName} {lName}
        </h3>
      )}
    </div>
  );
}

export default App;
