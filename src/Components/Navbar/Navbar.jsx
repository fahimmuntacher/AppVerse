import { Link, NavLink } from "react-router";
import brandLogo from "../../assets/logo (1).png";
import { AppleIcon, Download, Github, HomeIcon, Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name:  "Home",path: "/home" },
    { name: "Apps", path: "/apps" },
    { name: "My Installation", path: "/installation" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand Logo */}
        <Link to="/home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
          <div className="flex items-center gap-2">
            <img className="w-10" src={brandLogo} alt="Logo" />
            <h1 className="sm:block hidden">AppVerse</h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-slate-700 font-medium menuUl">
          {navItems.map((nav) => (
            <li key={nav.path} className="menuli">
              <NavLink to={nav.path} className={({ isActive }) => isActive ? "active menuli" : "menuli"}>
                  {nav.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="hidden lg:block bg-gradient-to-r from-blue-600 to-violet-600 text-white px-5 py-2 rounded-xl hover:opacity-90 transition">
         <div className="flex items-center gap-1 cursor-pointer">
                <Github></Github> Contribute
            </div>
        </button>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-slate-700 hover:text-blue-600 transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col items-center gap-4 py-4 text-slate-700 font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "active menuli" : "menuli"}>
                {item.name}
              </NavLink>
            </li>
          ))}
          <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-5 py-2 rounded-xl hover:opacity-90 transition">
            <div className="flex items-center">
                <Github></Github> Contribute
            </div>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
