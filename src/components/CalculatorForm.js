import { useState } from "react";

export const CalculatorForm = ({ setError }) => {
  const [taxYear, setTaxYear] = useState("");
  const [annualSalary, setAnnualSalary] = useState();

  const handleChangeTaxYear = (event) => {
    setTaxYear(event.target.value);
  };

  const handleChangeSalary = (event) => {
    setAnnualSalary(parseFloat(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (taxYear && annualSalary) {
      setError(false);
      // calculate the take home salary
    } else {
      setError(true);
    }
  };

  return (
    <form className="p-4 bg-light" onSubmit={handleSubmit}>
      <div className="my-3">
        <label htmlFor="taxYear" className="form-label text-dark">
          Select Tax Year
        </label>
        <select
          className="form-select"
          id="taxYear"
          onChange={handleChangeTaxYear}
          defaultValue={taxYear}
        >
          <option value="" disabled>
            Select a tax year
          </option>
          <option value="2021-2022">2021-2022</option>
          <option value="2022-2023">2022-2023</option>
        </select>
      </div>

      <div className="my-3">
        <label htmlFor="annualSalary" className="form-label text-dark">
          Gross Annual Salary
        </label>
        <input
          type="number"
          className="form-control"
          id="annualSalary"
          placeholder="Enter your gross annual salary"
          onChange={handleChangeSalary}
        />
      </div>

      <div className="mt-4 text-center">
        <button className="btn btn-success" type="submit">
          Calculate
        </button>
      </div>
    </form>
  );
};
