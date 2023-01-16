import { useState } from "react";

import { Banner } from "./components/Banner";
import { CalculatorForm } from "./components/CalculatorForm";
import { Results } from "./components/Results";
import { getTaxPercentage } from "./utils/getTaxPercentage";

export const App = () => {
  const [error, setError] = useState(false);
  const [results, setResults] = useState();

  /**
   * 
   * Annual income: £50,000

Taxable income: £50,000 - £12,500 = £37,500

Tax %: 40%

Tax: 40% of £37,500 = £15,000

Take home salary: £50,000 - £15,000 = £35,000 
   */

  const calculate = ({ taxYear, annualSalary }) => {
    const taxableIncome = annualSalary <= 12500 ? 0 : annualSalary - 12500;
    const taxPercentage = getTaxPercentage({ taxYear, annualSalary });
    const taxAmount = (taxPercentage * taxableIncome) / 100;
    const takeHomeSalary = annualSalary - taxAmount;

    setResults({
      annualSalary,
      taxableIncome,
      taxPercentage,
      taxAmount,
      takeHomeSalary,
    });
  };

  return (
    <div className="container">
      <Banner />
      <CalculatorForm setError={setError} calculate={calculate} />
      {error && (
        <div className="alert alert-danger mt-4" role="alert">
          Please complete the form!!
        </div>
      )}
      {results && <Results results={results} />}
    </div>
  );
};
