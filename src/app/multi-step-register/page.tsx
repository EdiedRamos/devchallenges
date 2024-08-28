"use client";
import { useState } from "react";
import { FirstStep, SecondStep, Success, ThirdStep } from "./(components)";

export default function MultiStepRegister() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleCurrentStep = () => setCurrentStep((prev) => prev + 1);

  return (
    <>
      <FirstStep step={currentStep} handleContinue={handleCurrentStep} />
      <SecondStep step={currentStep} handleContinue={handleCurrentStep} />
      <ThirdStep step={currentStep} handleContinue={handleCurrentStep} />
      <Success step={currentStep} />
    </>
  );
}
