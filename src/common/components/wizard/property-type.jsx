import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import Header1 from "../elements/header1";
import AppRadioGroup from "../elements/appRadioGroup";
import { Bed, House, Apartment } from "../icons";
import Button from "../elements/button";

const PropertyType = (props) => {
  const types = [
    { name: "House", icon: (className) => <House className={className} /> },
    {
      name: "Apartment",
      icon: (className) => <Apartment className={className} />,
    },
    { name: "Studio", icon: (className) => <Bed className={className} /> },
  ];

  const propertyTypeValidationSchema = yup.object({
    propertyType: yup.string().required().label("Property type"),
  });

  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      validationSchema={propertyTypeValidationSchema}
      initialValues={props.initialValues}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <Header1>The property is a(n)...</Header1>
          <AppRadioGroup name="propertyType" items={types} />
          <Button type="submit" label='Continue' />
        </Form>
      )}
    </Formik>
  );
};
export default PropertyType;
