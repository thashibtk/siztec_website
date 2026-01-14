"use client";
import React, { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import FAQ from "@/components/FAQ";
import { sendEmail } from "@/app/actions/sendEmail";

export default function ContactUs() {
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    setStatus(result);
    setLoading(false);
    
    if (result.success) {
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <>
      {/* Contact Title */}
      <div className="contact-title-area position-relative pt-110 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-wrap text-center">
                <h1 className="title hero-title">Get in Touch</h1>
                <p className="hero-title">We're here to discuss your manpower requirements and provide customized workforce solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Title Ends */}

      {/* Contact Info Section Starts */}
      <div className="pt-80 pb-80" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center p-4 bg-white rounded h-100">
                <div className="mb-3">
                  <i className="fas fa-map-marker-alt" style={{fontSize: '32px', color: 'var(--blue-deep)'}}></i>
                </div>
                <h5>Our Office</h5>
                <p className="mb-0">309, Third floor, Coastal building <br/> Al Nahda Road, Al Qusais 2<br/>Dubai, UAE</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center p-4 bg-white rounded h-100">
                <div className="mb-3">
                  <i className="fas fa-phone-alt" style={{fontSize: '32px', color: 'var(--blue-deep)'}}></i>
                </div>
                <h5>Call Us</h5>
                <p className="mb-0">
                  <a href="tel:+97143260688" style={{textDecoration: 'none', color: 'inherit'}}>+971 4326 0688</a><br/>
                  <a href="tel:+971521164362" style={{textDecoration: 'none', color: 'inherit'}}>+971 52 116 4362</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center p-4 bg-white rounded h-100">
                <div className="mb-3">
                  <i className="fas fa-envelope" style={{fontSize: '32px', color: 'var(--blue-deep)'}}></i>
                </div>
                <h5>Email Us</h5>
                <p className="mb-0">
                  <a href="mailto:info@siztec.com" style={{textDecoration: 'none', color: 'inherit'}}>info@siztec.com</a><br/>
                  <a href="mailto:sales@siztec.com" style={{textDecoration: 'none', color: 'inherit'}}>sales@siztec.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Info Section Ends */}

      {/* Contact Form */}
      <div className="contact-form-wrap pt-110 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="contact-form-title pb-50 text-center">
                <h3 className="title">Request a Consultation</h3>
                <p>Fill out the form below and our team will get back to you within 24 hours</p>
              </div>
              
              {status && (
                <div className={`alert ${status.success ? 'alert-success' : 'alert-danger'} text-center mb-4`}>
                  {status.message}
                </div>
              )}

              <div className="comments-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-input-wrap">
                        <input type="text" name="firstName" placeholder="First Name *" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-input-wrap">
                        <input type="text" name="lastName" placeholder="Last Name *" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-input-wrap">
                        <input type="email" name="email" placeholder="Email Address *" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-input-wrap">
                        <input type="tel" name="phone" placeholder="Phone Number *" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-input-wrap">
                        <input type="text" name="company" placeholder="Company Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-input-wrap">
                        <select name="industry" className="form-control" style={{height: '60px', border: '1px solid #e5e5e5', width: '100%', padding: '0 20px'}}>
                          <option value="">Select Industry *</option>
                          <option value="oil-gas">Oil & Gas</option>
                          <option value="construction">Construction</option>
                          <option value="petrochemical">Petrochemical</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="marine">Marine Services</option>
                          <option value="infrastructure">Infrastructure</option>
                          <option value="hospitality">Hospitality</option>
                          <option value="power">Power & Utilities</option>
                          <option value="automotive">Automotive</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 mt-2">
                      <div className="form-input-wrap">
                        <select name="service" className="form-control" style={{height: '60px', border: '1px solid #e5e5e5', width: '100%', padding: '0 20px'}} required>
                          <option value="">Service Required *</option>
                          <option value="manpower-supply">Specialized Manpower Supply</option>
                          <option value="technical-outsourcing">Technical Outsourcing</option>
                          <option value="project-staffing">Project Staffing</option>
                          <option value="shutdown-work">Shutdown & Special Projects</option>
                          <option value="permanent-recruitment">Permanent Recruitment</option>
                          <option value="workforce-management">Workforce Management</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 mt-4">
                      <div className="form-textarea-wrap">
                        <textarea name="message" placeholder="Tell us about your requirements..." rows={6} required></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="pt-20 text-center">
                        <button className="cta-btn form-send-btn" disabled={loading}>
                          {loading ? 'Sending...' : 'Submit Request'}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form Ends */}

      {/* Google Maps */}
      <div className="google-maps-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe 
                    width="1920" 
                    height="500" 
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0892010571997!2d55.380286301649015!3d25.267584593140466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d0007d4b543%3A0x4dc1746e0c31c8eb!2sCoastal%20building!5e0!3m2!1sen!2sin!4v1768300744149!5m2!1sen!2sin"
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Siztec Location">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Google Maps Ends */}

      {/* Business Hours Section Starts */}
      <div className="pt-100 pb-100" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="p-4 bg-white rounded h-100">
                <h4 className="mb-4">Business Hours</h4>
                <div className="d-flex justify-content-between mb-3">
                  <span><strong>Monday - Saturday:</strong></span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span><strong>Sunday:</strong></span>
                  <span>Closed</span>
                </div>
                <p className="mt-4 mb-0" style={{color: '#666'}}>
                  <i className="fas fa-info-circle me-2"></i>
                  Emergency support available 24/7 for existing clients
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="p-4 bg-white rounded h-100">
                <h4 className="mb-4">Quick Links</h4>
                <div className="mb-3">
                  <a href="/" style={{textDecoration: 'none', color: '#333', display: 'block', marginBottom: '12px'}}>
                    <i className="fas fa-arrow-right me-2" style={{color: 'var(--blue-light)'}}></i>
                    Home
                  </a>
                  <a href="/services" style={{textDecoration: 'none', color: '#333', display: 'block', marginBottom: '12px'}}>
                    <i className="fas fa-arrow-right me-2" style={{color: 'var(--blue-light)'}}></i>
                    Our Services
                  </a>
                  <a href="/about_us" style={{textDecoration: 'none', color: '#333', display: 'block', marginBottom: '12px'}}>
                    <i className="fas fa-arrow-right me-2" style={{color: 'var(--blue-light)'}}></i>
                    About Siztec
                  </a>
                  <a href="/#industries" style={{textDecoration: 'none', color: '#333', display: 'block', marginBottom: '12px'}}>
                    <i className="fas fa-arrow-right me-2" style={{color: 'var(--blue-light)'}}></i>
                    Industries We Serve
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Business Hours Section Ends */}

      {/* FAQ Section Starts */}
      <div className="pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60">
                <h3 className="title">Frequently Asked Questions</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <ScrollAnimation>
                <FAQ items={[
                  {
                    question: "How quickly can you provide manpower?",
                    answer: "We maintain a ready pool of pre-screened professionals and can typically mobilize workforce within 48-72 hours for urgent requirements."
                  },
                  {
                    question: "What industries do you specialize in?",
                    answer: "We serve Oil & Gas, Construction, Petrochemical, Manufacturing, Marine, Infrastructure, Hospitality, Power & Utilities, Automotive, and Banking sectors."
                  },
                  {
                    question: "Do you handle visa and work permit processing?",
                    answer: "Yes, we provide complete support for visa processing, work permits, and all legal documentation required for employment in the UAE."
                  },
                  {
                    question: "What is your service coverage area?",
                    answer: "We provide manpower services throughout the United Arab Emirates, including Dubai, Abu Dhabi, Sharjah, and all other Emirates."
                  }
                ]} />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section Ends */}

      {/* CTA Section */}
      <section className="work-area pt-110 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <ScrollAnimation>
                <h2 className="title text-white mb-4">Need Immediate Assistance?</h2>
                <p className="subtitle mb-5">Our team is ready to help you with your manpower requirements</p>
                <a href="tel:+97143260688" className="cta-btn me-3">
                <i className="fas fa-phone me-2"></i>Call Now
              </a>
              <a href="https://wa.me/+971521164362" className="cta-btn" style={{backgroundColor: '#25D366'}}>
                <i className="fab fa-whatsapp me-2"></i>WhatsApp
              </a>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section Ends */}


    </>
  );
}