import React from "react";
import * as yup from "yup";
import { Formik, Form, useField, useFormikContext } from "formik";
import Header1 from "../elements/header1";
import Header2 from "../elements/header2";
import Header3 from "../elements/header3";
import FormikValue from "../formikValue";
import AppTextInput from "../elements/appTextInput";
import Button from "../elements/button";
import Secondary from "../elements/secondary";
import Description from '../description';
import AppSwitch from '../elements/appSwitch';

const Financial = (props) => {
  const financialValidationSchema = yup.object({
    acquireDate: yup.date().required().label("Acquired on"),
    pruchasePrice: yup.number().required().label("Purchase price"),
    closingCosts: yup.number().min(0).label("Closing costs"),
    transactionTaxes: yup.number().label("Transaction taxes"),
    renovationCosts: yup.string().label("Rennovation costs"),
    addLoan: yup.boolean(),
    downPayment: yup
      .number()
      .label("Down payment")
      .when("addLoan", { is: true, then: yup.number().required() }),
    loanAmount: yup.number().required().label("Loan Amount"),
    loanAnnualInterestRate: yup
      .number()
      .required()
      .label("Annual interest rate"),
    loanStartDate: yup.date().required().label("Loan start"),
    loanTerm: yup.number().required().label("Loan term"),
  });

  const handleSubmit = (values) => {
    props.next(values);
  };

  const goBack = (values) => {
    props.previous(values);
  };

  const TotalPropertyPrice = () => {
    const { values } = useFormikContext();
    const total = _.sum([
      values.pruchasePrice,
      values.closingCosts,
      values.transactionTaxes,
      values.renovationCosts,
    ]);
  
    return <Description label="Total price" value={total ? total : '0'} />;
  };

  const FormSwitch = ({ className, label, name }) => {
    const [field, meta, helpers] = useField(name);
  
    const { value } = meta;
    const { setValue } = helpers;
    return (
      <AppSwitch value={value} onChange={setValue} className={className} label={label} />
    );
  };
  
  const FormLoanInput = () => {
    const formik = useFormikContext();
  
    if (!formik.values.addLoan) return null;
  
    return (
      <>
        <Header3 className="col-span-6 mt-5">Down payment</Header3>
        <AppTextInput
          className="col-span-3"
          label="Down payment"
          name="downPayment"
          type="number"
        />
        <Header3 className="col-span-6 mt-5">Loan information</Header3>
        <AppTextInput
          className="col-span-3"
          label="Loan amount"
          name="loanAmount"
          type="number"
        />
        <AppTextInput
          className="col-span-3"
          label="Annual interest rate"
          name="loanAnnualInterestRate"
          type="number"
        />
        <AppTextInput
          className="col-span-3"
          label="Loan start date"
          name="loanStartDate"
          type="date"
        />
        <AppTextInput
          className="col-span-3"
          label="Loan start date"
          name="loanTerm"
          type="number"
        />
      </>
    );
  };

  return (
    <Formik
      validationSchema={financialValidationSchema}
      initialValues={props.initialValues}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
           <Header1>
            <FormikValue valueOf="street" /> <FormikValue valueOf="houseNumber" />,{' '}
            <FormikValue valueOf="city" /> - Purchase information
          </Header1>

          <div className="my-10 max-w-3xl grid gap-4 grid-cols-6">
            <AppTextInput
              className="col-span-3"
              label="Acquired on"
              name="acquireDate"
              type="date"
            />
            <Header2 className="col-span-6 mt-5">Price breakdown</Header2>

            <AppTextInput
              className="col-start-1 col-span-3"
              label="Purchase price"
              name="pruchasePrice"
              type="number"
            />
            <AppTextInput
              isOptional
              className="col-span-3"
              label="Closing costs"
              name="closingCosts"
              type="number"
            />
            <AppTextInput
              isOptional
              className="col-span-3"
              label="Transaction taxes"
              name="transactionTaxes"
              type="number"
            />
            <AppTextInput
              isOptional
              className="col-span-3"
              label="Rennovation costs"
              name="renovationCosts"
              type="number"
            />

            <TotalPropertyPrice />

            <Header2 className="col-span-6 mt-5">Property financing</Header2>

            <FormSwitch
              name="addLoan"
              className="col-span-6"
              label="Property is financed with loan"
            />

            <FormLoanInput />
          </div>
          <Secondary onClick={() => goBack(formik)} label="Back" />
          <Button type="submit" label="Complete" />
        </Form>
      )}
    </Formik>
  );
};
export default Financial;
