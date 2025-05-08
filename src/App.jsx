import UserInput from "./components/UserInput";
import Result from "./components/Result";
import Header from "./components/Header";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  const inputValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputValid && (
        <Result
          results={calculateInvestmentResults(userInput)}
          initialInvestment={userInput.initialInvestment}
          input={UserInput}
        />
      )}
    </>
  );
}

export default App;
