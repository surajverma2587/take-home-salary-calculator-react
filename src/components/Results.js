export const Results = ({ results }) => {
  return (
    <div className="mt-4">
      <div className="card p-4 text-dark">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="d-flex justify-content-between fs-5">
              <div>Annual Salary</div>
              <div>{results.annualSalary}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex justify-content-between fs-5">
              <div>Taxable Income</div>
              <div>{results.taxableIncome}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex justify-content-between fs-5">
              <div>Tax Percentage</div>
              <div>{results.taxPercentage}%</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex justify-content-between fs-5">
              <div>Tax Payable</div>
              <div>{results.taxAmount}</div>
            </div>
          </li>
        </ul>
        <div className="card-footer">
          <div className="d-flex justify-content-between fs-3">
            <div>Take Home Salary</div>
            <div>{results.takeHomeSalary}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
