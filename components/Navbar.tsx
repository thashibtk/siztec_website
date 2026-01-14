"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  // Helper to check if link is active
  const isActive = (path: string) => pathname === path;
  
  // Mobile menu toggle state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // State for Services submenu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false); // Reset submenu when closing main menu
  };
  
  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setServicesOpen(!servicesOpen);
  };

  return (
    <div className="header-area header-1" id="header-area">
      <div className="container-fluid">
        <div className="header-wrap pt-25">
          <div className="main-header d-none d-lg-block">
            <div className="row">
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <Link href="/">
                    <img alt="Logo" src="/images/logo/logo.png" style={{ width: '100px', marginTop: '1rem' }} />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="main-menu text-center pt-15">
                  <nav>
                    <ul>
                      <li>
                        <Link className={isActive('/') ? "active" : ""} href="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className={isActive('/about_us') ? "active" : ""} href="/about_us">About</Link>
                      </li>
                      <li>
                        <Link className={`dropdown ${isActive('/services') ? "active" : ""}`} href="/services">
                          Services
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/services#manpower-supply">Manpower Supply</Link>
                          </li>
                          <li>
                            <Link href="/services#technical-outsourcing">Technical Outsourcing</Link>
                          </li>
                          <li>
                            <Link href="/services#project-staffing">Project Staffing</Link>
                          </li>
                          <li>
                            <Link href="/services#shutdown-work">Shutdown Work</Link>
                          </li>
                          <li>
                            <Link href="/services#permanent-recruitment">Permanent Recruitment</Link>
                          </li>
                          <li>
                            <Link href="/services#workforce-management">Workforce Management</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link className={isActive('/contact_us') ? "active" : ""} href="/contact_us">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3">
                <div className="talk-btn text-end position-relative">
                  <Link className="cta-btn" href="/contact_us">
                    Let's chat <img alt="cta" className="blak-icon" src="/images/icons/cta.svg" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-header position-relative d-lg-none">
            <div className="row">
              <div className="col-xl-12 pb-3">
                <div className="logo d-inline-block">
                  <Link href="/">
                    <img alt="Logo" src="/images/logo/logo.png" style={{ width: '100px', marginTop: '1rem' }} />
                  </Link>
                </div>
                <div 
                  id="menu-bar" 
                  className="menu-bar d-lg-none position-absolute"
                  onClick={toggleMobileMenu}
                >
                  <div className="menu-burger position-relative"></div>
                </div>
                <div className={`mobile-menu pl-30 ${mobileMenuOpen ? 'menu-open' : ''}`}>
                  <div 
                    id="close-button" 
                    className="close-button"
                    onClick={closeMobileMenu}
                  >
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="main-menu pt-90 pl-30">
                    <nav>
                      <ul>
                        <li>
                          <Link className={isActive('/') ? "active" : ""} href="/" onClick={closeMobileMenu}>
                            Home
                          </Link>
                        </li>
                        
                        <li>
                          <Link className={isActive('/about_us') ? "active" : ""} href="/about_us" onClick={closeMobileMenu}>About</Link>
                        </li>

                        <li>
                          <div className="d-flex justify-content-between align-items-center">
                              <Link 
                                className={isActive('/services') ? "active" : ""} 
                                href="/services" 
                                onClick={closeMobileMenu}
                              >
                                Services
                              </Link>
                              <span 
                                onClick={toggleServices} 
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px 15px',
                                    fontSize: '20px',
                                    color: servicesOpen ? 'var(--turq-light)' : '#ffffff',
                                    zIndex: 10,
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                              >
                                <i className={`fas fa-${servicesOpen ? 'minus' : 'plus'}`}></i>
                              </span>
                          </div>
                          
                          <ul className="sub-menu" style={{ display: servicesOpen ? 'block' : 'none' }}>
                            <li>
                              <Link href="/services#manpower-supply" onClick={closeMobileMenu}>Manpower Supply</Link>
                            </li>
                            <li>
                              <Link href="/services#technical-outsourcing" onClick={closeMobileMenu}>Technical Outsourcing</Link>
                            </li>
                            <li>
                              <Link href="/services#project-staffing" onClick={closeMobileMenu}>Project Staffing</Link>
                            </li>
                            <li>
                              <Link href="/services#shutdown-work" onClick={closeMobileMenu}>Shutdown Work</Link>
                            </li>
                            <li>
                              <Link href="/services#permanent-recruitment" onClick={closeMobileMenu}>Permanent Recruitment</Link>
                            </li>
                            <li>
                              <Link href="/services#workforce-management" onClick={closeMobileMenu}>Workforce Management</Link>
                            </li>
                          </ul>
                        </li>
                        
                        <li>
                          <Link className={isActive('/contact_us') ? "active" : ""} href="/contact_us" onClick={closeMobileMenu}>Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="talk-btn position-relative pt-50">
                    <a href="tel:+97143260688" className="cta-btn">
                      Let's Chat <img src="/images/icons/cta.svg" alt="cta" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
