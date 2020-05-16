import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

function Footer(props) {
  return (
    <footer className="footer">
      {/* <div className="footer_logo-box">
        <img src="" alt="full logo" className="footer_logo"></img>
      </div> */}
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <Link
                  to="aboutme"
                  className="footer__link"
                  href="#"
                  smooth={true}
                  duration={500}
                >
                  About me
                </Link>
              </li>
              <li className="footer__item">
                <Link
                  to="education"
                  className="footer__link"
                  href="#"
                  smooth={true}
                  duration={500}
                >
                  Education
                </Link>
              </li>
              <li className="footer__item">
                {' '}
                <Link
                  to="experience"
                  className="footer__link"
                  href="#"
                  smooth={true}
                  duration={500}
                >
                  Experience
                </Link>
              </li>
              <li className="footer__item">
                {' '}
                <Link
                  to="contact-me"
                  className="footer__link"
                  href="#"
                  smooth={true}
                  duration={500}
                >
                  Contact me
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer_text">
            {' '}
            Built this page for my personal resume. Contact email
            kevinstalker14@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
