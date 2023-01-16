import { Banner } from "./components/Banner";
import { CalculatorForm } from "./components/CalculatorForm";
import { Results } from "./components/Results";

export const App = () => {
  return (
    <div className="container">
      <Banner />
      <CalculatorForm />
      <Results />
    </div>
  );
};
