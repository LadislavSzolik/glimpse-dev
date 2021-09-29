import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import Header1 from "../elements/header1";
import FormikValue from "../formikValue";
import AppTextInput from "../elements/appTextInput";
import Button from "../elements/button";
import Secondary from "../elements/secondary";

const Location = (props) => {
  const locationValidationSchema = yup.object({
    street: yup.string().required().label("Street"),
    houseNumber: yup.number().required().label("House number"),
    postCode: yup.number().required().label("Postcode"),
    city: yup.string().required().label("City"),
    country: yup.string().required().label("Country"),
  });

  const handleSubmit = (values) => {
    props.next(values);
  };

  const goBack = (values) => {
    props.previous(values);
  };

  return (
    <Formik
      validationSchema={locationValidationSchema}
      initialValues={props.initialValues}
      onSubmit={handleSubmit}
    >
      {formik => (
        
        <Form>
          <Header1>
            The{" "}
            <span className="lowercase">
              {" "}
              <FormikValue valueOf="propertyType" />{" "}
            </span>{" "}
            is located at {formik.values.street != "" ? formik.values.street : '...' }
          </Header1>
          <div className="my-10 max-w-3xl grid gap-4 grid-cols-6">
            <AppTextInput
              className="col-span-4"
              label="Street"
              name="street"
              type="text"
            />
            <AppTextInput
              className="col-span-2"
              label="House number"
              name="houseNumber"
              type="number"
            />
            <AppTextInput
              className="col-span-3"
              label="Postcode"
              name="postCode"
              type="number"
            />
            <AppTextInput
              className="col-span-3"
              label="City"
              name="city"
              type="text"
            />
            <AppTextInput
              className="col-span-3"
              label="Country"
              name="country"
              type="text"
            />
          </div>
          <Secondary onClick={() => goBack(formik)} label="Back" />
          <Button type="submit" label="Continue" />
        </Form>
      )}
    </Formik>
  );
};
export default Location;
