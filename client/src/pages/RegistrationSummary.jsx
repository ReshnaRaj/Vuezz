import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";
import bgImage from "@/assets/regbg.png";
import Progress from "@/components/Progress";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RegistrationSummary = () => {
  const navigate = useNavigate();
  const [appliedPromo, setAppliedPromo] = useState(null);
  const items = [
    {
      label: "PREMIUM TICKET × 2",
      price: "EUR 40.43",
    },
    {
      label: "Student Ticket Access On Day 5 Only",
      price: "EUR 50.40 SUBJECT TO APPROVAL – incl. 19% VAT",
    },
  ];
  const [currentStep, setCurrentStep] = useState(4);
  const [promo, setPromo] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [optInNewsletter, setOptInNewsletter] = useState(false);
  const total = "EUR 300";
  const nextStep = () => {
    navigate("/thankyou");
  };
  const prevStep = () => {
    navigate("/register", { state: { fromStep: 3 } });
  };
  return (
    <>
      <Header step={currentStep} />
      <div
        className="w-full flex justify-center overflow-x-hidden overflow-y-auto"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          minHeight: "900px",
          position: "relative",
          top: "0",
          left: "0",
          opacity: 1,
        }}
      >
        <div className="w-full max-w-[1500px] px-4 md:px-6 lg:px-0 py-6 ">
          <Progress currentStep={currentStep} />
          <div className="bg-white border rounded-lg p-6 shadow-md">
            <h2
              className="text-2xl font-bold  text-white px-4 py-4 rounded-sm"
              style={{
                background: "linear-gradient(90deg, #27963D 0%, #134323 100%)",
              }}
            >
              Registration Summary
            </h2>

            {/* Line Items */}
            {!appliedPromo ? (
              <>
                {/* Default list when no promo is applied */}
                <ul className="mt-4 divide-y divide-gray-300">
                  {items.map((item, idx) => (
                    <li
                      key={idx}
                      className="py-3 flex flex-col sm:flex-row justify-between"
                    >
                      <span className="text-gray-800 font-bold">
                        {item.label}
                      </span>
                      <span className="text-gray-900 font-medium">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <hr className="border-t border-gray-300 mt-2" />
              </>
            ) : (
              <>
                {/* New design when promo is applied */}
                <ul className="mt-4">
                  <li className="flex justify-between items-center bg-green-50  border-l-5 border-green-600  p-2">
                    <div className="flex flex-col ">
                      <span className="text-sm font-bold text-black">
                        {items[0].label}
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-gray-500 text-xs line-through">
                        {items[0].price}
                      </span>
                      <span className="text-green-800 text-sm font-semibold">
                        FREE 0.16
                      </span>
                      <span className="text-gray-400 text-xs">
                        INCL. 19% VAT
                      </span>
                    </div>
                  </li>
                </ul>
              </>
            )}

            {/* Promo Code */}
            <div className="mt-6 bg-green-50 border border-dotted border-green-200 rounded p-4">
              <div className="flex flex-col gap-2">
                <label className=" text-green-600 font-semibold">
                  Have a promo code?
                </label>
                <div className="flex">
                  <input
                    type="text"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    placeholder="Enter Promo code"
                    className={`flex-1 px-3 py-2 border border-green-200 rounded focus:ring-2 focus:outline-none focus:ring-green-500 
  ${appliedPromo ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
`}
                  />

                  <button
                    onClick={() =>
                      setAppliedPromo({
                        code: promo,
                        discount: "EUR 9.06 incl. VAT",
                        appliedTo: "2 lowest-priced tickets",
                      })
                    }
                    className="px-4 py-2 text-white font-medium rounded ml-3"
                    style={{
                      background:
                        "linear-gradient(90deg, #9F1413 0%, #000000 100%)",
                    }}
                  >
                    APPLY
                  </button>
                </div>
                {appliedPromo && (
                  <>
                    <div className="mt-2 text-green-700 font-semibold">
                      Promo code "{appliedPromo.code}" applied successfully!
                      Applied to {appliedPromo.appliedTo}!
                    </div>
                    <div className="mt-2 p-2 bg-white border border-green-300 rounded text-green-800 text-sm">
                      <div className="flex flex-col gap-1">
                        <span className="text-gray-700">
                          Promo code applied:{" "}
                          <span className="text-green-600">
                            {appliedPromo.code}
                          </span>
                          {/* {appliedPromo.discount} */}
                        </span>

                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">
                            Promo code applied:{" "}
                            <span className="text-green-600">
                              {appliedPromo.discount}
                            </span>
                          </span>
                          <button
                            onClick={() => {
                              setAppliedPromo(null);
                              setPromo("");
                            }}
                            className="px-3 py-1 text-xs text-red-600 border border-red-600 rounded hover:bg-red-50"
                          >
                            <span className="font-bold">REMOVE</span>
                          </button>
                        </div>
                        <span className="text-gray-700">
                          {" "}
                          Applied to:{" "}
                          <span className="text-green-600">
                            {appliedPromo.appliedTo}
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Total */}
            {appliedPromo ? (
              <>
                <div className="mt-4 flex justify-between items-center border-b border-gray-300 pb-2">
                  <span className="text-gray-800 font-bold">
                    Student Ticket Access On Day 5 Only
                  </span>
                  <span className="text-gray-900 font-medium">
                    EUR 50.40 SUBJECT TO APPROVAL – incl. 19% VAT
                  </span>
                </div>

                <div className="mt-6 flex justify-between items-center pt-4">
                  <div className="flex items-center">
                    <span className="text-md font-bold mr-2">Total:</span>
                    <span className="text-gray-500 line-through mr-2">
                      EUR 300
                    </span>
                    <span className="text-xl font-bold text-green-800">
                      EUR 150
                    </span>
                    <span className="text-gray-400 font-normal ml-2">
                      Incl. 19% VAT
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-xs text-black border border-black rounded cursor-pointer ">
                      <span className="font-bold">BACK</span>
                    </button>
                    <Button
                      className="cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #27963D 0%, #134323 100%)",
                      }}
                    >
                      NEXT
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mt-6 flex justify-end items-center pt-4">
                  <span className="text-md font-bold">Total:</span>
                  <span className="text-xl font-bold">{total}</span>
                  <span className="text-gray-400 font-normal ml-2">
                    Incl. 19% VAT
                  </span>
                </div>

                <hr className="border-t border-gray-300 mt-2" />
              </>
            )}

            {/* Checkboxes */}
            <div className="mt-6 space-y-4 text-sm text-gray-700">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={agreedTerms}
                  onChange={() => setAgreedTerms((v) => !v)}
                  className="mt-1 mr-2 w-4 h-4 text-green-600 border-gray-300 rounded"
                />
                <span>
                  I have read and accept the{" "}
                  <a href="#" className="underline text-red-500">
                    terms and conditions
                  </a>
                  ,{" "}
                  <a href="#" className="underline text-red-500">
                    Privacy Policy
                  </a>
                  , and consent that attendees under the age of 21 will not be
                  admitted, and admission to the exhibition is restricted to
                  trade and business professionals only; and students above 16
                  and below 18 can attend only if accompanied by school or adult
                  member.
                </span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={optInNewsletter}
                  onChange={() => setOptInNewsletter((v) => !v)}
                  className="mt-1 mr-2 w-4 h-4 text-green-600 border-gray-300 rounded"
                />
                <span>
                  I hereby consent the use of my data by the organizer,
                  exhibitors and sponsors of DWTIC & KADUN International for
                  delivering services and for marketing purposes. I am aware
                  that I can object to the sending of newsletters at any time.
                </span>
              </label>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            {currentStep > 1 && (
              <Button
                className="text-white px-6 py-2 rounded cursor-pointer mr-3"
                onClick={prevStep}
                style={{
                  background:
                    "linear-gradient(90deg, #5C2F66 0%, #25102C 100%)",
                }}
              >
                PREVIOUS
              </Button>
            )}
            <Button
              className="text-white px-6 py-2 rounded cursor-pointer"
              onClick={nextStep}
              style={{
                background: "linear-gradient(90deg, #27963D 0%, #134323 100%)",
              }}
            >
              NEXT
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationSummary;
