import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import Counter from "@/components/Counter";
import BrandCarousel from "@/components/BrandCarousel";


export default function Home() {
  return (
    <>
      {/* Hero Section Start */}
      <section className="hero-banner pt-160 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <ScrollAnimation>
                <div className="hero-content pt-110">
                  <h1 className="title mb-20">Your Trusted Workforce Solutions Partner in the UAE</h1>
                  <p className="sub-title">
                    Siztec Technical Services LLC provides specialized workforce and technical staffing solutions across Oil & Gas, Construction, Manufacturing, and Industrial sectors throughout the United Arab Emirates..
                  </p>
                  <div className="talk-btn mt-60">
                    <a href="tel:+97143260688" className="cta-btn mr-30">
                      Contact Us <img src="/images/icons/cta.svg" alt="cta" />
                    </a>
                    <Link href="/about_us"><span>Learn more about us</span></Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-5 d-none d-md-block">
              <ScrollAnimation>
                <div className="hero-img">
                  <img className="img-fluid" src="/images/media/main.webp" alt="Professional Workforce" />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section Ends */}

      {/* Brand Section Starts */}
      <div className="brand-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ScrollAnimation>
                <div className="text-center mb-4">
                  <h5 className="text-muted">Trusted by Leading Companies Across UAE</h5>
                </div>
<BrandCarousel />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
      {/* Brand Section Ends */}

      {/* About Us Section Starts */}
      <section className="about-us-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ScrollAnimation>
                <div className="about-us-img d-flex justify-content-center d-none d-lg-block">
                  <img alt="About Siztec" className="img-fluid" src="/images/media/about.webp" />
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-6">
              <ScrollAnimation>
                <div className="about-content mt-40">
                  <div className="content">
                    <h3 className="title">
                      Professional workfore Solutions for Every Industry
                    </h3>
                    <p className="pb-30 description">
                      Siztec Technical Services LLC specializes in providing qualified and skilled workforce across multiple sectors in the UAE. With our extensive network and industry expertise, we connect businesses with the right talent at the right time.
                    </p>
                    <p className="pb-50 description">
                      We are committed to delivering quality workforce services, ensuring timely deployment, and maintaining the highest standards of professionalism in every project we undertake.
                    </p>
                  </div>
                  <div className="review d-flex pt-30">
                    <div className="counter" id="customerCounter">
<Counter end={500} />
                      <span>+</span>
                      <p>Successful Placements</p>
                    </div>
                    <div className="rating">
                      <span>15+</span>
                      <p className="mt-2">Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section Ends */}

      {/* Industries Section Starts */}
      <section className="work-area pt-110 pb-115" id="industries">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ScrollAnimation>
                <div className="section-title mb-50">
                  <h2 className="title text-white">Industries We Serve</h2>
                  <p className="subtitle">
                    Specialized workforce solutions across diverse sectors
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <ScrollAnimation>
            <div className="row justify-content-center">
              <div className="col-6 col-md-4 five-col-grid mb-4">
                <div className="work-content text-center">
                  <div className="illustration d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-oil-well" style={{ fontSize: '30px', color: 'var(--blue-deep)' }}></i>
                  </div>
                  <h4 className="title" style={{fontSize: '16px'}}>Oil & Gas</h4>
                </div>
              </div>
              <div className="col-6 col-md-4 five-col-grid mb-4">
                <div className="work-content text-center">
                  <div className="illustration d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-flask" style={{ fontSize: '30px', color: 'var(--blue-deep)' }}></i>
                  </div>
                  <h4 className="title" style={{fontSize: '16px'}}>Petrochemical</h4>
                </div>
              </div>
              <div className="col-6 col-md-4 five-col-grid mb-4">
                <div className="work-content text-center">
                  <div className="illustration d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-helmet-safety" style={{ fontSize: '30px', color: 'var(--blue-deep)' }}></i>
                  </div>
                  <h4 className="title" style={{fontSize: '16px'}}>Construction</h4>
                </div>
              </div>
              <div className="col-6 col-md-4 five-col-grid mb-4">
                <div className="work-content text-center">
                  <div className="illustration d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-industry" style={{ fontSize: '30px', color: 'var(--blue-deep)' }}></i>
                  </div>
                  <h4 className="title" style={{fontSize: '16px'}}>Manufacturing</h4>
                </div>
              </div>
              <div className="col-6 col-md-4 five-col-grid mb-4">
                <div className="work-content text-center">
                  <div className="illustration d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-ship" style={{ fontSize: '30px', color: 'var(--blue-deep)' }}></i>
                  </div>
                  <h4 className="title" style={{fontSize: '16px'}}>Marine Services</h4>
                </div>
              </div>
              <div className="col-6 col-md-4 five-col-grid mb-4">
                <div className="work-content text-center">
                  <div className="illustration d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-road" style={{ fontSize: '30px', color: 'var(--blue-deep)' }}></i>
                  </div>
                  <h4 className="title" style={{fontSize: '16px'}}>Infrastructure</h4>
                </div>
              </div>
              <div className="col-6 col-md-4 five-col-grid mb-4">
                <div className="work-content text-center">
                  <div className="illustration d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-bolt" style={{ fontSize: '30px', color: 'var(--blue-deep)' }}></i>
                  </div>
                  <h4 className="title" style={{fontSize: '16px'}}>Power & Utilities</h4>
                </div>
              </div>
              <div className="col-6 col-md-4 five-col-grid mb-4">
                <div className="work-content text-center">
                  <div className="illustration d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-bell-concierge" style={{ fontSize: '30px', color: 'var(--blue-deep)' }}></i>
                  </div>
                  <h4 className="title" style={{fontSize: '16px'}}>Hospitality</h4>
                </div>
              </div>
              <div className="col-6 col-md-4 five-col-grid mb-4">
                <div className="work-content text-center">
                  <div className="illustration d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-car" style={{ fontSize: '30px', color: 'var(--blue-deep)' }}></i>
                  </div>
                  <h4 className="title" style={{fontSize: '16px'}}>Automotive</h4>
                </div>
              </div>
              <div className="col-6 col-md-4 five-col-grid mb-4">
                <div className="work-content text-center">
                  <div className="illustration d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-building-columns" style={{ fontSize: '30px', color: 'var(--blue-deep)' }}></i>
                  </div>
                  <h4 className="title" style={{fontSize: '16px'}}>Banking & Finance</h4>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      {/* Industries Section Ends */}

      {/* Service Section Starts */}
      <section className="services-area pt-110 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ScrollAnimation>
                <div className="section-title mb-60">
                  <h2 className="title">Our Services</h2>
                  <p className="subtitle">
                    Comprehensive workforce solutions tailored to your business needs
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 mb-4">
              <ScrollAnimation className="h-100">
                <div className="service-info h-100 d-block text-center">
                  <div className="value-icon">
                    <i className="fa-solid fa-users-gear"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Specialized workforce Supply</h4>
                    <p>Skilled and qualified workforce for technical, mechanical, electrical, and civil sectors.</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <ScrollAnimation className="h-100">
                <div className="service-info h-100 d-block text-center">
                  <div className="value-icon">
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Technical Outsourcing</h4>
                    <p>Complete technical team outsourcing solutions for projects of any scale and complexity.</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <ScrollAnimation className="h-100">
                <div className="service-info h-100 d-block text-center">
                  <div className="value-icon">
                    <i className="fa-solid fa-clipboard-user"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Project Staffing</h4>
                    <p>Dedicated project-based staffing with experienced professionals ready to deploy.</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <ScrollAnimation className="h-100">
                <div className="service-info h-100 d-block text-center">
                  <div className="value-icon">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Shutdown & Special Projects</h4>
                    <p>Specialized teams for plant shutdowns, turnarounds, and time-critical projects.</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <ScrollAnimation className="h-100">
                <div className="service-info h-100 d-block text-center">
                  <div className="value-icon">
                    <i className="fa-solid fa-user-check"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Permanent Recruitment</h4>
                    <p>End-to-end recruitment services to find the perfect permanent staff for your organization.</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <ScrollAnimation className="h-100">
                <div className="service-info h-100 d-block text-center">
                  <div className="value-icon">
                    <i className="fa-solid fa-list-check"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Workforce Management</h4>
                    <p>Comprehensive HR solutions including payroll, compliance, and employee management.</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Ends */}

      {/* Why Choose Us Section */}
      <section className="about-us-area pt-120 pb-120" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ScrollAnimation>
                <div className="section-title mb-60 text-center">
                  <h2 className="title">Why Choose Siztec?</h2>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <ScrollAnimation className="h-100">
                <div className="choose-card text-center">
                  <div className="icon">
                    <i className="fa-solid fa-ranking-star"></i>
                  </div>
                  <h4>Quality Assurance</h4>
                  <p>Pre-screened, qualified professionals meeting industry standards</p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <ScrollAnimation className="h-100">
                <div className="choose-card text-center">
                  <div className="icon">
                    <i className="fa-solid fa-clock-rotate-left"></i>
                  </div>
                  <h4>Timely Delivery</h4>
                  <p>Quick mobilization and deployment of workforce when you need them</p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <ScrollAnimation className="h-100">
                <div className="choose-card text-center">
                  <div className="icon">
                    <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <h4>Industry Expertise</h4>
                  <p>Deep understanding of UAE market and regulatory requirements</p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <ScrollAnimation className="h-100">
                <div className="choose-card text-center">
                  <div className="icon">
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <h4>24/7 Support</h4>
                  <p>Dedicated account management and round-the-clock assistance</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section Starts */}
      <section className="testimonial pt-110 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ScrollAnimation>
                <div className="section-title mb-60">
                  <h2 className="title">Client Testimonials</h2>
                  <p className="subtitle">
                    What our partners say about our services
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <ScrollAnimation className="h-100">
                <div className="testimonial-wrap h-100">
                  <div className="testimonial-content">
                    <p className="testimonial-title">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </p>
                    <p>
                      Siztec provided us with highly skilled technicians for our oil & gas project. Their professionalism and quick response time were impressive.
                    </p>
                  </div>
                  <div className="reviewer text-end mt-30">
                    <div className="reviewer-info d-inline-block">
                      <p className="name">Ahmed Al Mansoori</p>
                      <p className="desig">Project Manager, Energy Sector</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <ScrollAnimation className="h-100">
                <div className="testimonial-wrap h-100">
                  <div className="testimonial-content">
                    <p className="testimonial-title">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </p>
                    <p>
                      Outstanding service for our construction project. The team was qualified, punctual, and exceeded our expectations in every way.
                    </p>
                  </div>
                  <div className="reviewer text-end mt-30">
                    <div className="reviewer-info d-inline-block">
                      <p className="name">Sarah Johnson</p>
                      <p className="desig">Operations Director</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <ScrollAnimation className="h-100">
                <div className="testimonial-wrap h-100">
                  <div className="testimonial-content">
                    <p className="testimonial-title">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </p>
                    <p>
                      Reliable partner for our workforce needs. Siztec consistently delivers quality workforce and excellent support throughout the project.
                    </p>
                  </div>
                  <div className="reviewer text-end mt-30">
                    <div className="reviewer-info d-inline-block">
                      <p className="name">Mohammed Rahman</p>
                      <p className="desig">HR Manager, Manufacturing</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Ends */}

      {/* CTA Section */}
      <section className="work-area pt-110 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <ScrollAnimation>
                <h2 className="title text-white mb-4">Ready to Build Your Team?</h2>
                <p className="subtitle mb-5">Contact us today to discuss your workforce requirements</p>
                <Link href="/contact_us" className="cta-btn">Get In Touch</Link>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}