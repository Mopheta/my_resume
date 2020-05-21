import React from 'react';
import PropTypes from 'prop-types';

function Experience(props) {
  return (
    <section id="experience" class="section-experience">
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">Experience</h2>
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <h3 class="heading-tertiary u-margin-bottom-small">
            Altimetrik - Developer Junior React - Dec 2019 - current
          </h3>
          <p class="paragraph">
            Internal application of the company. Technologies: React.js (redux),
            node.js, mongoDB (express).
          </p>
          <h3 class="heading-tertiary u-margin-bottom-small">
            Altimetrik - Quality Assurance - Nov 2018 - Dec 2019
          </h3>
          <p class="paragraph">
            Data Analysis - Functional Testing - Automation (Junior / selenium
            webdriver) - Requirements analysis - UX - Minor bug fixing
          </p>
          <h3 class="heading-tertiary u-margin-bottom-small">
            Tata Consultancy Services - Quality Assurance - Aug 2016 - Nov 2018
          </h3>
          <p class="paragraph">
            Data Analysis - Functional Testing - Requirements analysis - UX
          </p>
        </div>

        <div class="col-1-of-2">
          <h2 class="heading-tertiary  u-margin-bottom-small-hobbies">
            Tata Consultancy Services - Procurement Team – HSPS Team Supervisor
            - Jul 2015 - Aug 2016
          </h2>
          <p class="paragraph">
            Administrative Role - IT products purchase - Bills
          </p>
          <h2 class="heading-tertiary  u-margin-bottom-small-hobbies">
            Tata Consultancy Services - Code Setup - Team member - Nov 2014 –
            Jul 2015
          </h2>
          <p class="paragraph">
            Administrative Role - Creation and maintenance of service lines
            (tax, assurance, advisory).
          </p>
          <h2 class="heading-tertiary  u-margin-bottom-small-hobbies">
            Before TCS
          </h2>
          <p class="paragraph">
            Accounting and Finance {''}
            Sales - IT item seller Sales - Computer and video game supplies
          </p>
        </div>
      </div>
      <section class="section-features-separator-aboutpage"></section>
    </section>
  );
}

Experience.propTypes = {};

export default Experience;
