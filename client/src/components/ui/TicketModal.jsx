import React from "react";
import headerImage from "@/assets/header.png";

const TicketModal = ({ ticket, onClose }) => {
  if (!ticket) return null;

  return (
    <div className="fixed inset-0 z-50  bg-opacity-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl overflow-hidden w-full max-w-2xl relative shadow-lg">
        {/* Header Image */}
        <div
          className="w-full h-24 relative"
          style={{
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <h2 className="text-lg font-bold text-green-800 mb-2">{ticket.title}</h2>
          <p className="text-sm text-gray-700 mb-4">{ticket.description}</p>

          <ul className="text-sm list-disc list-inside space-y-1 mb-4 text-gray-800">
            {ticket.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          <div className="text-right font-semibold text-green-700 text-base">
            {ticket.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
