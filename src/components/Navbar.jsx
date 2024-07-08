import { links } from "../data";
import { useAppContext } from "../AppContext";

const Navbar = () => {
  const { toggleMobileMenu, toggleTheme, showMobileMenu } = useAppContext();

  return (
    <div className="navbar bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <h2 className="hidden lg:flex btn btn-accent items-center text-3xl font-bold text-secondary-content">
            Web <span className="text-accent-content">Dev</span>
          </h2>
          {/*DROPDOWN*/}
          <div className="">
            {/* Hamburger Icon */}
            <button
              onClick={toggleMobileMenu}
              className={`block lg:hidden focus:outline-none relative transition-all duration-300 w-6 h-6 ${
                showMobileMenu && "rotate-90 translate-y-0"
              }`}
            >
              <span
                className={`absolute top-0 right-0 w-6 h-0.5 bg-base-content rotate-0 transition-all duration-500 ${
                  showMobileMenu && "rotate-45 translate-y-0"
                }`}
              ></span>
              <span
                className={`absolute top-0 right-0 w-6 h-0.5 bg-base-content rotate-0 transition-all duration-500 translate-y-2 ${
                  showMobileMenu && "hidden"
                }`}
              ></span>
              <span
                className={`absolute top-0 right-0 w-6 h-0.5 bg-base-content transition-all duration-500 translate-y-4 ${
                  showMobileMenu && "-rotate-45 !translate-y-0"
                }`}
              ></span>
            </button>

            {showMobileMenu && (
              <ul className="absolute flex-col items-center self-end py-8 mt-8 px-8 space-y-6 font-bold sm:w-auto bg-accent sm:self-center left-1 right-6 drop-shadow-md ">
                {links.map((link) => {
                  const { id, href, text } = link;
                  return (
                    <li key={id}>
                      <a
                        href={href}
                        className="capitalize text-lg tracking-wide text-accent-content hover:text-emerald-600 duration-300"
                      >
                        {text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
            {/**/}
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <a
                    href={href}
                    className="capitalize text-lg text-base-content tracking-wide hover:text-accent duration-300"
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="navbar-end">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
              onChange={toggleTheme}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
