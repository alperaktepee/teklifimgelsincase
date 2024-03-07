"use client";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";
import { IoHomeOutline } from "react-icons/io5";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();
  const id = localStorage.getItem("session_id");

  return (
    <nav className="navbar">
      <Link href="/" className="navbarBrand">
        Facts
      </Link>
      <ul className="navbarLinks">
        <li>
          <Link href="/" className="navbarLink">
            <IoHomeOutline />
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link href="/saved-facts" className="navbarLink">
            <SlBasket />
            <span>Facts</span>
          </Link>
        </li>
        {!id ? (
          <li>
            <Link href="/sign-in" className="navbarLink">
              Sign In
            </Link>
          </li>
        ) : (
          <li onClick={logout}>
            <Link href="/" className="navbarLink">
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
