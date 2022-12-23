import React from "react";
import styled from "styled-components";
import logo from "../assets/final-logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";

const Nav = () => {
  const data = useProductsContext();
  return (
    <NavContainer>
      <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>

        <div className="align-btn">
          <CartButtons></CartButtons>
          <button
            className="nav-toggle"
            type="button"
            onClick={data.openSidebar}
          >
            <FaBars></FaBars>
          </button>
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-header {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 240px;
      margin-left: -15px;
      margin-top: 15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .align-btn {
    display: flex;
    gap: 2rem;
    .cart-btn-wrapper {
      width: auto;
    }
  }
  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-header {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;

      img {
        width: 300px;
        margin-left: -15px;
        /* margin-top: 15px; */
      }
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
  }
`;

export default Nav;
