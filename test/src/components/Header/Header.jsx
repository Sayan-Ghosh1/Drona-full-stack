import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import iconModified from "../../images/iconModified.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-gray-900 text-white p-4 md:p-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and DRONA */}
        <div className="flex items-center">
          <img src={iconModified} alt="Logo" className="h-6 w-6 mr-2" />
          <Link to="/" className="text-xl font-bold">
            DRONA
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/workouts"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              Workouts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nutrition"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              Nutrition
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/health-tracking"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              Health Tracking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/yoga"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              Yoga
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rehab-excersice"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              Rehab Excercise
            </NavLink>
          </li>
        </ul>

        {/* Desktop Sign In Button */}
        <button className="hidden md:block bg-yellow-400 text-gray-800 px-4 py-2 rounded font-bold hover:bg-yellow-600 cursor-pointer">
          Sign In
        </button>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/workouts"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }
              >
                Workouts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nutrition"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }
              >
                Nutrition
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/health-tracking"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }
              >
                Health Tracking
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/yoga"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }
              >
                Yoga
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rehab-excersice"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }
              >
                Rehab Excercise
              </NavLink>
            </li>
            <li>
              <button
                className="bg-yellow-400 text-gray-800 px-4 py-2 rounded font-bold hover:bg-yellow-600 cursor-pointer w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
