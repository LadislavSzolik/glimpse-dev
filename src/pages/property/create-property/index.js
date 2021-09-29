import { useState } from 'react';
import Wizard from '../../../common/components/wizard/wizard';
import PropertyType from '../../../common/components/wizard/property-type';
import Location from '../../../common/components/wizard/location';
import General from '../../../common/components/wizard/general';
import Financial from '../../../common/components/wizard/financial';

export default function CreateProperty() {
  const steps = ['Type', 'Location', 'General', 'Financial', 'Day-to-Day'];

  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData) => {
   // console.log("Form Submitted", formData);
  };

  const handleNextStep = (newData, final = false) => {
    console.log(newData);
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = (newData) => {
    console.log(newData);
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  }

  const [data, setData] = useState({
          propertyType: '',
          street: '',
          houseNumber: '',
          postCode: '',
          city: '',
          country: '',
          constructionYear: new Date().getFullYear(),
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
  });

    return (
      <Wizard  stepLabels={steps} stepNumber={currentStep} >
         
          <PropertyType initialValues={data} next={handleNextStep}></PropertyType>
         
        <div>
          <Location initialValues={data} next={handleNextStep} previous={handlePrevious}></Location>
        </div>
        <div>
          <General initialValues={data} next={handleNextStep} previous={handlePrevious}></General>
        </div>
        <div>
          <Financial initialValues={data} next={handleNextStep} previous={handlePrevious}></Financial>
        </div>
      </Wizard>
    );
}

