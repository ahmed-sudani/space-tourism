import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between gap-[60px] m-6 items-center text-white md:mt-10 md:mr-0 md:mb-0 md:ml-10">
      <img src="/assets/shared/logo.svg" width="48" height="48" alt="" />
      <hr className="w-[473px] hidden -mr-[90px] xl:block z-20" />
      <nav className="flex-grow-0 xl:flex-grow">
        <input className="peer" hidden type="checkbox" name="menu" id="menu" />

        <label
          className="md:hidden cursor-pointer z-30 peer-checked:hidden"
          htmlFor="menu"
        >
          <img
            className="iconHamburger"
            src="/assets/shared/icon-hamburger.svg"
            alt=""
          />
        </label>

        <ul className="hidden peer-checked:flex z-0 pl-8 md:px-12 flex-col gap-8 absolute top-0 bottom-0 right-0 w-64 pt-9 md:flex md:static md:flex-row md:gap-12 md:w-full md:py-0 xl:px-[123px] list-none md:bg-opacity-50 bg-gray-800 uppercase font-sans">
          <label
            className="cursor-pointer md:hidden self-end pr-7 pb-8"
            htmlFor="menu"
          >
            <img
              className="iconClose"
              src="/assets/shared/icon-close.svg"
              alt=""
            />
          </label>
          <li>
            <Link
              className={`block py-[5px] text-base tracking-[2.7px] md:py-[38px] md:px-0 border-4 border-transparent hover:border-r-white md:hover:border-transparent md:hover:border-b-white ${
                window.location.pathname === "/" &&
                "md:border-b-white max-md:border-r-white"
              }`}
              to="/"
            >
              <strong>00 </strong>
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`block py-[5px] text-base tracking-[2.7px] md:py-[38px] md:px-0 border-4 border-transparent hover:border-r-white md:hover:border-transparent md:hover:border-b-white ${
                window.location.pathname === "/destination" &&
                "md:border-b-white max-md:border-r-white"
              }`}
              to="/destination"
            >
              <strong>01 </strong>
              Destination
            </Link>
          </li>
          <li>
            <Link
              className={`block py-[5px] text-base tracking-[2.7px] md:py-[38px] md:px-0 border-4 border-transparent hover:border-r-white md:hover:border-transparent md:hover:border-b-white ${
                window.location.pathname === "/crew" &&
                "md:border-b-white max-md:border-r-white"
              }`}
              to="/crew"
            >
              <strong>02 </strong>
              Crew
            </Link>
          </li>
          <li>
            <Link
              className={`block py-[5px] text-base tracking-[2.7px] md:py-[38px] md:px-0 border-4 border-transparent hover:border-r-white md:hover:border-transparent md:hover:border-b-white ${
                window.location.pathname === "/technology" &&
                "md:border-b-white max-md:border-r-white"
              }`}
              to="/technology"
            >
              <strong>03 </strong>
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
