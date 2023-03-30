import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Header = (props: Props) => {
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex justify-content-between">
        <div id="logo">
          <Link href="/">
            <Image
              src={
                'https://hicharge.in/admin/wp-content/uploads/2023/03/final-hi-charze.png'
              }
              width={201}
              height={51}
              alt="logo"
            />
          </Link>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto " href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li>

            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
