import React from "react";
import Logo from '../../assets/foterlogo.png';

const Footer = () => {
  return (
    <footer className="bg-zinc-50 text-center text-surface/75 dark:bg-[#800080] dark:text-white/75 lg:text-left ">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* TW Elements section */}
          <div>
            <img src={Logo} className="w-40 sm:ml-0  ml-[90px]"  alt="Logo" />
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Holistic Care Services
            </h6>
            <p>
              The greatest legacy one can pass on to one’s children and grandchildren is not money or other material things accumulated in one’s life, but rather a legacy of character and faith.
            </p>
          </div>

          {/* Services section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Services
            </h6>
            <p className="mb-4">
            <a className="p-2 px-4 group" href="#">
        Personal Care
        <div class="bg-amber-500 h-[2px] w-0 group-hover:w-[200px] transition-all duration-500"></div>
    </a>
            </p>
            <p className="mb-4">
            <a className="p-2 px-4 group" href="#">
        Medical Care
        <div class="bg-amber-500 h-[2px] w-0 group-hover:w-[200px] transition-all duration-500"></div>
    </a>
            </p>
            <p className="mb-4">
            <a className="p-2 px-4 group" href="#">
        CompanienShip
        <div class="bg-amber-500 h-[1px] w-0 group-hover:w-[200px] transition-all duration-500"></div>
    </a>
            </p>
            <p>
            <a className="p-2 px-4 group" href="#">
        Household Assistance
        <div class="bg-amber-500 h-[2px] w-0 group-hover:w-[200px] transition-all duration-500"></div>
    </a>
            </p>
          </div>

          {/* Useful links section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful Links
            </h6>
            <a className="p-2 px-4 group" href="#">
        Privacy Policy
        <div class="bg-amber-500 h-[2px] w-0 group-hover:w-[200px] transition-all duration-500"></div>
    </a>
       <p className="mb-4">
       <a className="p-2 px-4 group" href="#">
        Leagal Notice
        <div class="bg-amber-500 h-[2px] w-0 group-hover:w-[200px] transition-all duration-500"></div>
    </a>
            </p>
          </div>

          {/* Contact section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159v6.198a1.875 1.875 0 01-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625A1.875 1.875 0 013.75 19.125v-6.198L12 5.432z" />
                </svg>
              </span>
              Unit A4B 25 Good LAS ROAD<br />
              LIVERPOOL L24 9HJ, UK
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
              office@holistic-careservices.co.uk<br />
              recruitment@holistic-careservices.co.uk
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </span>
              0151 665 0520
            </p>

            {/* Social network icons */}
            <div className="flex justify-center mt-10">
              <a href="#!" className="me-6 p-2 hover:bg-[#800080] hover:rounded-full hover:border-purple-500 hover:border-solid hover:border-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512" className="h-4 w-4">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </a>
              <a href="#!" className="me-6 p-2 hover:bg-[#800080] hover:rounded-full hover:border-purple-500 hover:border-solid hover:border-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="h-4 w-4">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
              <a href="#!" className="me-6 p-2 hover:bg-[#800080] hover:rounded-full hover:border-purple-500 hover:border-solid hover:border-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="h-4 w-4">
                  <path d="M448 48H64A64 64 0 0 0 0 112v288a64 64 0 0 0 64 64h174.9l-6.7-92.3l-13-1.5c-54.8 0-70.4-24.6-84.3-44.8c-9-12.7-17.2-24.5-33.8-30.4c-3.5-1.3-6.2-5.3-6.1-9.3c.3-6.6 2.5-12.4 6.1-18.4c2.2-3.6 6.4-5.2 10.4-6.5c4.1-1.4 8.5-2.8 12.3-5c4.3-2.5 7.6-4.4 10.8-7.7c8-8.1 12.1-17.3 17.4-30.1l3-7.1c2.6-6.1 5.3-12.4 8.8-17.8c7.2-10.8 19.3-16.7 35.4-16.7c8.5 0 16.1 4.8 21.7 8.9c7.8 5.8 13.6 15.2 17.6 22.8c8.3 15.9 13.5 24.6 26.7 34.7c11.2 8.5 22.4 13.5 34.6 13.5c16.3 0 27.2-2.7 38.6-10.2c11.7-7.7 18.4-18.8 23.7-30.4c4.5-9.9 8.8-20 12.3-30.3c4.8-13.9 8.7-23.7 17.4-35.4c7.8-10.4 19.6-15.4 33.2-15.4c9.1 0 17.3 3.8 23.5 10.2c4.7 4.9 6.8 11.6 7.5 19.7c1.1 11.9-3.4 22.4-12.4 29.5c-9.1 7.2-22.3 7.4-34.8 8.7c-5.7 .6-11.3 1.1-16.8 2.3c-5.2 1.1-10.4 2.5-15.2 4.6c-4.4 1.9-8.5 4.4-12.1 7.6c-8.8 7.8-12.2 18.1-12.7 28.6c-.4 8.2 2.4 14.6 8.6 20.2c5.5 4.9 12.6 7.3 19.4 8.5c13.8 2.5 24.3 4.3 35.3 8.6c17.1 6.6 28.4 17.1 39.5 28.8H448a64 64 0 0 0 64-64V112a64 64 0 0 0-64-64zm-48 16c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24z" />
                </svg>
              </a>
              <a href="#!" className="me-6 p-2 hover:bg-[#800080] hover:rounded-full hover:border-purple-500 hover:border-solid hover:border-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512" className="h-4 w-4">
                  <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248c137 0 248-111.1 248-248S385 8 248 8zm124.3 147.3c.4 3.5 .4 7.2 .4 10.7c0 109.3-83.2 235.1-235.1 235.1c-46.8 0-90.6-13.7-127.4-37.1c6.5 .8 12.9 1.2 19.6 1.2c38.9 0 74.7-13.3 103.1-35.7c-36.2-.7-66.8-24.5-77.3-57.2c12.7 1.9 24.2 1.9 37.3-1.5c-37.9-7.7-66.4-40.8-66.4-81v-1c11.1 6.2 23.7 9.8 37.4 10.3c-22.3-14.8-36.9-40.4-36.9-69.3c0-15.4 4.2-29.9 11.6-42.4c41.8 51.3 104.3 84.7 174.5 88.2c-1.5-6.2-2.2-12.7-2.2-19.4c0-47.1 38.2-85.3 85.3-85.3c24.5 0 46.6 10.3 62.1 26.8c19.4-3.7 37.9-10.8 54.5-20.6c-6.4 19.8-19.8 36.4-37.3 47c17.3-1.8 34.3-6.6 49.8-13.4c-11.5 17.2-26.2 32.4-43 44.7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-100 p-6 text-center dark:bg-[#800080] dark:text-white/75">
        <span>© 2023 Copyright:</span>
        <a className="font-semibold text-neutral-600 dark:text-white/75" href="#!"> Holistic Care Services</a>
      </div>
    </footer>
  );
};

export default Footer;
