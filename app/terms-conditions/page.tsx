import type { Metadata } from "next";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Terms & Conditions - Siztec Technical Services",
  description: "Terms and Conditions for Siztec Technical Services LLC - Legal terms governing the use of our services."
};

export default function TermsConditions() {
  return (
    <>

      {/*  Title */}
      <div className="contact-title-area position-relative pt-110 pb-80 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-wrap text-center">
                <h1 className="title hero-title">Terms & Conditions</h1>
                <p className="hero-title">Last Updated: January 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Title Ends */}

      {/* Terms Content */}
      <div className="pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <ScrollAnimation>
                <div className="content">
                  {/* Introduction */}
                  <div className="mb-5">
                    <h3 className="mb-3">1. Acceptance of Terms</h3>
                    <p>
                      Welcome to Siztec Technical Services LLC ("Siztec", "we", "our", or "us"). These Terms and Conditions ("Terms") govern your access to and use of our website, services, and any related applications or platforms.
                    </p>
                    <p>
                      By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our services.
                    </p>
                  </div>

                  {/* Definitions */}
                  <div className="mb-5">
                    <h3 className="mb-3">2. Definitions</h3>
                    <ul>
                      <li><strong>"Services"</strong> refers to all manpower supply, recruitment, staffing, and related services provided by Siztec.</li>
                      <li><strong>"Client"</strong> means any individual or organization that engages Siztec for services.</li>
                      <li><strong>"Candidate"</strong> means any individual seeking employment through our services.</li>
                      <li><strong>"Employee"</strong> means any person employed or contracted through our services.</li>
                      <li><strong>"Website"</strong> refers to siztec.ae and all associated domains.</li>
                    </ul>
                  </div>

                  {/* Services Provided */}
                  <div className="mb-5">
                    <h3 className="mb-3">3. Services Provided</h3>
                    <p>Siztec Technical Services LLC provides the following services:</p>
                    <ul>
                      <li>Specialized and skilled manpower supply</li>
                      <li>Technical outsourcing and contract staffing</li>
                      <li>Project-based staffing solutions</li>
                      <li>Shutdown work and special projects</li>
                      <li>Permanent recruitment services</li>
                      <li>Workforce management and HR solutions</li>
                    </ul>
                    <p className="mt-3">
                      All services are subject to separate service agreements and are provided in accordance with UAE labor laws and MOHRE regulations.
                    </p>
                  </div>

                  {/* Client Obligations */}
                  <div className="mb-5">
                    <h3 className="mb-3">4. Client Obligations</h3>
                    
                    <h5 className="mb-3">4.1 Service Agreement</h5>
                    <p>Clients must enter into a written service agreement with Siztec before engaging our services.</p>

                    <h5 className="mb-3">4.2 Accurate Information</h5>
                    <p>Clients must provide accurate and complete information regarding:</p>
                    <ul>
                      <li>Job requirements and specifications</li>
                      <li>Working conditions and environment</li>
                      <li>Compensation and benefits</li>
                      <li>Project duration and timelines</li>
                    </ul>

                    <h5 className="mb-3">4.3 Payment Terms</h5>
                    <p>Clients agree to pay all fees as specified in the service agreement, including:</p>
                    <ul>
                      <li>Service fees and placement charges</li>
                      <li>Employee salaries (for contract staffing)</li>
                      <li>Visa and documentation costs</li>
                      <li>Any additional charges as mutually agreed</li>
                    </ul>

                    <h5 className="mb-3">4.4 Compliance</h5>
                    <p>Clients must comply with all applicable UAE labor laws, health and safety regulations, and provide a safe working environment for deployed workforce.</p>
                  </div>

                  {/* Candidate Obligations */}
                  <div className="mb-5">
                    <h3 className="mb-3">5. Candidate Obligations</h3>
                    
                    <h5 className="mb-3">5.1 Accurate Information</h5>
                    <p>Candidates must provide truthful and accurate information regarding:</p>
                    <ul>
                      <li>Educational qualifications and certifications</li>
                      <li>Work experience and skills</li>
                      <li>Personal identification documents</li>
                      <li>References and background information</li>
                    </ul>

                    <h5 className="mb-3">5.2 Verification</h5>
                    <p>Candidates authorize Siztec to verify all information provided and conduct necessary background checks.</p>

                    <h5 className="mb-3">5.3 Employment Terms</h5>
                    <p>Candidates agree to honor employment contracts and comply with client company policies and UAE labor regulations.</p>
                  </div>

                  {/* Fees and Payment */}
                  <div className="mb-5">
                    <h3 className="mb-3">6. Fees and Payment</h3>
                    
                    <h5 className="mb-3">6.1 Service Fees</h5>
                    <p>Our fees are outlined in individual service agreements and may include:</p>
                    <ul>
                      <li>Placement fees for permanent recruitment</li>
                      <li>Monthly service charges for contract staffing</li>
                      <li>Project-based fees for special assignments</li>
                      <li>Administrative and processing charges</li>
                    </ul>

                    <h5 className="mb-3">6.2 Payment Terms</h5>
                    <p>Unless otherwise specified:</p>
                    <ul>
                      <li>Payment is due within 30 days of invoice date</li>
                      <li>Late payments may incur interest charges</li>
                      <li>Advance payments may be required for certain services</li>
                    </ul>

                    <h5 className="mb-3">6.3 Refund Policy</h5>
                    <p>Refunds and replacement guarantees are governed by individual service agreements and are subject to specific terms and conditions.</p>
                  </div>

                  {/* Intellectual Property */}
                  <div className="mb-5">
                    <h3 className="mb-3">7. Intellectual Property</h3>
                    <p>
                      All content on our website, including text, graphics, logos, images, and software, is the property of Siztec Technical Services LLC and protected by UAE and international copyright laws.
                    </p>
                    <p>
                      You may not reproduce, distribute, modify, or create derivative works without our express written permission.
                    </p>
                  </div>

                  {/* Confidentiality */}
                  <div className="mb-5">
                    <h3 className="mb-3">8. Confidentiality</h3>
                    <p>
                      Both parties agree to maintain confidentiality of all proprietary information shared during the course of our business relationship, including:
                    </p>
                    <ul>
                      <li>Business operations and strategies</li>
                      <li>Client and candidate information</li>
                      <li>Pricing and commercial terms</li>
                      <li>Technical and operational procedures</li>
                    </ul>
                  </div>

                  {/* Liability and Indemnification */}
                  <div className="mb-5">
                    <h3 className="mb-3">9. Liability and Indemnification</h3>
                    
                    <h5 className="mb-3">9.1 Limitation of Liability</h5>
                    <p>
                      To the maximum extent permitted by UAE law, Siztec shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of our services.
                    </p>

                    <h5 className="mb-3">9.2 Client Indemnification</h5>
                    <p>
                      Clients agree to indemnify Siztec against claims arising from workplace incidents, accidents, or injuries occurring at client premises or under client supervision.
                    </p>

                    <h5 className="mb-3">9.3 Professional Conduct</h5>
                    <p>
                      While we conduct thorough screening, clients are responsible for supervising deployed workforce and ensuring compliance with their policies and safety requirements.
                    </p>
                  </div>

                  {/* Termination */}
                  <div className="mb-5">
                    <h3 className="mb-3">10. Termination</h3>
                    <p>Either party may terminate a service agreement by providing written notice as specified in the agreement. Termination conditions include:</p>
                    <ul>
                      <li>Settlement of all outstanding payments</li>
                      <li>Return of company property and documents</li>
                      <li>Completion of transition procedures</li>
                      <li>Compliance with notice periods</li>
                    </ul>
                  </div>

                  {/* Force Majeure */}
                  <div className="mb-5">
                    <h3 className="mb-3">11. Force Majeure</h3>
                    <p>
                      Neither party shall be liable for failure to perform obligations due to circumstances beyond reasonable control, including natural disasters, government actions, pandemics, war, or other force majeure events.
                    </p>
                  </div>

                  {/* Dispute Resolution */}
                  <div className="mb-5">
                    <h3 className="mb-3">12. Dispute Resolution</h3>
                    <p>
                      Any disputes arising from these Terms or our services shall be resolved through:
                    </p>
                    <ul>
                      <li>Good faith negotiation between parties</li>
                      <li>Mediation, if negotiation fails</li>
                      <li>Arbitration or litigation in UAE courts as a last resort</li>
                    </ul>
                  </div>

                  {/* Governing Law */}
                  <div className="mb-5">
                    <h3 className="mb-3">13. Governing Law</h3>
                    <p>
                      These Terms are governed by and construed in accordance with the laws of the United Arab Emirates. All parties submit to the exclusive jurisdiction of the UAE courts.
                    </p>
                  </div>

                  {/* Website Use */}
                  <div className="mb-5">
                    <h3 className="mb-3">14. Website Use and Restrictions</h3>
                    <p>When using our website, you agree not to:</p>
                    <ul>
                      <li>Use automated systems to access or scrape content</li>
                      <li>Attempt to gain unauthorized access to systems</li>
                      <li>Transmit malicious code or viruses</li>
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe on intellectual property rights</li>
                      <li>Engage in fraudulent activities</li>
                    </ul>
                  </div>

                  {/* Data Protection */}
                  <div className="mb-5">
                    <h3 className="mb-3">15. Data Protection</h3>
                    <p>
                      Our collection and use of personal information is governed by our Privacy Policy. By using our services, you consent to data processing as described in the Privacy Policy.
                    </p>
                  </div>

                  {/* Modifications */}
                  <div className="mb-5">
                    <h3 className="mb-3">16. Modifications to Terms</h3>
                    <p>
                      We reserve the right to modify these Terms at any time. Material changes will be communicated through our website or directly to registered users. Continued use of our services after changes constitutes acceptance of modified Terms.
                    </p>
                  </div>

                  {/* Severability */}
                  <div className="mb-5">
                    <h3 className="mb-3">17. Severability</h3>
                    <p>
                      If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                    </p>
                  </div>

                  {/* Entire Agreement */}
                  <div className="mb-5">
                    <h3 className="mb-3">18. Entire Agreement</h3>
                    <p>
                      These Terms, together with individual service agreements and our Privacy Policy, constitute the entire agreement between you and Siztec regarding the use of our services.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="mb-5">
                    <h3 className="mb-3">19. Contact Information</h3>
                    <p>
                      For questions regarding these Terms and Conditions, please contact us:
                    </p>
                    <div className="mt-3 p-4" style={{backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
                      <p className="mb-2"><strong>Siztec Technical Services LLC</strong></p>
                      <p className="mb-2">Dubai, United Arab Emirates</p>
                      <p className="mb-2">Email: <a href="mailto:info@siztec.com">info@siztec.com</a></p>
                      <p className="mb-0">Phone: <a href="tel:+97143260688">+971 4326 0688</a></p>
                    </div>
                  </div>

                  {/* Legal Compliance */}
                  <div className="p-4" style={{backgroundColor: '#e3f2fd', borderRadius: '8px', borderLeft: '4px solid #2196F3'}}>
                    <p className="mb-0">
                      <strong>Legal Compliance:</strong> Siztec Technical Services LLC operates in full compliance with UAE Federal Labor Law, MOHRE regulations, and all applicable UAE legislation. We are a licensed manpower supply company authorized to operate in the United Arab Emirates.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}