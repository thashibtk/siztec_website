import type { Metadata } from "next";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Privacy Policy - Siztec Technical Services",
  description: "Privacy Policy for Siztec Technical Services LLC - How we collect, use, and protect your personal information."
};

export default function PrivacyPolicy() {
  return (
    <>
      {/*  Title */}
      <div className="contact-title-area position-relative pt-110 pb-80 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-wrap text-center">
                <h1 className="title hero-title">Privacy Policy</h1>
                <p className="hero-title">Last Updated: January 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Title Ends */}

      {/* Privacy Policy Content */}
      <div className="pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <ScrollAnimation>
                <div className="content">
                  {/* Introduction */}
                  <div className="mb-5">
                    <h3 className="mb-3">1. Introduction</h3>
                    <p>
                      Siztec Technical Services LLC ("we", "our", or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
                    </p>
                    <p>
                      This policy applies to all individuals who interact with our services, including clients, job applicants, employees, contractors, and website visitors.
                    </p>
                  </div>

                  {/* Information We Collect */}
                  <div className="mb-5">
                    <h3 className="mb-3">2. Information We Collect</h3>
                    
                    <h5 className="mb-3">2.1 Personal Information</h5>
                    <p>We may collect the following types of personal information:</p>
                    <ul className="mb-3">
                      <li>Contact information (name, email address, phone number, physical address)</li>
                      <li>Professional information (job title, company name, work history)</li>
                      <li>Identification documents (passport, Emirates ID, visa documents)</li>
                      <li>Educational qualifications and certifications</li>
                      <li>Employment history and references</li>
                      <li>Bank account details for salary processing</li>
                      <li>Emergency contact information</li>
                    </ul>

                    <h5 className="mb-3">2.2 Automatically Collected Information</h5>
                    <p>When you visit our website, we may automatically collect:</p>
                    <ul className="mb-3">
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring website addresses</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>

                  {/* How We Use Your Information */}
                  <div className="mb-5">
                    <h3 className="mb-3">3. How We Use Your Information</h3>
                    <p>We use your personal information for the following purposes:</p>
                    <ul>
                      <li>Providing workforce and recruitment services</li>
                      <li>Processing job applications and employment contracts</li>
                      <li>Managing client relationships and service delivery</li>
                      <li>Conducting background checks and verification processes</li>
                      <li>Processing payroll and benefits administration</li>
                      <li>Compliance with UAE labor laws and regulations</li>
                      <li>Communicating about services, updates, and opportunities</li>
                      <li>Improving our services and website functionality</li>
                      <li>Marketing and promotional purposes (with your consent)</li>
                      <li>Legal compliance and dispute resolution</li>
                    </ul>
                  </div>

                  {/* Information Sharing */}
                  <div className="mb-5">
                    <h3 className="mb-3">4. Information Sharing and Disclosure</h3>
                    <p>We may share your information with:</p>
                    
                    <h5 className="mb-3">4.1 Service Providers</h5>
                    <p>Third-party vendors who assist us with payroll processing, background checks, IT services, and other business operations.</p>

                    <h5 className="mb-3">4.2 Client Companies</h5>
                    <p>When placing candidates, we share relevant professional information with potential employers.</p>

                    <h5 className="mb-3">4.3 Government Authorities</h5>
                    <p>UAE Ministry of Human Resources and Emiratisation (MOHRE), immigration authorities, and other regulatory bodies as required by law.</p>

                    <h5 className="mb-3">4.4 Legal Requirements</h5>
                    <p>When required to comply with legal obligations, court orders, or to protect our rights and safety.</p>
                  </div>

                  {/* Data Security */}
                  <div className="mb-5">
                    <h3 className="mb-3">5. Data Security</h3>
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul>
                      <li>Secure servers and encrypted data transmission</li>
                      <li>Access controls and authentication procedures</li>
                      <li>Regular security audits and updates</li>
                      <li>Employee training on data protection</li>
                      <li>Confidentiality agreements with staff and partners</li>
                    </ul>
                    <p className="mt-3">
                      However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </div>

                  {/* Data Retention */}
                  <div className="mb-5">
                    <h3 className="mb-3">6. Data Retention</h3>
                    <p>
                      We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by UAE law. Retention periods vary based on:
                    </p>
                    <ul>
                      <li>The nature of the information collected</li>
                      <li>Legal and regulatory requirements</li>
                      <li>Business and operational needs</li>
                      <li>Ongoing employment or service relationships</li>
                    </ul>
                  </div>

                  {/* Your Rights */}
                  <div className="mb-5">
                    <h3 className="mb-3">7. Your Rights</h3>
                    <p>Under UAE data protection laws, you have the right to:</p>
                    <ul>
                      <li>Access your personal information we hold</li>
                      <li>Request correction of inaccurate information</li>
                      <li>Request deletion of your information (subject to legal obligations)</li>
                      <li>Object to processing of your information</li>
                      <li>Withdraw consent for marketing communications</li>
                      <li>Request a copy of your information in portable format</li>
                    </ul>
                    <p className="mt-3">
                      To exercise these rights, please contact us using the details provided below.
                    </p>
                  </div>

                  {/* Cookies */}
                  <div className="mb-5">
                    <h3 className="mb-3">8. Cookies and Tracking Technologies</h3>
                    <p>
                      Our website uses cookies and similar technologies to enhance user experience, analyze website traffic, and improve our services. You can control cookie preferences through your browser settings.
                    </p>
                  </div>

                  {/* Third Party Links */}
                  <div className="mb-5">
                    <h3 className="mb-3">9. Third-Party Links</h3>
                    <p>
                      Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                    </p>
                  </div>

                  {/* Children's Privacy */}
                  <div className="mb-5">
                    <h3 className="mb-3">10. Children's Privacy</h3>
                    <p>
                      Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors.
                    </p>
                  </div>

                  {/* International Transfers */}
                  <div className="mb-5">
                    <h3 className="mb-3">11. International Data Transfers</h3>
                    <p>
                      Your information may be transferred to and processed in countries outside the UAE. We ensure appropriate safeguards are in place to protect your information in accordance with this policy.
                    </p>
                  </div>

                  {/* Changes to Policy */}
                  <div className="mb-5">
                    <h3 className="mb-3">12. Changes to This Privacy Policy</h3>
                    <p>
                      We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated policy on our website with a revised "Last Updated" date.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="mb-5">
                    <h3 className="mb-3">13. Contact Us</h3>
                    <p>
                      If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="mt-3 p-4" style={{backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
                      <p className="mb-2"><strong>Siztec Technical Services LLC</strong></p>
                      <p className="mb-2">Dubai, United Arab Emirates</p>
                      <p className="mb-2">Email: <a href="mailto:info@siztec.com">info@siztec.com</a></p>
                      <p className="mb-0">Phone: <a href="tel:+97143260688">+971 4326 0688</a></p>
                    </div>
                  </div>

                  {/* Compliance Statement */}
                  <div className="p-4" style={{backgroundColor: '#e3f2fd', borderRadius: '8px', borderLeft: '4px solid #2196F3'}}>
                    <p className="mb-0">
                      <strong>Compliance Statement:</strong> This Privacy Policy is designed to comply with UAE Federal Law and the regulations of the Ministry of Human Resources and Emiratisation (MOHRE). Siztec Technical Services LLC is committed to upholding the highest standards of data protection and privacy.
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