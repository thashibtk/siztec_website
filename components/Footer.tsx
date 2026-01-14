"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <footer className="footer-area pt-100 position-relative">
      <div className="container">
        <div className="footer-top pb-40">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="footer-logo footer-widget">
                <div className="logo">
                  <Link href="/">
                    <img alt="Siztec Technical Services" src="/images/logo/logo.png" style={{ width: '120px', marginTop: '1rem' }} />
                  </Link>
                </div>
                <p className="mt-15">
                  Leading manpower solutions provider in UAE, delivering qualified workforce across Oil & Gas, Construction, Manufacturing, and Industrial sectors.
                </p>
                <div className="social-widgt mt-20">
                  <ul>
                    <li><a href="https://facebook.com/siztec" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://linkedin.com/company/siztec" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://twitter.com/siztec" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://instagram.com/siztec" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-30">
              <div className="footer-widget widget-menu">
                <h5>Quick Links</h5>
                <ul>
                  <li><Link className={isActive('/') ? "active" : ""} href="/">Home</Link></li>
                  <li><Link className={isActive('/about_us') ? "active" : ""} href="/about_us">About Us</Link></li>
                  <li><Link className={isActive('/services') ? "active" : ""} href="/services">Services</Link></li>
                  <li><Link href="/#industries">Industries</Link></li>
                  <li><Link className={isActive('/contact_us') ? "active" : ""} href="/contact_us">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="footer-widget widget-menu">
                <h5>Our Services</h5>
                <ul>
                  <li><Link href="/services#manpower-supply">Manpower Supply</Link></li>
                  <li><Link href="/services#technical-outsourcing">Technical Outsourcing</Link></li>
                  <li><Link href="/services#project-staffing">Project Staffing</Link></li>
                  <li><Link href="/services#shutdown-work">Shutdown Work</Link></li>
                  <li><Link href="/services#permanent-recruitment">Permanent Recruitment</Link></li>
                  <li><Link href="/services#workforce-management">Workforce Management</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="footer-widget widget-contact">
                <h5>Get In Touch</h5>
                <p className="mt-20">
                  Siztec Technical Services LLC<br />
                  Dubai, United Arab Emirates
                </p>
                <ul className="mt-20">
                  <li><a href="tel:+97143260688"><i className="fas fa-phone me-2"></i>+971 4326 0688</a></li>
                  <li><a href="mailto:info@siztec.com"><i className="fas fa-envelope me-2"></i>info@siztec.com</a></li>
                  <li><a href="mailto:sales@siztec.com"><i className="fas fa-envelope me-2"></i>sales@siztec.com</a></li>
                  <li><a href="https://wa.me/+971521164362" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp me-2"></i>WhatsApp Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="footer-middle pt-40 pb-40" style={{borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
          <div className="row">
            <div className="col-12">
              <h6 className="mb-3" style={{color: '#fff', fontSize: '14px', textTransform: 'uppercase'}}>Industries We Serve</h6>
              <div className="d-flex flex-wrap" style={{gap: '15px'}}>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>Oil & Gas</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>•</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>Construction</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>•</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>Petrochemical</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>•</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>Manufacturing</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>•</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>Marine Services</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>•</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>Infrastructure</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>•</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>Hospitality</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>•</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>Power & Utilities</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>•</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>Automotive</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>•</span>
                <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>Banking & Finance</span>
                
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom d-block text-center d-sm-flex justify-content-between pt-20 pb-20">
          <div className="copyright">
            <p>© {new Date().getFullYear()} Siztec Technical Services LLC. All Rights Reserved | <Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms-conditions">Terms & Conditions</Link></p>
          </div>
          <div className="certification">
            <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px'}}>
              <i className="fas fa-certificate me-2"></i>MOHRE Licensed & UAE Certified
            </p>
          </div>
        </div>
      </div>
      <div className="footer-ornament">
        <img src="/images/icons/footer-shape.png" alt="Footer Shape" />
      </div>
    </footer>
  );
};

export default Footer;