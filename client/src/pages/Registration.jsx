import React, { useState } from "react";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";
import bgImage from "@/assets/regbg.png";
import bhImage from "@/assets/img1.png";
import bhImage2 from "@/assets/img2.png";
import Progress from "@/components/Progress";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import Modal from "@/components/Modal";

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedWorkshops, setSelectedWorkshops] = useState([]);
  const [selectedMainCategories, setSelectedMainCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const initialStep = location.state?.fromStep || 1;
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  const nextStep = () => {
    if (currentStep === 1) {
      if (!validateForm()) return; // Block navigation
    }
    if (currentStep === 3) {
      navigate("/summary"); // Go to summary page
    } else {
      setCurrentStep((s) => Math.min(s + 1, 4));
    }
  };
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    region: "",
    email: "",
    confirmEmail: "",
    nationality: "",
    mobileCode: "",
    mobileNumber: "",
    companyName: "",
    jobTitle: "",
    companyType: "",
    industry: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" }); // clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.region.trim()) newErrors.region = "Region is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.confirmEmail.trim())
      newErrors.confirmEmail = "Confirm Email is required";
    if (
      formData.email.trim() &&
      formData.confirmEmail.trim() &&
      formData.email.trim() !== formData.confirmEmail.trim()
    )
      newErrors.confirmEmail = "Emails do not match";
    if (!formData.nationality.trim())
      newErrors.nationality= "Nationality is required";
    if (!formData.mobileNumber.trim())
      newErrors.mobileNumber = "Mobile Number is required";
//     else if (!/^\d{10}$/.test(formData.mobileNumber)) {
//   newErrors.mobileNumber = "Mobile Number must be exactly 10 digits";
// }
    if (!formData.companyName.trim())
      newErrors.companyName = "Company Name is required";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job Title is required";
    if (!formData.companyType.trim())
      newErrors.companyType = "Company Type is required";
    if (!formData.industry.trim()) newErrors.industry = "Industry is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
        <div className="w-full max-w-[1500px] px-4 md:px-6 lg:px-0 py-6">
          <Progress currentStep={currentStep} />

          <div className="bg-gray-50 border rounded-lg p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* LEFT SIDE: Form Section */}
              <div className="bg-white lg:col-span-2 border rounded-md overflow-hidden">
                {/* Title and Badge with Gradient Header */}
                <div
                  className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 py-3"
                  style={{
                    background:
                      "linear-gradient(90deg, #27963D 0%, #134323 100%)",
                  }}
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-0">
                    Registration Information 1
                  </h2>

                  <div
                    className="text-xs md:text-sm lg:text-xl font-normal text-white px-3 py-1 rounded-md"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    PREMIUM TICKET - FREE incl. 19% VAT
                  </div>
                </div>

                {/* White Form Body */}
                <div className="p-4 space-y-6">
                  <RegistrationForm
                    formData={formData}
                    errors={errors}
                    handleChange={handleChange}
                  />

                  {/* Checkboxes Section */}
                  <div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-2">
                      <p className="text-sm font-medium">
                        What products & services are you interested in?
                        <span className="text-red-500">*</span>
                      </p>
                      <button
                        className="text-white text-xs px-4 py-2 rounded hover:opacity-90"
                        style={{
                          background:
                            "linear-gradient(90deg, #AB0202 0%, #240102 100%)",
                        }}
                        onClick={openModalHandler}
                      >
                        SELECT{" "}
                        <span className="font-bold">SOLUTIONS/PRODUCTS</span>
                      </button>
                    </div>

                    {selectedMainCategories.length > 0 && (
                      <div className="mt-2">
                        <p className="text-xs font-semibold mb-1">
                          Main Categories
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedMainCategories.map((item, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-[#5E3169] text-white px-3 py-1 rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedSubCategories.length > 0 && (
                      <div className="mt-2">
                        <p className="text-xs font-semibold mb-1">
                          Sub Categories
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedSubCategories.map((item, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-sm font-medium mb-5">
                      Select Workshop{" "}
                      <span className="text-gray-400">
                        (Maximum 6 can Select)
                      </span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {[
                        "Global Leaders Vision (NEW) (1 Day)",
                        "Digital Cities (1 Day)",
                        "GITEX Main Stage",
                        "Etisalat Tech (3 Days)",
                        "Artificial Intelligence & Blockchain (1.5)",
                        "Energy Transition (1 Day)",
                        "Future Urbanism (1 Day)",
                        "Intelligent Connectivity (3 Days)",
                        "Cybersecurity X (1 Day)",
                        "Sustainability X (1 Day)",
                        "Future Health (NEW) (2 Days)",
                        "Future Mobility (1 Day)",
                      ].map((label, index) => (
                        <label
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Checkbox id={`product${index}`} />
                          {label}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Info Card */}
              <div className="relative w-full h-fit mt-4 lg:mt-0 rounded-lg overflow-hidden bg-white ">
                {/* Background Image */}
                <img
                  src={bhImage2}
                  alt="Background"
                  className="w-full object-cover h-24"
                />

                {/* Overlay Half-Image */}
                <img
                  src={bhImage}
                  alt="Badge Header"
                  className="absolute top-5 left-4 w-[320px] z-10"
                />

                {/* Registration Button */}
                <div className="px-5">
                  <button
                    className="text-white text-sm font-semibold py-2 px-16 rounded-md shadow mx-auto block"
                    style={{
                      background:
                        "linear-gradient(90deg, #27963D 0%, #134323 100%)",
                    }}
                  >
                    Registration Form
                  </button>
                </div>

                {/* Content */}
                <div className="pt-6 px-4 pb-4 text-center text-sm">
                  <div className="space-y-2 text-gray-300 font-medium">
                    <p className="font-bold">FULL NAME</p>
                    <p className="font-normal">JOB TITLE</p>
                    <p className="font-normal">COMPANY NAME</p>
                    <p className="font-normal">COUNTRY OF RESIDENCE</p>
                  </div>

                  {/* Divider */}
                  <div className="mt-6 pt-6 pb-4 text-center shadow-md shadow-gray-300">
                    <p className="text-gray-400 text-xs font-bold mb-1">
                      BADGE CATEGORY
                    </p>
                    <p className="text-black text-3xl font-bold">VISITOR</p>
                  </div>
                </div>
              </div>
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
            <Modal
              open={openModal}
              onOpenChange={setOpenModal}
              closeModal={closeModal}
              onApply={(selectedMain) => {
                // Pass dummy subcategories
                const dummySubcategories = [
                  "Edge Computing",
                  "Cloud Computing",
                  "Cognitive Computing",
                ];
                setSelectedMainCategories(selectedMain);
                setSelectedSubCategories(dummySubcategories);
                setOpenModal(false);
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Registration;
