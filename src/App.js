import { useState } from "react";
import { Banner } from "./components/Banner";
import { CalculatorForm } from "./components/CalculatorForm";
import { Results } from "./components/Results";

export const App = () => {
  const [error, setError] = useState(false);

  return (
    <div className="container">
      <Banner />
      <CalculatorForm setError={setError} />
      {error && (
        <div className="alert alert-danger mt-4" role="alert">
          Please complete the form!!
        </div>
      )}
      <Results />
    </div>
  );
};
