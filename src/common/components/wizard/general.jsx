import { React, useState } from 'react';
import * as yup from "yup";
import { Formik, Form } from "formik";
import Header1 from "../elements/header1";
import FormikValue from "../formikValue";
import AppTextInput from "../elements/appTextInput";
import Button from "../elements/button";
import Secondary from "../elements/secondary";
import numberFormat from '../../utils/numberFormat';

import AppSelect from '../elements/AppSelect';

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

  const [selectedYear, setSelectedYear] = useState(props.initialValues.constructionYear);
  const [selectedSurface, setSurface] = useState(props.initialValues.surface);
  const handleSubmit = (values) => {
    setTimeout(() => {
      props.next(values);
    }, 300)
    
  };

  const goBack = (values) => {
    props.previous(values);
  };

  const setupSelectedYear = (selectedYear) => {
    setSelectedYear(selectedYear);
    props.initialValues.constructionYear=selectedYear;
  }

  // const toCurrency = (number) => {
  //   const formatter = new Intl.NumberFormat("sv-SE", {
  //     style: "decimal",
  //     currency: "SEK"
  //   });
  
  //   return formatter.format(number);
  // }

  const handleNumberFormat = (value) => {
    setSurface(numberFormat(value));
    props.initialValues.surface=selectedSurface;
  }


  const year = (new Date(1900,1,1)).getFullYear();
  const years = Array.from(new Array(150),(val, index) => index + year);
  const yearsArray = years.map(yearValue => ({
        value: yearValue,
        text: yearValue
  }));

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
            <div className='col-span-3'>
              <span className="block text-sm font-medium text-gray-500">
              Construction year
              </span>
              <select
                value={selectedYear}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  setupSelectedYear(e.target.value);
                  console.log(formik.values.constructionYear);
                }}
              >
                {yearsArray?.map((item, index) => {
                  return (
                    <option key={index} value={item.value}>
                      {item.text}
                    </option>
                  );
                })}
              </select>
            </div>

            <AppTextInput
              icon={Straighten}
              className="col-span-3"
              label="Sufrace in m2"
              name="surface"
              type="number"
              value={selectedSurface}
              onChange={(e) => {
                handleNumberFormat(e.target.value);
              }}
              
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
