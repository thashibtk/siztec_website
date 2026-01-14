import ScrollAnimation from "@/components/ScrollAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Siztec Technical Services",
  description: "Comprehensive manpower and workforce solutions across UAE - Specialized staffing, technical outsourcing, project staffing, and more."
};

export default function Services() {
  return (
    <>
      {/* Breadcrumb Section Starts */}
      <div className="about-title-area position-relative pt-110 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-wrap text-center">
                <h1 className="title hero-title">Our Services</h1>
                <p className="hero-title">Comprehensive manpower solutions tailored to meet your business needs across diverse industries in the UAE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section Ends */}

      {/* Service 1: Specialized Manpower Supply */}
      <section className="pt-110 pb-110" id="manpower-supply">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="service-img">
                <img 
                  src="../images/services/manpower.png " 
                  alt="Specialized Manpower Supply" 
                  className="img-fluid rounded shadow"
                  style={{width: '100%', height: 'auto'}}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-content ps-lg-4">
                <span className="badge bg-primary mb-3">Core Service</span>
                <h2 className="title mb-4">Specialized & Skilled Manpower Supply</h2>
                <p className="mb-4">
                  We provide highly qualified and skilled workforce across technical, mechanical, electrical, and civil sectors. Our extensive database ensures rapid deployment of professionals who meet your exact specifications.
                </p>
                
                <h5 className="mb-3">Key Features:</h5>
                <ul className="mb-4">
                  <li className="mb-2"><i className="fas fa-check-circle text-primary me-2"></i>Pre-screened and certified professionals</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-primary me-2"></i>Technical and trade specialists</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-primary me-2"></i>Engineers and supervisors</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-primary me-2"></i>Skilled and semi-skilled labor</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-primary me-2"></i>Fast mobilization (48-72 hours)</li>
                </ul>

                <h5 className="mb-3">Industries Served:</h5>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge bg-secondary">Oil & Gas</span>
                  <span className="badge bg-secondary">Construction</span>
                  <span className="badge bg-secondary">Manufacturing</span>
                  <span className="badge bg-secondary">Petrochemical</span>
                  <span className="badge bg-secondary">Infrastructure</span>
                </div>

                <a href="/contact_us" className="service-btn btn-primary">Request Manpower</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Technical Outsourcing */}
      <section className="pt-110 pb-110" style={{backgroundColor: '#f8f9fa'}} id="technical-outsourcing">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <div className="service-img">
                <img 
                  src="../images/services/technical-outsourcing.png" 
                  alt="Technical Outsourcing" 
                  className="img-fluid rounded shadow"
                  style={{width: '100%', height: 'auto'}}
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="service-content pe-lg-4">
                <span className="badge bg-success mb-3">Strategic Solution</span>
                <h2 className="title mb-4">Technical Outsourcing</h2>
                <p className="mb-4">
                  Complete technical team outsourcing solutions for projects of any scale and complexity. We provide end-to-end management of your technical workforce, allowing you to focus on core operations.
                </p>
                
                <h5 className="mb-3">What We Offer:</h5>
                <ul className="mb-4">
                  <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Complete technical teams</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Project management support</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Quality control and supervision</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>HR and payroll management</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Compliance and documentation</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Performance monitoring</li>
                </ul>

                <h5 className="mb-3">Benefits:</h5>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="p-3 bg-white rounded">
                      <h6><i className="fas fa-dollar-sign text-success me-2"></i>Cost Effective</h6>
                      <p className="mb-0 small">Reduce overhead and operational costs</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-3 bg-white rounded">
                      <h6><i className="fas fa-clock text-success me-2"></i>Time Saving</h6>
                      <p className="mb-0 small">Focus on core business activities</p>
                    </div>
                  </div>
                </div>

                <a href="/contact_us" className="service-btn btn-success">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Project Staffing */}
      <section className="pt-110 pb-110" id="project-staffing">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="service-img">
                <img 
                  src="../images/services/project-staffing.png" 
                  alt="Project Staffing" 
                  className="img-fluid rounded shadow"
                  style={{width: '100%', height: 'auto'}}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-content ps-lg-4">
                <span className="badge bg-warning mb-3">Flexible Solution</span>
                <h2 className="title mb-4">Project Staffing</h2>
                <p className="mb-4">
                  Dedicated project-based staffing with experienced professionals ready to deploy immediately. Perfect for time-sensitive projects requiring specific expertise and rapid team assembly.
                </p>
                
                <h5 className="mb-3">Service Highlights:</h5>
                <ul className="mb-4">
                  <li className="mb-2"><i className="fas fa-check-circle text-warning me-2"></i>Short and long-term projects</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-warning me-2"></i>Scalable team sizes</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-warning me-2"></i>Immediate deployment capability</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-warning me-2"></i>Project-specific skill matching</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-warning me-2"></i>Flexible contract terms</li>
                </ul>

                <h5 className="mb-3">Ideal For:</h5>
                <div className="row">
                  <div className="col-6 mb-2">
                    <i className="fas fa-building text-warning me-2"></i>Construction Projects
                  </div>
                  <div className="col-6 mb-2">
                    <i className="fas fa-industry text-warning me-2"></i>Industrial Expansions
                  </div>
                  <div className="col-6 mb-2">
                    <i className="fas fa-tools text-warning me-2"></i>Installation Works
                  </div>
                  <div className="col-6 mb-2">
                    <i className="fas fa-cogs text-warning me-2"></i>Maintenance Projects
                  </div>
                </div>

                <a href="/contact_us" className="service-btn btn-warning mt-4">Start Your Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Shutdown Work & Special Projects */}
      <section className="pt-110 pb-110" style={{backgroundColor: '#f8f9fa'}} id="shutdown-work">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <div className="service-img">
                <img 
                  src="../images/services/shutdown-work.png" 
                  alt="Shutdown Work & Special Projects" 
                  className="img-fluid rounded shadow"
                  style={{width: '100%', height: 'auto'}}
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="service-content pe-lg-4">
                <span className="badge bg-danger mb-3">Critical Operations</span>
                <h2 className="title mb-4">Shutdown Work & Special Projects</h2>
                <p className="mb-4">
                  Specialized teams for plant shutdowns, turnarounds, and time-critical projects. Our experienced workforce ensures minimal downtime and efficient project completion.
                </p>
                
                <h5 className="mb-3">Specialized Services:</h5>
                <ul className="mb-4">
                  <li className="mb-2"><i className="fas fa-check-circle text-danger me-2"></i>Plant shutdown support</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-danger me-2"></i>Turnaround maintenance teams</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-danger me-2"></i>Emergency project support</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-danger me-2"></i>24/7 availability</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-danger me-2"></i>Safety-certified personnel</li>
                  <li className="mb-2"><i className="fas fa-check-circle text-danger me-2"></i>Rapid mobilization protocols</li>
                </ul>

                <div className="p-4 bg-white rounded mb-4">
                  <h6 className="mb-3"><i className="fas fa-shield-alt text-danger me-2"></i>Safety First Approach</h6>
                  <p className="mb-0 small">
                    All personnel are trained in HSE standards, emergency procedures, and industry-specific safety protocols to ensure zero-incident operations during critical shutdown periods.
                  </p>
                </div>

                <a href="/contact_us" className="service-btn btn-danger mt-4">Request Shutdown Team</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 5: Permanent Recruitment */}
      <section className="pt-110 pb-110" id="permanent-recruitment">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="service-img">
                <img 
                  src="../images/services/permanent-recruitment.png " 
                  alt="Permanent Recruitment" 
                  className="img-fluid rounded shadow"
                  style={{width: '100%', height: 'auto'}}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-content ps-lg-4">
                <span className="badge bg-dark mb-3">Long-Term Solution</span>
                <h2 className="title mb-4">Permanent Recruitment</h2>
                <p className="mb-4">
                  End-to-end recruitment services to find the perfect permanent staff for your organization. We handle everything from sourcing to onboarding, ensuring the right cultural and skill fit.
                </p>
                
                <h5 className="mb-3">Our Process:</h5>
                <div className="mb-4">
                  <div className="d-flex mb-3">
                    <div className="me-3">
                      <span className="badge bg-primary rounded-circle" style={{width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>1</span>
                    </div>
                    <div>
                      <h6 className="mb-1">Requirement Analysis</h6>
                      <p className="mb-0 small">Understanding your needs and company culture</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="me-3">
                      <span className="badge bg-primary rounded-circle" style={{width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>2</span>
                    </div>
                    <div>
                      <h6 className="mb-1">Candidate Sourcing</h6>
                      <p className="mb-0 small">Access to extensive talent pool and networks</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="me-3">
                      <span className="badge bg-primary rounded-circle" style={{width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>3</span>
                    </div>
                    <div>
                      <h6 className="mb-1">Screening & Assessment</h6>
                      <p className="mb-0 small">Rigorous evaluation and background checks</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="me-3">
                      <span className="badge bg-primary rounded-circle" style={{width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>4</span>
                    </div>
                    <div>
                      <h6 className="mb-1">Interviews & Selection</h6>
                      <p className="mb-0 small">Coordinating interviews with top candidates</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="me-3">
                      <span className="badge bg-primary rounded-circle" style={{width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>5</span>
                    </div>
                    <div>
                      <h6 className="mb-1">Onboarding Support</h6>
                      <p className="mb-0 small">Complete documentation and visa processing</p>
                    </div>
                  </div>
                </div>

                <a href="/contact_us" className="service-btn btn-dark">Hire Permanent Staff</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 6: Workforce Management */}
      <section className="pt-110 pb-110" style={{backgroundColor: '#f8f9fa'}} id="workforce-management">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <div className="service-img">
                <img 
                  src="../images/services/workforce-management.png" 
                  alt="Workforce Management" 
                  className="img-fluid rounded shadow"
                  style={{width: '100%', height: 'auto'}}
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="service-content pe-lg-4">
                <span className="badge bg-info mb-3">Complete HR Solution</span>
                <h2 className="title mb-4">Workforce Management</h2>
                <p className="mb-4">
                  Comprehensive HR solutions including payroll, compliance, attendance tracking, and employee management. Let us handle the administrative burden while you focus on business growth.
                </p>
                
                <h5 className="mb-3">Services Include:</h5>
                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <div className="p-3 bg-white rounded">
                      <h6><i className="fas fa-money-check text-info me-2"></i>Payroll Processing</h6>
                      <p className="mb-0 small">Accurate and timely salary disbursement</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-3 bg-white rounded">
                      <h6><i className="fas fa-file-contract text-info me-2"></i>Compliance Management</h6>
                      <p className="mb-0 small">UAE labor law compliance</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-3 bg-white rounded">
                      <h6><i className="fas fa-passport text-info me-2"></i>Visa & Documentation</h6>
                      <p className="mb-0 small">Complete visa processing support</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-3 bg-white rounded">
                      <h6><i className="fas fa-calendar-check text-info me-2"></i>Attendance Tracking</h6>
                      <p className="mb-0 small">Digital workforce monitoring</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-3 bg-white rounded">
                      <h6><i className="fas fa-shield-alt text-info me-2"></i>Insurance & Benefits</h6>
                      <p className="mb-0 small">Health insurance and WPS compliance</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-3 bg-white rounded">
                      <h6><i className="fas fa-chart-line text-info me-2"></i>Performance Management</h6>
                      <p className="mb-0 small">KPI tracking and reporting</p>
                    </div>
                  </div>
                </div>

                <a href="/contact_us" className="service-btn btn-info">Outsource HR Functions</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60">
                <h2 className="title">Why Choose Siztec Services?</h2>
                <p className="subtitle">Comprehensive solutions backed by expertise and commitment</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center p-4 h-100 bg-light rounded">
                <div className="mb-3">
                  <i className="fas fa-award" style={{fontSize: '48px', color: 'var(--blue-deep)'}}></i>
                </div>
                <h5 className="mb-3">Quality Assured</h5>
                <p className="mb-0">Thoroughly vetted and certified professionals meeting international standards</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center p-4 h-100 bg-light rounded">
                <div className="mb-3">
                  <i className="fas fa-clock" style={{fontSize: '48px', color: 'var(--blue-deep)'}}></i>
                </div>
                <h5 className="mb-3">Quick Deployment</h5>
                <p className="mb-0">Rapid mobilization within 48-72 hours for urgent requirements</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center p-4 h-100 bg-light rounded">
                <div className="mb-3">
                  <i className="fas fa-headset" style={{fontSize: '48px', color: 'var(--blue-deep)'}}></i>
                </div>
                <h5 className="mb-3">24/7 Support</h5>
                <p className="mb-0">Round-the-clock assistance and dedicated account management</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center p-4 h-100 bg-light rounded">
                <div className="mb-3">
                  <i className="fas fa-certificate" style={{fontSize: '48px', color: 'var(--blue-deep)'}}></i>
                </div>
                <h5 className="mb-3">Fully Compliant</h5>
                <p className="mb-0">MOHRE licensed and compliant with all UAE regulations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="work-area pt-110 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <ScrollAnimation>
                <h2 className="title text-white mb-4">Ready to Build Your Perfect Team?</h2>
                <p className="subtitle mb-5">Contact us today to discuss your manpower requirements and discover how we can support your business goals</p>
                <a href="/contact_us" className="cta-btn me-3">Get Started Now</a>
                <a href="tel:+97143260688" className="cta-btn"><i className="fas fa-phone me-2"></i>Call Us</a>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}