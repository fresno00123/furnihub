import { useTranslation } from 'react-i18next';
import React, { useState, useRef,useEffect} from 'react';
import {
  Armchair,
  Check,
  Info,
  Search,
  Heart,
  Menu
} from 'lucide-react';
import Authlogin from './Authlogin';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../context/CartContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import { products } from '../Data/products';
import { use } from 'react';

function Navbar() {
  const[open,setOpen]=useState(false);
  const menuRef=useRef(null);
  const { setQuery } = useSearch();
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { t, i18n } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  /* ================= SEARCH HANDLERS ================= */

  // When typing
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = products
      .filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
      .slice(0, 5);

    setSuggestions(filtered);
  };

  // When searching (Enter / click / suggestion)
  const handleSearch = (value) => {
    if (!value.trim()) return;

    setQuery(value);
    navigate("/search");
    setSuggestions([]);
  };

  return (
    <>
      {/* ================= TOP NAV ================= */}
      <div className="bg-[#272343] h-11.25 flex justify-center px-4">
        <div className="w-full max-w-7xl flex justify-between items-center">
          <p className="flex items-center gap-2 text-sm text-white">
            <Check size={16} />
            {t("Freeshipping")}
          </p>

          <div className="hidden sm:flex items-center gap-4">
            <select
              className="bg-transparent text-white text-sm"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>

            <Link className="text-sm text-white" to="/faqs">{t("faqs")}</Link>

            <Link className="flex items-center gap-1 text-sm text-white" to="/support">
              <Info size={16} />
              {t("support")}
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MIDDLE NAV ================= */}
      <div className="bg-[#f0f2f3] px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-2xl font-medium">
              <Armchair size={28} color="#029fae" />
              {t("FurniHub")}
            </Link>

            <div className="flex items-center gap-4">
              <Link to="/cart" className="relative">
                <IoCartOutline className="h-7 w-7" />
                {cartCount > 0 && (
                  <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white text-xs">
                    {cartCount}
                  </span>
                )}
              </Link>

              <button className="btn btn-sm">
                <Heart size={18} />
              </button>

              <Authlogin />
            </div>
          </div>

          {/* ================= SEARCH ================= */}
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder={t("search")}
              className="w-full bg-white rounded-lg pl-4 pr-10 h-11"
              value={searchTerm}
              onChange={handleChange}
              onKeyDown={(e) => {if (e.key === "Enter") {
                  handleSearch(searchTerm);
                }
              }}
            />
<Search
              size={20}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
              onClick={() => handleSearch(searchTerm)}
            />

            {/* ===== Suggestions ===== */}
            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white shadow-md rounded-md z-50">
                {suggestions.map((item) => (
                  <li
                    key={item.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSearch(item.name)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM NAV ================= */}
      <div className="bg-white border-b relative">
        <div className="max-w-7xl mx-auto h-17.5 px-4 flex items-center justify-between">

          {/* Left */}
          <div className="relative" ref={menuRef}>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 border text-white bg-[#029fae] rounded hover:bg-gray-400"
      >
        <Menu size={18} color="white"/>
        All Categories
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="absolute left-0 mt-2 w-44 bg-white border rounded shadow flex flex-col">
          <li>
            <NavLink className="block px-4 py-2 hover:bg-gray-100" to="/chair">
              Chair
            </NavLink>
          </li>
          <li>
            <NavLink className="block px-4 py-2 hover:bg-gray-100" to="/table">
              Table
            </NavLink>
          </li>
          <li>
            <NavLink className="block px-4 py-2 hover:bg-gray-100" to="/sofa">
              Sofa
            </NavLink>
          </li>
          <li>
            <NavLink className="block px-4 py-2 hover:bg-gray-100" to="/bed">
              Bed
            </NavLink>
          </li>
          <li>
            <NavLink className="block px-4 py-2 hover:bg-gray-100" to="/light">
              Light
            </NavLink>
          </li>
        </ul>
      )}
    </div>


          {/* Right */}
          <p className="hidden sm:block text-sm">
            Contact: <span className="text-[#272343]">08141301153</span>
          </p>
        {/* Center - Desktop Nav */}
<nav className="hidden lg:flex items-center gap-6">
  <NavLink
    to="/"
    className={({ isActive }) =>
   `text-sm font-medium ${isActive ? "text-[#029fae]" : "hover:text-[#029fae]"}`}
  >
    Home
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
   `text-sm font-medium ${isActive ? "text-[#029fae]" : "hover:text-[#029fae]"}`}
  >
    About
  </NavLink>

  <NavLink
    to="/shop"
     className={({ isActive }) =>
   `text-sm font-medium ${isActive ? "text-[#029fae]" : "hover:text-[#029fae]"}`}
  >
    Shop
  </NavLink>

  <NavLink
    to="/product"
   className={({ isActive }) =>
   `: text-sm font-medium ${
      isActive ? "text-[#029fae]" : "hover:text-[#029fae]"
    }`
  }
  >
    Product
  </NavLink>
</nav>
          {/* Mobile menu */}
          <button
            className="lg:hidden btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-17.5 left-0 w-full bg-white shadow-md z-50">
            <nav className="flex flex-col gap-4 p-4">
              <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
              <NavLink to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</NavLink>
              <NavLink to="/product" onClick={() => setMobileMenuOpen(false)}>Product</NavLink>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;