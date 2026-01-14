
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="error-page-area" style={{ backgroundImage: 'url("/images/bg/error_page_bg.png")' }}>
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
            <div className="error-page-content text-center pt-170 pb-170">
              <img src="/images/icons/404.png" alt="404" />
              <h2 className="error-page-title mt-30 mb-10">
                The page you are looking for is not found!
              </h2>
              <p>Sorry for the inconvenience. Feel free to search for your keyword, hope you find what you need.</p>
              
              <Link className="cta-btn mt-45" href="/"><i className="las fa-arrow-left"></i>Back Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
