import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import bgImage from "@/assets/regbg.png";
const ThankYou = () => {
   

  return (
    <>
      <Header step={4}/>
      <div
        className="w-full flex justify-center items-center overflow-x-hidden overflow-y-auto"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
        }}
      >
        <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-8 text-center border-t-4 border-green-600">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">THANK YOU!</h1>
          <p className="text-black mb-2  text-xl font-normal">
            Your Registration Has Been Submitted Successfully
          </p>
          <p className="text-black mb-6 text-md font-normal">
            A Confirmation Email With Your Event Details Will Be Sent To You Shortly. Please Check Your Inbox (And Spam Folder).
          </p>
          <button
            onClick={() => window.location.href = "/"}
            className="bg-green-700 hover:bg-green-800 text-white font-medium px-4 py-2 rounded cursor-pointer"
            style={{
                    background:
                      "linear-gradient(90deg, #27963D 0%, #134323 100%)",
                  }}
          >
            Return to Homepage
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ThankYou
