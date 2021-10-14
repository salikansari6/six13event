import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header flex mx-auto  max-w-screen-xl items-center flex-col lg:flex-row lg:py-16 lg:px-10">
      <img
        src="/images/0009@1X.png"
        alt=""
        width="500"
        className="landing-img rounded-2xl"
      />
      <div className="landing flex flex-col justify-center items-center">
        <img
          src="/images/project.png"
          className="mt-10 w-1/6 mb-3 lg:mb-6 lg:mt-0"
          alt=""
        />
        <img
          src="/images/Six1Three@1X.png"
          className="w-1/2 lg:w-3/4 lg:mt-0"
          alt=""
        />
        <img
          src="/images/Artwork by COBY KATZ@1X.png"
          className="mt-6 w-1/4"
          alt=""
        />

        <div className="links flex  mx-auto justify-center mt-10  lg:mt-20">
          <a
            href="https://twitter.com/Six1three_NFT"
            target="_blank"
            rel="noreferrer"
            className="bg-primary p-3 rounded-full "
          >
            <img src="/images/twitter-48.png" width="32" alt="" />
          </a>
          <a
            href="https://discord.gg/SgVzG8UUxZ"
            target="_blank"
            rel="noreferrer"
            className="bg-primary p-3 rounded-full ml-10"
          >
            <img src="/images/discord-48.png" width="32" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
