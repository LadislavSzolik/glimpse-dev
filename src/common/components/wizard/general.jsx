import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import Header1 from "../elements/header1";
import FormikValue from "../formikValue";
import AppTextInput from "../appTextInput";
import Button from "../elements/button";
import Secondary from "../elements/secondary";
import { Lightbulb, Bed, Straighten } from '../icons';

const General = (props) => {
  const generalValidationSchema = yup.object({
    constructionYear: yup
      .date()
      .min(1800)
      .label("Construction year"),
    surface: yup.number().min(0).label("Surface"),
    bedrooms: yup.number().min(0).label("Number of bedrooms"),
    energyLabel: yup.string().label("Surface"),
  });

  const handleSubmit = (values) => {
    props.next(values);
  };

  const goBack = (values) => {
    props.previous(values);
  };

  return (
    <Formik
      validationSchema={generalValidationSchema}
      initialValues={props.initialValues}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <Header1>
            <FormikValue valueOf="street" />{" "}
            <FormikValue valueOf="houseNumber" />,{" "}
            <FormikValue valueOf="city" /> - General information
          </Header1>

          <div className="my-10 max-w-3xl grid gap-4 grid-cols-6">
            <AppTextInput
              className="col-span-3"
              label="Construction year"
              name="constructionYear"
              type="date"
            />
            <AppTextInput
              icon={Straighten}
              className="col-span-3"
              label="Sufrace in m2"
              name="surface"
              type="number"
            />
            <AppTextInput
              icon={Bed}
              className="col-span-3"
              label="Number of bedrooms"
              name="bedrooms"
              type="number"
            />
            <AppTextInput
              icon={Lightbulb}
              className="col-span-3"
              label="Energy label"
              name="energyLabel"
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

export default General;
