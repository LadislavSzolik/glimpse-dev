import { Form, Formik } from 'formik'
import React, { useState } from 'react'

import Button from '../elements/button'
import Secondary from '../elements/secondary'
import Progress from '../elements/progress'

const Wizard = ({ children,  stepLabels, stepNumber }) => {
  //const [stepNumber, setStepNumber] = useState(0)
  const steps = React.Children.toArray(children)
  //const [snapshot, setSnapshot] = useState(initialValues)

  const step = steps[stepNumber]

  const totalSteps = steps.length
  const isLastStep = stepNumber === totalSteps - 1

  // const next = (values) => {
  //   setSnapshot(values)
  //   setStepNumber(Math.min(stepNumber + 1, totalSteps - 1))
  // }

  // const previous = (values) => {
  //   setSnapshot(values)
  //   setStepNumber(Math.max(stepNumber - 1, 0))
  // }

  // const handleSubmit = async (values, bag) => {
  //   if (step.props.onSubmit) {
  //     await step.props.onSubmit(values, bag)
  //   }

  //   if (isLastStep) {
  //     return onSubmit(values, bag)
  //   } else {
  //     bag.setTouched({})
  //     next(values)
  //   }
  // }

  return (
    <div>
      <Progress
        stepLabels={stepLabels}
        currentStep={stepNumber}
        totalSteps={totalSteps}
      />

      <div className="my-8">{step}</div>
    </div>
  );
}

export default Wizard
