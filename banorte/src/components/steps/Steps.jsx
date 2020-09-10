import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';
import dots from '../../assets/images/dots.png';

function Steps() {
  const [steps, setSteps] = useState([
  {
    title: 'Step one',
    onClick: (e) => {
      e.preventDefault()
      console.log('clickeado el perro', 1)
    },
  }, {
    title: 'Step two',
    onClick: (e) => {
      e.preventDefault()
      console.log('clickeado el gallo', 2)
    },
  }, {
    title: 'Step three',
    onClick: (e) => {
      e.preventDefault()
      console.log('clickeado el ornitorrinco', 3)
    },
  }
]);
const [currentStep, setCurrentStep] = useState(0);

// onClickNext() = {
//   setCurrentStep(currentStep + 1)
// }


  return (
    <div className="file is-centered steps-indicator">
      <Stepper 
      steps={ [{title: 'Step one'}, 
      {title: 'Step two'},
      {title: 'Step three'}] } 
      activeStep={2}
      completeColor={'#EB002B'}
      activeColor={'#850018'}
      size={15}
      circleFontSize={0}
      titleFontSize={0}
      >
      </Stepper>
    </div>
  )
}

export default Steps

