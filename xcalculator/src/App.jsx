import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [isError, setIsError] = useState(false);
  const [result, setResult] = useState("");

  const buttonsText = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];

  const handleBtnClick = (text) => {
    setIsError(false);

    if (text === "=" && inputText === "") {
      setIsError(true);
    }
    if (text === "C") {
      setInputText("");
      return;
    }

    if (text === "=") {
      try {
        const result = eval(inputText);
        setResult(result);
        setIsError(false);
      } catch (error) {
        setIsError(true)
        return null;
      }
      return;
    }

    setInputText(inputText + text);
  };

  return (
    <div className="calc-outer">
      <h1>React Calculator</h1>
      <input type="text" className="input" value={inputText} />

      <span>{isError ? "Error" : result}</span>
      <div className="btndiv">
        {buttonsText.map((btn, index) => {
          return (
            <button onClick={() => handleBtnClick(btn)} key={index}>
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
