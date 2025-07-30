import React from "react";
import headerImage from "@/assets/header.png";
import loginIcon from "@/assets/login.png";

const Header = ({ step = 1  }) => {
     const showLogin = step === 1 || step === 2;
  return (
    <div className="relative w-full max-w-full h-[214px] overflow-hidden">
      <img
        src={headerImage}
        alt="Header"
        className="w-full h-full object-cover"
      />
      {showLogin && (
        <img
          src={loginIcon}
          alt="Login"
          className="absolute"
          style={{
            width: "249px",
            height: "52px",
            top: "81px",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 1,
          }}
        />
      )}
    </div>
  );
};

export default Header;
