import logo from "./images/logo.svg";
import hamburger from "./images/icon-hamburger.svg";
import imageIntroMobile from "./images/image-intro-mobile.jpg";
import patternLeftMobile from "./images/bg-pattern-intro-left-mobile.svg";
import patternRightMobile from "./images/bg-pattern-intro-right-mobile.svg";
import iconSnappyProcess from "./images/icon-snappy-process.svg";
import iconAffordablePrices from "./images/icon-affordable-prices.svg";
import iconPeopleFirst from "./images/icon-people-first.svg";
import Section from "./components/Section";
import patternHowWeWorkMobile from "./images/bg-pattern-how-we-work-mobile.svg";
import FooterSection from "./components/FooterSection";
import iconClose from "./images/icon-close.svg";
import patternMobileNav from "./images/bg-pattern-mobile-nav.svg";
import { useState } from "react";
import useClickOutside from "./useClickOutside";
import imageIntroDesktop from "./images/image-intro-desktop.jpg";
import patternLeftDesktop from "./images/bg-pattern-intro-left-desktop.svg";
import patternRightDesktop from "./images/bg-pattern-intro-right-desktop.svg";
import patternHowWeWorkDesktop from "./images/bg-pattern-how-we-work-desktop.svg";
import patternFooterMobile from "./images/bg-pattern-footer-mobile.svg";
import patternFooterDesktop from "./images/bg-pattern-footer-desktop.svg";

const App = () => {
  const [show, setShow] = useState(false);

  const nav = useClickOutside(() => {
    setShow(false);
  }, show);

  const navBar = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="flex md:px-14 z-[200] bg-Very-Light-Gray relative lg:px-24 items-center justify-between px-6 py-7">
        <img className="cursor-pointer" src={logo} alt="logo" />
        <button className="md:hidden" onClick={navBar}>
          <img src={show ? iconClose : hamburger} alt="icon-hamburger" />
        </button>

        <div className="hidden md:block">
          <a
            className="uppercase font-Karla text-base hover:text-Very-Dark-Violet transition-all font-semibold tracking-[1px] text-Dark-Grayish-Violet"
            href="#"
          >
            How we work
          </a>
          <a
            className="uppercase font-Karla text-base hover:text-Very-Dark-Violet transition-all font-semibold tracking-[1px] ml-5 text-Dark-Grayish-Violet"
            href="#"
          >
            Blog
          </a>
          <a
            className="uppercase font-Karla text-base hover:text-Very-Dark-Violet transition-all font-semibold tracking-[1px] ml-5 text-Dark-Grayish-Violet"
            href="#"
          >
            Account
          </a>
          <a
            className="w-max px-5 py-2 transition-all border-2 ml-5 border-Very-Dark-Violet mt-5 m-auto uppercase hover:bg-Very-Dark-Violet hover:text-Very-Light-Gray font-Karla tracking-[2px] text-Very-Dark-Violet"
            href="#"
          >
            View plans
          </a>
        </div>
      </div>

      <div
        ref={nav}
        className="md:hidden w-full right-[50%] translate-x-[50%] absolute"
      >
        <div
          className={`${
            show ? "translate-y-0" : "-translate-y-[600px]"
          } pb-[330px] transition-all duration-500 p-5 bg-Very-Dark-Violet flex items-center flex-col justify-between`}
        >
          <a
            className="text-base mt-5 block uppercase font-karla tracking-[1px] hover:text-Dark-Grayish-Violet z-50 transition-all font-semibold text-Very-Light-Gray m-auto"
            href="#"
          >
            How we work
          </a>
          <a
            className="text-base mt-8 block uppercase font-karla tracking-[1px] hover:text-Dark-Grayish-Violet z-50 transition-all font-semibold text-Very-Light-Gray m-auto"
            href="#"
          >
            Blog
          </a>
          <a
            className="text-base mt-8 block uppercase font-karla tracking-[1px] hover:text-Dark-Grayish-Violet z-50 transition-all font-semibold text-Very-Light-Gray m-auto"
            href="#"
          >
            Account
          </a>
          <a
            className="w-[90%] relative hover:scale-[1.1] hover:translate-y-1 transition-all text-center px-7 py-2 border-2 mt-8 block m-auto z-50 uppercase font-Karla tracking-[2px] text-Very-Light-Gray"
            href="#"
          >
            View plans
            <div className="w-4 h-4 z-50 bg-sky-500 flex items-center justify-center rounded-full absolute -right-2 -top-2"></div>
            <div className="absolute -top-[10px] -right-[10px] w-5 h-5 animate-ping opacity-75 bg-sky-400 rounded-full"></div>
          </a>
          <img
            className="absolute w-full bottom-0 right-0"
            src={patternMobileNav}
            alt="pattern-mobile-nav"
          />
        </div>
      </div>

      <img
        className="md:hidden w-full"
        src={imageIntroMobile}
        alt="image-intro-mobile"
      />

      <img
        className="hidden md:block lg:hidden w-full"
        src={imageIntroDesktop}
        alt="image-intro-desktop"
      />

      <div className="relative lg:flex items-center lg:pb-[110px] justify-center bg-Dark-Violet pb-28">
        <img
          className=" lg:hidden"
          src={patternLeftMobile}
          alt="pattern-intro-left-mobile"
        />

        <img
          className="hidden lg:block -mb-[900px]"
          src={patternLeftDesktop}
          alt="pattern-left-desktop"
        />

        <div className="lg:-ml-[100px]">
          <div className="hidden lg:block w-[30%] ml-5 my-[60px] h-[1px] bg-Very-Light-Gray"></div>

          <h1 className="text-5xl lg:w-[90%] lg:ml-5 lg:-mt-0 lg:text-left text-center -mt-14 text-Very-Light-Gray font-DM-Serif-Display">
            Humanizing your insurance.
          </h1>
          <p className="w-[90%] lg:text-left lg:ml-5 mt-5 m-auto text-center font-Karla text-Very-Light-Gray">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <a
            className="w-max px-7 py-2 lg:hover:bg-Very-Light-Gray lg:hover:text-Dark-Violet hover:scale-[1.1] hover:translate-y-1 transition-all border-2 mt-5 block m-auto lg:ml-5 uppercase font-Karla tracking-[2px] text-Very-Light-Gray"
            href="#"
          >
            View plans
          </a>
        </div>

        <img
          className="absolute lg:hidden -bottom-[180px] right-0"
          src={patternRightMobile}
          alt="pattern-intro-right-mobile"
        />

        <img
          className="hidden lg:block translate-y-[210px] lg:mr-[100px] lg:w-[50%] w-full"
          src={imageIntroDesktop}
          alt="image-intro-desktop"
        />

        <img
          className="lg:w-[35%] hidden top-0 right-0 z-50 lg:block absolute"
          src={patternRightDesktop}
          alt="pattern-right-desktop"
        />
      </div>

      <div className="lg:hidden w-[40%] m-auto h-[1px] mt-36 rounded-full bg-Dark-Grayish-Violet"></div>
      <div className="w-[85%] m-auto">
        <div className="hidden lg:block w-[10%] h-[1px] mt-[300px] mb-[50px] rounded-full bg-Dark-Grayish-Violet opacity-30"></div>
      </div>

      <p className="lg:text-left lg:w-[85%] lg:m-auto font-DM-Serif-Display mt-10 text-6xl text-center text-Very-Dark-Violet">
        We’re different
      </p>

      <div className="lg:flex lg:w-[85%] lg:m-auto justify-center items-center">
        <Section
          image={iconSnappyProcess}
          title={"Snappy Process"}
          paragraph={`Our application process can be completed in minutes, not hours. Don’t
        get stuck filling in tedious forms.`}
          mt={"mt-24"}
          animate={"animation-delay-0"}
        />

        <Section
          image={iconAffordablePrices}
          title={"Affordable Prices"}
          paragraph={`We don’t want you worrying about high
        monthly costs. Our prices may be low, but we still offer the best coverage
        possible.`}
          mt={"mt-16"}
          animate={"animation-delay-150"}
        />

        <Section
          image={iconPeopleFirst}
          title={"People First"}
          paragraph={`Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.`}
          mt={"mt-16"}
          animate={"animation-delay-300"}
        />
      </div>

      <div className="lg:flex lg:w-[85%] justify-between items-center relative z-20 mt-20 px-7 py-20 w-[90%] m-auto h-max bg-Dark-Violet">
        <img
          className="md:hidden absolute -z-40 top-0 right-0"
          src={patternHowWeWorkMobile}
          alt="pattern-how-we-work-mobile"
        />
        <p className="lg:w-[50%] lg:text-left font-DM-Serif-Display z-30 text-Very-Light-Gray text-5xl text-center">
          Find out more about how we work
        </p>
        <a
          className="w-max h-max lg:hover:bg-Very-Light-Gray block lg:hover:text-Dark-Violet lg:mt-0 lg:mr-10 lg:m-0 mt-10 px-7 py-2 hover:scale-[1.1] hover:translate-y-1 m-auto transition-all border-2 uppercase font-Karla tracking-[2px] text-Very-Light-Gray"
          href="#"
        >
          How we work
        </a>
        <img
          className="hidden md:block -z-[100] absolute top-0 right-0 h-full"
          src={patternHowWeWorkDesktop}
          alt="pattern-how-we-wrok-desktop"
        />
      </div>

      <div className="mt-[250px] relative">
        <img
          className="lg:hidden w-full -top-[120px] absolute"
          src={patternFooterMobile}
          alt="pattern-footer-mobile"
        />

        <img
          className="hidden lg:block absolute"
          src={patternFooterDesktop}
          alt="pattern-footer-desktop"
        />

        <div className="lg:flex lg:w-[85%] relative lg:m-auto items-center justify-between">
          <img className="lg:m-0 m-auto cursor-pointer" src={logo} alt="logo" />
          <div className="flex gap-4 mt-8 justify-center items-center">
            <svg
              className="fill-Dark-Grayish-Violet hover:fill-Very-Dark-Violet transition-all cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
            <svg
              className="fill-Dark-Grayish-Violet hover:fill-Very-Dark-Violet transition-all cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
            >
              <path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" />
            </svg>
            <svg
              className="fill-Dark-Grayish-Violet hover:fill-Very-Dark-Violet transition-all cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
            <svg
              className="fill-Dark-Grayish-Violet hover:fill-Very-Dark-Violet transition-all cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </div>
        </div>

        <div className="lg:w-[85%] w-[90%] mt-10 mb-10 m-auto h-[1px] opacity-30 bg-Dark-Grayish-Violet"></div>

        <FooterSection />
      </div>
    </div>
  );
};

export default App;
