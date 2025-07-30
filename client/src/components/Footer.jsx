import React from 'react'
import headerImage from "@/assets/header.png";
const Footer = () => {
  return (
     <footer className="w-full mt-8">
      <img
        src={headerImage}
        alt="Footer Background"
        className="w-full object-cover"
      />
    </footer>
  )
}

export default Footer