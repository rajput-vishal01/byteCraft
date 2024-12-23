import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-4 bg-[#777777] shadow-lg">
      {/* Container for consistent spacing */}
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="mr-6">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          {/* Navigation Items */}
          <ul className="flex space-x-4">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="px-4 py-2 text-sm font-medium text-[#1C1C1C] bg-[#FAFAFF] rounded-full transition hover:bg-[#ECEBE4] hover:text-[#1C1C1C]">
                      {item.name}
                    </button>
                  </li>
                )
            )}
       {/* only show logout btn if user is logged in */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
