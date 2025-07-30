import React from "react";

const steps = [1, 2, 3, 4];

const Progress =  ({ currentStep }) => {
  return (
    <div className="flex justify-center items-center gap-2 py-4">
      {steps.map((step, index) => {
        const isCompleted = step < currentStep || step === 4 && currentStep === 4;
        const isActive = step === currentStep;

        return (
          <div key={index} className="flex items-center gap-2">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-gray-500 text-sm font-bold
                ${isCompleted ? "bg-green-600 text-white" : isActive ? "bg-green-600 text-white" : "bg-white border border-gray-300"}
              `}
            >
              {isCompleted ? "✓" : step}
            </div>
            {index < steps.length - 1 && (
             <div
    className={`w-15 h-1 ${
      step < currentStep ? "bg-green-600" : "bg-gray-300"
    }`}
  ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Progress