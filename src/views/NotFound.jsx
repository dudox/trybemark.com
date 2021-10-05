import React from "react";
import { Link } from "react-router-dom";
import FooterAnimation from "../components/footer/FooterAnimation";
import useDocumentMeta from "../components/useDocumentMeta";

const NotFound = () => {
  useDocumentMeta("Not Found | Ahmed Ahmed | Software & DevOps Engineer");
  return (
    <>
      <section className="error-page-wrapper">
        <div className="container">
          <div className="row justify-content-center full-screen align-items-center">
            <div className="col-lg-8 text-center">
              <div className="inner">
                <h1 className="display-3 white-color m-15px-b">
                  404 - Page Not Found..
                </h1>
                <p className="h4">
                  Whoops, it looks like the page you request wasn't found.
                </p>
                <div className="btn-bar mt-4">
                  <Link className="px-btn px-btn-white" to="/">
                    BACK TO HOME
                  </Link>
                  {/* End purchase_button */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Error Page Wrapper */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <FooterAnimation />
        </div>
      </footer>
      {/* End footer */}
    </>
  );
};

export default NotFound;
