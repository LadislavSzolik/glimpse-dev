import Wizard from '../../../components/wizard';

export default function CreateProperty() {
  const steps = ['Type', 'Location', 'General', 'Financial', 'Day-to-Day'];
    return (
      <Wizard
        initialValues={{
          propertyType: '',
          street: '',
          houseNumber: '',
          postCode: '',
          city: '',
          country: '',
          constructionYear: '',
          surface: '',
          bedrooms: '',
          energyLabel: '',
          acquireDate: '',
          pruchasePrice: '',
          closingCosts: '',
          transactionTaxes: '',
          renovationCosts: '',
          addLoan: '',
          downPayment: '',
          loanAmount: '',
          loanAnnualInterestRate: '',
          loanStartDate: '',
          loanTerm: '',
        }}
        stepLabels={steps}
      >
        <div>
          First step
        </div>
        <div>
          Second step
        </div>
        <div>
          Third step
        </div>
        <div>
          Fourth step
        </div>
      </Wizard>
    );
}

