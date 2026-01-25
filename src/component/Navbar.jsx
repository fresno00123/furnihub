import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
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
import { Link, NavLink, useNavigate } from 'react-router';
import { useSearch } from '../context/SearchContext';
import { products } from '../Data/products';

function Navbar() {
  const { setQuery } = useSearch();
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { t, i18n } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  const exactMatch = products.find(p => p.name === value);
  if (exactMatch) {
    setQuery(exactMatch.name); // or save entire product if needed
    navigate("/search");
    setSuggestions([]);
  }
};

  return (
    <>
      {/* ================= TOP NAV ================= */}
      <div className="bg-[#272343] h-[45px] flex justify-center px-4">
        <div className="w-full max-w-7xl flex justify-between items-center">
          <p className="flex items-center gap-2 text-sm text-white">
            <Check size={16} />
            {t("Free on all orders over $50")}
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
              className="w-full bg-white rounded-lg pl-4 pr-10 h-[44px]"
              value={searchTerm}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
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
  <ul className='absolute top-full left-0 w-full bg-white shadow-md rounded-md z-50'>
    {suggestions.map((item) => (
      <li 
        key={item.id}
        className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
        onClick={() => handleSearch(item.name)}
      >
        {item.name}  {/* <-- show the actual product name */}
      </li>
    ))}
  </ul>
)}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM NAV ================= */}
      <div className="bg-white border-b relative">
        <div className="max-w-7xl mx-auto h-[70px] px-4 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-4">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn flex gap-2 capitalize">
                <Menu size={18} />
                {t("allCategories")}
              </div>
              <ul className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-44 z-10">
                <NavLink to="/chair">Chair</NavLink>
                <NavLink to="/table">Table</NavLink>
                <NavLink to="/sofa">Sofa</NavLink>
                <NavLink to="/bed">Bed</NavLink>
                <NavLink to="/light">Light</NavLink>
              </ul>
            </div>

            <nav className="hidden lg:flex gap-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="/product">Product</NavLink>
            </nav>
          </div>

          {/* Right */}
          <p className="hidden sm:block text-sm text-[#636270]">
            Contact: <a href="tel:+2348141301153" className='text-[#272343]'>08141301153</a>
          </p>

          {/* Mobile menu */}
          <button
            className="lg:hidden btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-[70px] left-0 w-full bg-white shadow-md z-50">
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