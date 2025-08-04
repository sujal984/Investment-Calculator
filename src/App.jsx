import UserInput from "./components/UserInput";
import Result from "./components/Result";
import Header from "./components/Header";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";
import { Row, Col } from "antd";
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
  const resetInputs = () => {
    setUserInput({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0,
    });
  };
  return (
    <>
      <Row>
        <Col span={24}>
          <Header />
          <UserInput
            onChange={handleChange}
            userInput={userInput}
            onReset={resetInputs}
          />
          {!inputValid && (
            <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
              Please enter a duration greater than zero.
            </p>
          )}
        </Col>
        <Col span={24}>
          {inputValid && (
            <Result
              results={calculateInvestmentResults(userInput)}
              initialInvestment={userInput.initialInvestment}
              input={UserInput}
            />
          )}
        </Col>
      </Row>
    </>
  );
}

export default App;
