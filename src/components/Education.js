import React from 'react';
import PropTypes from 'prop-types';

function Education(props) {
  return (
    <section class="section-education" id="education">
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">Education</h2>
      </div>
      <div class="row">
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture-1">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--1">
                  Information Technology Analyst
                </span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>Current</li>
                  <li>
                    {/* La carrera Analista en Tecnologías de la Información está
                    orientada al desarrollo de sistemas que colaboran entre sí,
                    alineados a las necesidades reales de los negocios y
                    contemplando la innovación como motor de cambio. */}
                    The Information Technology Analyst career is oriented to the
                    development of systems that collaborate with each other,
                    aligned to the real needs of business and looking at
                    innovation as a driver for change.
                  </li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">See career details</p>
                </div>
                <a
                  href="https://fi.ort.edu.uy/analista-en-tecnologias-de-la-informacion"
                  class="btn btn--white"
                  target="_blank"
                >
                  go to site
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture-2">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--2">
                  Quality Management Specialist UNIT-ISO 9000
                </span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>Graduate</li>
                  <li>
                    Train personnel who are capable of implementing, evaluating
                    and improving quality management systems in organizations,
                    according to the model of the UNIT-ISO 9000 family
                    standards.
                  </li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-2">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">See career details</p>
                </div>
                <a
                  href="https://www.unit.org.uy/capacitacion/categoria/calidad/78/"
                  class="btn btn--white"
                  target="_blank"
                >
                  go to site
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture-3">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--3">
                  Degree in administration
                </span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>2014 - 2016 (Not graduated)</li>
                  <li>
                    The Bachelor of Administration prepares professionals with
                    adequate knowledge to participate in the management and
                    creation of companies and other organizations, using their
                    resources effectively and sustainably.
                  </li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-3">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">See career details</p>
                </div>
                <a
                  href="http://fcea.edu.uy/ensenanza/las-carreras-de-fcea/153-licenciado-en-administracion.html"
                  class="btn btn--white"
                  target="_blank"
                >
                  go to site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col-4-of-4">
          <h3 class="heading-tertiary u-margin-bottom-small">
            Additional studies
          </h3>
          <p class="paragraph">Languages - English </p>
          <p class="paragraph">Excel - intermediate / advanced </p>
        </div>
        <div class="col-4-of-4">
          <h3 class="heading-tertiary u-margin-bottom-small">Online courses</h3>
          <p class="paragraph">
            Udemy -{' '}
            <a
              href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/"
              target="_blank"
              className="education_course__link"
            >
              Node.js Developer Course
            </a>{' '}
          </p>
          <p class="paragraph">
            Udemy -{' '}
            <a
              href="https://www.udemy.com/course/react-2nd-edition/"
              target="_blank"
              className="education_course__link"
            >
              The Complete React Developer Course (w/ Hooks and Redux)
            </a>{' '}
          </p>
          <p class="paragraph">
            Udemy -{' '}
            <a
              href="https://www.udemy.com/course/mern-stack-front-to-back/"
              target="_blank"
              className="education_course__link"
            >
              MERN Stack Front To Back: Full Stack React, Redux & Node.js
            </a>{' '}
          </p>
          <p class="paragraph">
            Udemy -{' '}
            <a
              href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/"
              target="_blank"
              className="education_course__link"
            >
              Build Responsive Real World Websites with HTML5 and CSS3
            </a>{' '}
          </p>

          <p class="paragraph">
            Udemy -{' '}
            <a
              href=" https://www.udemy.com/course/csharp-tutorial-for-beginners/"
              target="_blank"
              className="education_course__link"
            >
              C# Basics for Beginners: Learn C# Fundamentals by Coding
            </a>{' '}
          </p>
        </div>
        <div class="col-4-of-4">
          <h3 class="heading-tertiary u-margin-bottom-small">Knowledge of:</h3>
          <p class="paragraph">HTML5 - CSS - SASS</p>
          <p class="paragraph">Databases (MongoDB, SQL, MySQL)</p>
          <p class="paragraph">React.js </p>
          <p class="paragraph">Node.js </p>
          <p class="paragraph">C# </p>
          <p class="paragraph">Selenium webdriver automation (low)</p>
        </div>
      </div>

      {/* <div class="u-center-text u-margin-top-huge">
        <a href="#" class="btn btn--green">
          Discover all tours
        </a>
      </div> */}
      <section class="section-features-separator-experience"></section>
    </section>
  );
}

Education.propTypes = {};

export default Education;
