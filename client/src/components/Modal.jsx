import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import headerImage from "@/assets/header.png";

const workshops = [
  "Global Leaders Forum.NEW (3 Days)",
  "Digital Cities (1 Day)",
  "GITEX Main Stage",
  "Edtech (1 Day)",
  "Artificial Intelligence & Robotics (15)",
  "Energy Transition (1 Day)",
  "AI Everything (4 Days)",
  "Intelligent Connectivity (1 Day)",
  "Cybersecurity (4 Days)",
  "Digital Finance (1 Day)",
  "Future Health.NEW (2 Days)",
  "Future Mobility (1 Day)",
];

const Modal = ({ open, onOpenChange, closeModal ,onApply}) => {
    const [checkedItems, setCheckedItems] = useState([])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-4xl w-full p-0 rounded-xl overflow-hidden"
      >
        {/* Header image */}
        <div
          className="relative h-16 flex items-center px-4"
          style={{
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-white text-lg font-semibold">SELECT WORKSHOPS</h2>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <input
            type="text"
            placeholder="Try Product/Service"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
          />

          <p className="text-xs text-gray-600">
            I Am Interested In Sourcing The Following Solutions/Products? (Select Top 5) * 
            Please Ensure You Have Chosen At Least One Category In Each Section
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-2">
            {workshops.map((label, idx) => (
             <label key={idx} className="flex items-center gap-2 text-xs">
  <Checkbox
    id={`workshop-${idx}`}
    checked={checkedItems.includes(label)}
    onCheckedChange={(checked) => {
      setCheckedItems(prev =>
        checked ? [...prev, label] : prev.filter(item => item !== label)
      );
    }}
  />
  {label}
</label>

            ))}
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="flex justify-end gap-3 p-4">
          <Button
            variant="outline"
            onClick={closeModal}
            className="border-gray-300 text-gray-700 px-4 py-1 rounded"
          >
            CANCEL
          </Button>
          <Button
            className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800"
            onClick={() => onApply(checkedItems)}
          >
            APPLY
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
