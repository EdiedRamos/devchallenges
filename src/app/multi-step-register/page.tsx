"use client";
import { useState } from "react";
import {
  FirstStep,
  SecondStep,
  Steps,
  Success,
  ThirdStep,
} from "./(components)";
import { RegisterProvider } from "./(components)/context/register.provider";

export default function MultiStepRegister() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleCurrentStep = () => setCurrentStep((prev) => prev + 1);

  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center bg-msr-black">
      <RegisterProvider>
        <FirstStep step={currentStep} handleContinue={handleCurrentStep} />
        <SecondStep step={currentStep} handleContinue={handleCurrentStep} />
        <ThirdStep step={currentStep} handleContinue={handleCurrentStep} />
        <Success step={currentStep} />
        <Steps step={currentStep} />
      </RegisterProvider>
    </div>
  );
}
