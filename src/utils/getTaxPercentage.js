export const getTaxPercentage = ({ taxYear, annualSalary }) => {
  if (taxYear === "2021-2022") {
    if (annualSalary <= 12500) {
      return 0;
    }

    if (annualSalary > 12500 && annualSalary <= 40000) {
      return 20;
    }

    if (annualSalary > 40000 && annualSalary <= 100000) {
      return 40;
    }

    if (annualSalary > 100000) {
      return 45;
    }
  }

  if (taxYear === "2022-2023") {
    if (annualSalary <= 12500) {
      return 0;
    }

    if (annualSalary > 12500 && annualSalary <= 40000) {
      return 18;
    }

    if (annualSalary > 40000 && annualSalary <= 100000) {
      return 35;
    }

    if (annualSalary > 100000) {
      return 40;
    }
  }
};
