const kraTaxRates = [
  { amount: 0, rate: 0 },
  { amount: 24000, rate: 0.1 },
  { amount: 32333, rate: 0.25 },
  { amount: 500000, rate: 0.3 },
  { amount: 800000, rate: 0.325 },
  { amount: Infinity, rate: 0.35 },
];

//This is an array which contains objects
const nhifrates = [
  { amount: 0, rate: 0 },
  { amount: 5999, rate: 150 },
  { amount: 7999, rate: 300 },
  { amount: 11999, rate: 400 },
  { amount: 14999, rate: 500 },
  { amount: 19999, rate: 600 },
  { amount: 24999, rate: 750 },
  { amount: 29999, rate: 850 },
  { amount: 34999, rate: 900 },
  { amount: 39999, rate: 950 },
  { amount: 44999, rate: 1000 },
  { amount: 49999, rate: 1100 },
  { amount: 59999, rate: 1200 },
  { amount: 69999, rate: 1300 },
  { amount: 79999, rate: 1400 },
  { amount: 89999, rate: 1500 },
  { amount: 99999, rate: 1600 },
  { amount: Infinity, rate: 1700 },
];

const nssfRate = 0.06;

// calculate Gross Tax depending on the  salary
function getGrossTax(basicSalary, benefits) {
  let taxableSalary = basicSalary + benefits;
  let PAYE = 0;

  // This is used to iterate between the key values of the object in question 
  for (let i = 0; i < kraTaxRates.length; i++) {
    const rate = kraTaxRates[i];

    if (taxableSalary <= rate.amount) {
      break;
    }

    PAYE += (rate.amount - (i > 0 ? kraTaxRates[i - 1].amount : 0)) * rate.rate;
  }

  PAYE += (taxableSalary - PAYE) * kraTaxRates[kraTaxRates.length - 1].rate;

  return PAYE;
}

// calculate NHIF deductions using the object
function getNhif(basicSalary) {
  let rate = 0;

  for (let i = 0; i < nhifrates.length; i++) {
    // Looping through the key values of the object
    const nhifRate = nhifrates[i];

    if (basicSalary <= rate.amount) {
      rate = nhifRate.rate;
      break;
    }
  }

  return rate;
}

// calculate NSSF deductions
function calculateNSSFDeductions(basicSalary) {
  if (basicSalary > 36000) {
    return 36000 * nssfRate;
  } else {
    return basicSalary * nssfRate;
  }
}

// calculate Gross Salary => GS = BS + All Allowances(Benefits)
function getGrossSalary(basicSalary, benefits) {
  return basicSalary + benefits;
}

function calculateNetSalary() {
  // Prompt the user for their basic salary and allowances
  const basicSalaryString = prompt("Enter your basic salary:");
  const basicSalary = parseFloat(basicSalaryString);
  const benefitsString = prompt("Enter your total Allowances:");
  const benefits = parseFloat(benefitsString);

  //Number is needed for the program (if you put anything that is not a number it wont work)
  if (isNaN(basicSalary) || isNaN(benefits)) {
    console.log("Invalid input. Please enter a number.");
    return;
  }

  const grossSalary = getGrossSalary(basicSalary, benefits);
  const PAYE = getGrossTax(grossSalary, 0);
  const nhifDeductions = getNhif(basicSalary);
  const nssfDeductions = calculateNSSFDeductions(basicSalary);

  const netSalary = grossSalary - PAYE - nhifDeductions - nssfDeductions;
  console.log("Gross Salary:", grossSalary);
  console.log("Net Salary:", netSalary);
  window.alert(
    `Your Gross Salary of Ksh${grossSalary} gives a net salary of Ksh${netSalary}`
  );
}

// To use the program, call the function:
calculateNetSalary();
