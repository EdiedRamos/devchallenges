"use client";
import { useState } from "react";
import {
  FirstStep,
  SecondStep,
  Steps,
  Success,
  ThirdStep,
} from "./(components)";

export default function MultiStepRegister() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleCurrentStep = () => setCurrentStep((prev) => prev + 1);
  const handleCurrentStepJump = (step: number) =>
    setCurrentStep((prev) => (step < 1 || step > 3 ? prev : step));

  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center bg-msr-black">
      <FirstStep step={currentStep} handleContinue={handleCurrentStep} />
      <SecondStep step={currentStep} handleContinue={handleCurrentStep} />
      <ThirdStep step={currentStep} handleContinue={handleCurrentStep} />
      <Success step={currentStep} />
      <Steps step={currentStep} handleJump={handleCurrentStepJump} />
    </div>
  );
}
