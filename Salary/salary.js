// Prompt the user for input
const input = prompt("your basic salary ");

const input1 = prompt("Your Benefits ");

function calculateNetSalary(basicSalary, benefits) {
    // Constants (replace with actual rates from official sources)
    const kraTaxRates = [
        { range: [0, 24000], rate: 0.1 },
        { range: [24001, 32333], rate: 0.25 },
        { range: [32334, Infinity], rate: 0.3 }
    ];
    const nhifDeduction = 0; // Replace with NHIF deduction amount
    const nssfRate = 0.06; // NSSF contribution rate (employer cost)
    const maxNssfAmount = 200; // Maximum NSSF contribution per month

    // Calculate taxable income
    const taxableIncome = basicSalary + benefits;

    // Calculate PAYE (KRA tax)
    let paye = 0;
    for (const { range, rate } of kraTaxRates) {
        const [lower, upper] = range;
        if (taxableIncome >= lower && taxableIncome <= upper) {
            paye = (taxableIncome - lower) * rate;
            break;
        }
    }

    // Calculate NSSF contribution
    const nssfContribution = Math.min(basicSalary * nssfRate, maxNssfAmount);

    // Calculate net salary
    const netSalary = basicSalary + benefits - paye - nhifDeduction - nssfContribution;

    // Print results
    console.log(`Gross Salary: ${basicSalary + benefits}`);
    console.log(`NHIF Deductions: ${nhifDeduction}`);
    console.log(`NSSF Contributions: ${nssfContribution}`);
    console.log(`Taxable Income: ${taxableIncome}`);
    console.log(`PAYE (Tax): ${paye}`);
    console.log(`Net Salary: ${netSalary}`);
}

// Example usage:
const basicSalaryInput = 50000; // Replace with actual basic salary
const benefitsInput = 10000; // Replace with actual benefits
calculateNetSalary(basicSalaryInput, benefitsInput);
