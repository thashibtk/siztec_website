import ScrollAnimation from "@/components/ScrollAnimation";
import Counter from "@/components/Counter";

import type { Metadata } from "next";
import BrandCarousel from "@/components/BrandCarousel";

export const metadata: Metadata = {
  title: "About Us - Siztec Technical Services",
  description: "Learn about Siztec Technical Services LLC, a leading provider of specialized manpower and technical services in the UAE with over 15 years of excellence."
};

export default function AboutUs() {
  return (
    <>
      {/* Breadcrumb Section Starts */}
      <div className="about-title-area position-relative pt-110 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-wrap text-center">
                <h1 className="title hero-title">About Us</h1>
                <p className="hero-title">Learn about Siztec Technical Services LLC, a leading provider of specialized manpower.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section Ends */}

      {/* Company Overview Section Starts */}
      <div className="feature-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-2 pb-4">
              <div className="feature-details pt-15">
                <h2 className="title pb-40">Building UAE's Workforce Excellence Since 2002</h2>
                <p className="pb-30">
                  Siztec Technical Services LLC is a premier manpower solutions provider in the United Arab Emirates, specializing in delivering qualified and skilled workforce across diverse industries. With over two decades of experience, we have established ourselves as a trusted partner for businesses seeking reliable staffing solutions.
                </p>
                <div className="quote-wrap pl-30 pt-15 pb-15">
                  <p className="quote-text pb-15">
                    "Our commitment is simple: deliver the right talent, at the right time, with the right expertise. We don't just supply manpower; we build lasting partnerships that drive business success."
                  </p>
                  <span className="quote-author">- Managing Director, Siztec Technical Services LLC</span>
                </div>
                <div className="feature-items pt-50">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="items-icon">
                        <img src="/images/icons/feature-icon-1.svg" alt="Quality Workforce" />
                      </div>
                      <div className="feature-info pt-30">
                        <h4 className="title">Quality Assured Workforce</h4>
                        <p>
                          Every professional we deploy is thoroughly vetted, qualified, and trained to meet international industry standards.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="items-icon">
                        <img src="/images/icons/feature-icon-2.svg" alt="Quick Mobilization" />
                      </div>
                      <div className="feature-info pt-30">
                        <h4 className="title">Rapid Mobilization</h4>
                        <p>
                          Our extensive talent pool and efficient processes ensure quick deployment to meet urgent project requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="feature-img">
                <img src="/images/media/img-1.png" alt="Siztec Technical Services" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Company Overview Section Ends */}

      {/* Mission & Vision Section Starts */}
      <div className="pt-100 pb-100" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="p-4 bg-white rounded h-100">
                <h3 className="title pb-3"><i className="fas fa-bullseye me-2" style={{color: '#001e56'}}></i> Our Mission</h3>
                <p>
                  To provide exceptional manpower solutions that empower businesses to achieve their operational goals. We are dedicated to connecting skilled professionals with opportunities where they can excel, while maintaining the highest standards of service quality, compliance, and client satisfaction.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="p-4 bg-white rounded h-100">
                <h3 className="title pb-3"><i className="fas fa-eye me-2" style={{color: '#001e56'}}></i> Our Vision</h3>
                <p>
                  To be the most trusted and preferred manpower solutions provider in the UAE, recognized for our commitment to excellence, innovation in workforce management, and our ability to deliver sustainable value to clients across all industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mission & Vision Section Ends */}

      {/* Counter Section Starts */}
      <div className="counter-area pt-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 mb-5">
              <div className="section-title text-center">
                <h2 className="title">Our Impact in Numbers</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-6 col-lg-4 col-xl-3">
              <div className="counter-wrap mb-45 text-center">
                <div className="counter-icon d-flex justify-content-center">
                  <i className="fa-solid fa-clipboard-check" style={{ fontSize: '40px', color: '#001e56' }}></i>
                </div>
                <div className="counter-up pt-30">
<Counter end={1500} />
                  <span className="sign">+</span>
                  <h5 className="counter-text pt-10">Successful Projects</h5>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <div className="counter-wrap mb-45 text-center">
                <div className="counter-icon d-flex justify-content-center">
                  <i className="fa-solid fa-calendar-check" style={{ fontSize: '40px', color: '#001e56' }}></i>
                </div>
                <div className="counter-up pt-30">
<Counter end={22} />
                  <span className="sign">+</span>
                  <h5 className="counter-text pt-10">Years of Excellence</h5>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <div className="counter-wrap mb-45 text-center">
                <div className="counter-icon d-flex justify-content-center">
                  <i className="fa-solid fa-users-gear" style={{ fontSize: '40px', color: '#001e56' }}></i>
                </div>
                <div className="counter-up pt-30">
<Counter end={5000} />
                  <span className="sign">+</span>
                  <h5 className="counter-text pt-10">Active Workforce</h5>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <div className="counter-wrap mb-45 text-center">
                <div className="counter-icon d-flex justify-content-center">
                  <i className="fa-solid fa-smile" style={{ fontSize: '40px', color: '#001e56' }}></i>
                </div>
                <div className="counter-up pt-30">
<Counter end={300} />
                  <span className="sign">+</span>
                  <h5 className="counter-text pt-10">Satisfied Clients</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section Counter Ends */}

      {/* Core Values Section Starts */}
      <div className="pt-50 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60">
                <h2 className="title">Our Core Values</h2>
                <p className="subtitle">
                  The principles that guide everything we do
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-info h-100 d-block text-center">
                <div className="value-icon">
                  <i className="fa-solid fa-trophy"></i>
                </div>
                <div className="content">
                  <h4 className="title">Excellence</h4>
                  <p>We strive for excellence in every placement, ensuring our clients receive top-tier professionals who exceed expectations.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-info h-100 d-block text-center">
                <div className="value-icon">
                  <i className="fa-solid fa-scale-balanced"></i>
                </div>
                <div className="content">
                  <h4 className="title">Integrity</h4>
                  <p>Transparency, honesty, and ethical practices form the foundation of all our business relationships.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-info h-100 d-block text-center">
                <div className="value-icon">
                  <i className="fa-solid fa-hand-holding-heart"></i>
                </div>
                <div className="content">
                  <h4 className="title">Commitment</h4>
                  <p>We are committed to delivering on our promises and supporting both our clients and workforce throughout every engagement.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-info h-100 d-block text-center">
                <div className="value-icon">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <div className="content">
                  <h4 className="title">Innovation</h4>
                  <p>Continuously improving our processes and adopting new technologies to deliver better workforce solutions.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-info h-100 d-block text-center">
                <div className="value-icon">
                  <i className="fa-solid fa-helmet-safety"></i>
                </div>
                <div className="content">
                  <h4 className="title">Safety First</h4>
                  <p>Prioritizing workplace safety and ensuring all personnel are trained in industry-standard safety protocols.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-info h-100 d-block text-center">
                <div className="value-icon">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <div className="content">
                  <h4 className="title">Partnership</h4>
                  <p>Building long-term relationships based on mutual trust, respect, and shared success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Core Values Section Ends */}

      {/* Industries Section Starts */}
      <section className="work-area pt-110 pb-115" id="industries">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title mb-50">
                <h2 className="title text-white">Industries We Serve</h2>
                <p className="subtitle">
                  Specialized manpower solutions across diverse sectors
                </p>
              </div>
            </div>
          </div>
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
        </div>
      </section>
      {/* Industries Section Ends */}


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
      
      {/* Why Choose Siztec Section Starts */}
      <div className="pt-110 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60">
                <h2 className="title">Why Choose Siztec?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="d-flex align-items-start">
                <div className="me-3">
                  <i className="fas fa-check-circle" style={{fontSize: '24px', color: 'var(--blue-light)'}}></i>
                </div>
                <div>
                  <h5>Extensive Talent Network</h5>
                  <p>Access to a vast pool of pre-screened, qualified professionals across all skill levels and industries.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="d-flex align-items-start">
                <div className="me-3">
                  <i className="fas fa-check-circle" style={{fontSize: '24px', color: 'var(--blue-light)'}}></i>
                </div>
                <div>
                  <h5>UAE Market Expertise</h5>
                  <p>Deep understanding of local regulations, visa processes, and industry-specific requirements.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="d-flex align-items-start">
                <div className="me-3">
                  <i className="fas fa-check-circle" style={{fontSize: '24px', color: 'var(--blue-light)'}}></i>
                </div>
                <div>
                  <h5>Quality Assurance</h5>
                  <p>Rigorous screening, verification, and training processes ensure only qualified professionals are deployed.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="d-flex align-items-start">
                <div className="me-3">
                  <i className="fas fa-check-circle" style={{fontSize: '24px', color: 'var(--blue-light)'}}></i>
                </div>
                <div>
                  <h5>Flexible Solutions</h5>
                  <p>Customized staffing packages from temporary to permanent placements, tailored to your needs.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="d-flex align-items-start">
                <div className="me-3">
                  <i className="fas fa-check-circle" style={{fontSize: '24px', color: 'var(--blue-light)'}}></i>
                </div>
                <div>
                  <h5>Compliance & Legal Support</h5>
                  <p>Full compliance with UAE labor laws and assistance with all documentation and legal requirements.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="d-flex align-items-start">
                <div className="me-3">
                  <i className="fas fa-check-circle" style={{fontSize: '24px', color: 'var(--blue-light)'}}></i>
                </div>
                <div>
                  <h5>24/7 Support</h5>
                  <p>Dedicated account managers and round-the-clock support for all your staffing needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Siztec Section Ends */}

      

      {/* Certifications Section Starts */}
      <div className="pt-100 pb-100" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60">
                <h2 className="title">Certifications & Compliance</h2>
                <p className="subtitle">
                  Fully licensed and compliant with UAE regulations
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <p className="mb-4">
                  Siztec Technical Services LLC is fully licensed by the UAE Ministry of Human Resources and Emiratisation (MOHRE) and maintains all necessary certifications to operate as a manpower supply company in the United Arab Emirates.
                </p>
                <p>
                  We adhere to all UAE labor laws, safety regulations, and international standards to ensure complete compliance and peace of mind for our clients and workforce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Certifications Section Ends */}

      {/* CTA Section */}
      <section className="work-area pt-110 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <ScrollAnimation>
                <h2 className="title text-white mb-4">Partner With Siztec Today</h2>
                <p className="subtitle mb-5">Let us help you build the team that drives your success</p>
                <a href="/contact_us" className="cta-btn me-3">Contact Us</a>
                <a href="/services" className="cta-btn">View Our Services</a>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}