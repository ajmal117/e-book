import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBlog, FaBarsStaggered } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // toggle button
  const togaleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handScroll = () => {
      if (window.screenY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handScroll);

    return () => {
      window.addEventListener("scroll", handScroll);
    };
  }, []);

  //navItems

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell  Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <>
      <header>
        <nav>
          <div>
            {/* insert logo */}
            <Link
              to="/"
              className="text-2 font-bold text-blue-700 item-center gap-2"
            >
              <FaBlog className="inline-block" />
              Books
            </Link>
            {/* nav item for large device*/}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                >
                  {link}
                </Link>
              ))}
            </ul>
            <div className="space-x-12 hidden lg:flex items-center">
              {/* button for larger devices */}
              <button>
                <FaBarsStaggered className="w-5 hover:text-blue-700" />
              </button>
            </div>

            {/* menu button for mobile devices */}
            <div></div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
